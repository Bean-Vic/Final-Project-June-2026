import React, { useRef } from 'react';

export const UseRefExample = () => {
    const ref = useRef();
    console.log(`Ref: ${JSON.stringify(ref)}`);

    const handleClick = () => {
        ref.current.value = '0';
    }
    return(
      <>
          <h1>Use Ref Example</h1>
          <input ref={ref} />
          <button onClick={handleClick}>Reset</button>
      </>
    );
}