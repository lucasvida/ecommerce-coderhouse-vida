import React, { useState } from 'react';

const ItemCount = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={incrementCount}>Clique aqui</button>
    </div>
  );
};

export default ItemCount;