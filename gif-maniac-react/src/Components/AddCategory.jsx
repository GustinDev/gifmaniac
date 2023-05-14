import { useState } from 'react';

function AddCategory() {
  const [inputValue, setInputValue] = useState('second');

  //Relación 1:
  //Le pasamos el evento y a el estado le pasamos target.value
  let onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  let onSubmit = (event) => {
    event.preventDefault();
  };

  console.log(inputValue);

  return (
    <div>
      {/* Relación 2
        Definimos el value como el estado y al onChange le pasamos el evento. */}
      <form onSubmit={(event) => onSubmit(event)}>
        <input
          type='text'
          placeholder='Busca Gifs'
          value={inputValue}
          onChange={(event) => onInputChange(event)}
        />
      </form>
    </div>
  );
}

export default AddCategory;
