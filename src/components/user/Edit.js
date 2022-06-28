import {Link} from 'react-router-dom';
const Edit = () => {
    return <form>
        <div className="card-body">
            <div className="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter Username" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
        </div>
        <div className="card-footer">
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to={{pathname: `/user`}} className='btn btn-danger'>Cancel</Link>
        </div>
    </form>;
};

export default Edit;