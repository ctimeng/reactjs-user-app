import React, { useState, useEffect } from 'react';
import axios from "axios"
import Pagination from "react-js-pagination";

const List = () => {

  const [items, setItems] = useState([]);
  const [state, setState] = useState(1);

  const handlePageChange = async e => {
    console.log(`active page is ${e}`);
    setState(e);
    getData();
  };

  const getData = async () => {
    const { data: ServerResponse } = await axios.get(
      `https://reqres.in/api/users?page=${state}`
    );
    setItems(ServerResponse.data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Permission</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Permission</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <td>{item.first_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            activePage={state}
            itemsCountPerPage={10}
            totalItemsCount={450}
            pageRangeDisplayed={5}
            itemClass='page-item'
            linkClass='page-link'
            onChange={handlePageChange.bind(this)}
          />
        </div>
      </section>

    </div>
  );
}

export default List;