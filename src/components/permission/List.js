import React, { useState, useEffect } from 'react';
import axios from "axios"

export default function List() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data: ServerResponse } = await axios.get(
        "http://localhost:8080/permission"
      );
      console.log(ServerResponse);
      setItems(ServerResponse)
    };
    getData();
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