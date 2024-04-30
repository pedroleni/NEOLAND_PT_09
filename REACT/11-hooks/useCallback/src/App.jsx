import React, { useState, useCallback } from "react";

// eslint-disable-next-line react/display-name
const CustomButton = React.memo(({ onClick }) => {
  console.log("Render Button");
  return <button onClick={onClick}>Click me</button>;
});

function Counter() {
  const [count, setCount] = useState(0); // definir estado count con valor inicial 0
  const increment = useCallback(() => setCount((c) => c + 1), []); // definir función increment que incrementa el estado count en 1
  return (
    <div>
      <p>Count: {count}</p>
      <CustomButton onClick={increment} />
    </div>
  );
}

export default Counter;
