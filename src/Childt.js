import React, { useState } from "react";

const Child = ( {message} ) => {
  const [isVisible, setIsVisible] = useState(false);
 console.log(message)
  return (
    <div>
      <p>The message prop is: {message}</p>
      <button onClick={() => setIsVisible(!isVisible)}>
        Show/Hide
      </button>
      {isVisible && <p>The message prop is: {message}</p>}
    </div>
  );
};

export default Child;