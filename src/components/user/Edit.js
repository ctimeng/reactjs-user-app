import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from 'react';

const Edit = () => {
    const navigate = useNavigate();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
  
    const handleSubmit = async e => {
      e.preventDefault();
      navigate("/user");
    }

    return <form onSubmit={handleSubmit}>
        <div className="card-body">
            <div className="form-group">
                <label for="username">Username</label>
                <input type="email" className="form-control" id="username" placeholder="Enter Username" />
            </div>
            <div className="form-group">
                <label for="password">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" />
            </div>
        </div>
        <div className="card-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to={{pathname: `/user`}} className='btn btn-danger float-right'>Cancel</Link>
        </div>
    </form>;
};

export default Edit;