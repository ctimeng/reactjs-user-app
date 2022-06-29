import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import app from '../Firebase';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';

const Create = () => {

  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();

  const db = getFirestore(app);

  const handleSubmit = async e => {
    e.preventDefault();
    
    addDoc(collection(db, 'broads'), {
      title: title,
      description: description,
      author:author
    }).catch(err=>console.error(err))
    navigate("/todo");
  }

  return <form className='form-horizontal' onSubmit={handleSubmit}>
    <div className="card-body">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" className="form-control" id="title" placeholder="Title" onChange={e => setTitle(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="author">Author</label>
        <input type="text" className="form-control" id="author" placeholder="Author" onChange={e => setAuthor(e.target.value)}/>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea className="form-control" id="author" placeholder="Author" onChange={e => setDescription(e.target.value)}></textarea>
      </div>
    </div>
    <div className="card-footer">
      <button type="submit" className="btn btn-primary">Submit</button>
      <Link to={{ pathname: `/todo` }} className='btn btn-danger float-right'>Cancel</Link>
    </div>
  </form>;
};

export default Create;