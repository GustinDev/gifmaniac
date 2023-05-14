import { useState } from 'react';
import AddCategory from './AddCategory';

function GifExpert() {
  const [categories, setCategories] = useState(['One Punch', 'Goku']);

  let addCategory = () => {
    setCategories([...categories, 'Valorant']);
  };

  return (
    <div>
      {/* 1. Titutlo */}
      <h1>GIF MANIAC</h1>
      {/* Input */}
      <AddCategory />
      <button onClick={addCategory}>Add</button>
      {/* INPUT */}
      {categories.map((category, index) => {
        return <li key={index}>{category}</li>;
      })}
      {/* LISTADO */}
    </div>
  );
}

export default GifExpert;
