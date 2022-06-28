import React, { useState, useEffect } from 'react';

export default function List() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8080/role')
      .then(res => res.json())
      .then((result) => {
        console.log(result)
        setItems(result);
      });
  }, []);

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}