import React, { useState } from "react";

function Counter()  {
    
  const[count, setCount] = useState(0);

  return (
    <div>
      <input type='number' onChange={e => setCount(e.target.value)}/>
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>>
        -1
      </button>
    </div>
  );
}


export default Counter;