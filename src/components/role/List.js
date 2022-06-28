import React, { useState, useEffect } from 'react';

export default function List() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then((result) => {
        setItems(result);
      });
  }, []);

  return (
    <div>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Role</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Role</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <section className="content">
        <div className="container-fluid">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}