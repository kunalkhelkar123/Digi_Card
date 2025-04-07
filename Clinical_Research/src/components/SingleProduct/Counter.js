"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="input-counter">
        <span className="minus-btn" onClick={decreaseCount}>
          <i className="fas fa-minus"></i>
        </span>

        <input 
          type="text" 
          min="1" 
          max="10" 
          value={count} 
          readOnly 
        />

        <span className="plus-btn" onClick={increaseCount}>
          <i className="fas fa-plus"></i>
        </span>
      </div>
    </>
  );
};

export default Counter;
