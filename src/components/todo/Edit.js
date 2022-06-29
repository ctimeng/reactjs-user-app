import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import app from '../Firebase';
import { getFirestore, updateDoc, getDoc, doc } from 'firebase/firestore/lite';

const Edit = (id) => {
    const navigate = useNavigate();
    const params = useParams();
    const db = getFirestore(app);

    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();

    useEffect(() => {
        async function fetchMyAPI() {
            const noteSnapshot = await getDoc(doc(db, 'broads', params.id));
            if (noteSnapshot.exists()) {
                setTitle(noteSnapshot.data().title)
                setAuthor(noteSnapshot.data().author)
                setDescription(noteSnapshot.data().description)
            } else {
                console.log("Note doesn't exist");
            }
        }
        fetchMyAPI()
    }, [])

    const handleSubmit = async e => {
        e.preventDefault();
        const noteRef = doc(db, "broads", params.id);
        await updateDoc(noteRef, {
            title: title,
            description: description,
            author:author
        });
        navigate("/todo");
    }

    return <form onSubmit={handleSubmit}>
        <div className="card-body">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" value={title} id="title" placeholder="Title" onChange={e => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" value={author} id="author" placeholder="Author" onChange={e => setAuthor(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea className="form-control" id="author" placeholder="Author" onChange={e => setDescription(e.target.value)} value={description}></textarea>
            </div>
        </div>
        <div className="card-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to={{ pathname: `/todo` }} className='btn btn-danger float-right'>Cancel</Link>
        </div>
    </form>;
};

export default Edit;