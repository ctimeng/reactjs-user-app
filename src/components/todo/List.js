import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../Firebase';
import { getFirestore, collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore/lite';

export default function List() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState([])

  const db = getFirestore(app);

  useEffect(() => {
    async function fetchMyAPI() {
      const itemsCol = collection(db, 'broads');
      const itemSnapshot = await getDocs(itemsCol);
      setItems(itemSnapshot.docs)
    }
    fetchMyAPI()
  }, [])

  const handleSearch = async e => {
    const q = query(collection(db, "broads"), where("title", "==", search));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
    if (querySnapshot.exists) {
      console.log("the document exists");
    } else {
      console.log("the document not exists");
    }
  }

  const handleDelete = async (e, id) => {
    e.preventDefault();
    async function fetchMyAPI() {
      const noteRef = doc(db, "broads", id);
      await deleteDoc(noteRef);
      const itemsCol = collection(db, 'broads');
      const itemSnapshot = await getDocs(itemsCol);
      setItems(itemSnapshot.docs)
    }
    fetchMyAPI()
  }

  return (
    <div className='card'>
      <div className='card-header'>
        <div className='card-title'>
          <Link to={{ pathname: `/todo/create` }} className='btn btn-primary'>Create</Link>
        </div>
        <div className='card-tools'>
          <div className="input-group input-group-sm">
            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" onChange={e => setSearch(e.target.value)}/>
            <div className="input-group-append">
              <button type="submit" className="btn btn-default" onClick={() => handleSearch()}>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='card-body table-responsive p-0'>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.data().title}</td>
                <td>{item.data().author}</td>
                <td>{item.data().description}</td>
                <td>
                  <Link to={{ pathname: `/todo/${item.id}/edit` }} className="btn btn-primary">Edit</Link>
                  <a href="#" onClick={(e) => handleDelete(e, `${item.id}`)} className="btn btn-danger">Delete</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}