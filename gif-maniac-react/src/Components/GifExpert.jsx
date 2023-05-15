import { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

function GifExpert() {
  const [categories, setCategories] = useState([]);

  let onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  };

  let onReset = () => {
    setCategories([]);
  };

  return (
    <div>
      {/* 1. Titutlo */}
      <h1>GIF MANIAC</h1>
      <button onClick={onReset}>Resetear</button>
      {/* Input */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* INPUT */}
      {categories.map((category, i) => (
        <GifGrid key={category + i} category={category} />
      ))}
      {/* LISTADO */}
    </div>
  );
}

export default GifExpert;
