import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const myArray = [
  {
    'id': 1,
    'name': 'Admin'
  },
  {
    'id': 2,
    'name': 'User'
  }
];

export default function List() {
  const myList = myArray.map((item) => <tr><td>{item.name}</td></tr>)
  const [query, setQuery] = useState("")
  const filteredData = myArray.filter((item) => {
    //if no input the return the original
    if (query === '') {
      return item;
    }
    //return the item which contains the user input
    else {
      return item.name.toLowerCase().includes(query.toLowerCase())
    }
  })
  return (
    <div>
      <div className='row mb-3'>
        <div className='col-xl-12'>
          <Link to={{ pathname: `/user/create` }} className='btn btn-primary'>Create</Link>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col-xl-12'>
          <input type='text' className='form-control' onChange={event => setQuery(event.target.value)} />
        </div>
      </div>
      <div className='row'>
        <div className='col-xl-12'>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Normal</th>
              </tr>
            </thead>
            <tbody>
              {myList}
            </tbody>
          </table>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Filter</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                filteredData.map((user) => (
                  <tr>
                    <td>{user.name}</td>
                    <td><Link to={{ pathname: `/user/${user.id}/edit` }}>Edit</Link></td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}