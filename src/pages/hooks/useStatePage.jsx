import { useState } from "react";


const UseStatePage = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {console.log("render")}
      <h1>UseStatePage</h1>
      <div>{count}</div>
      <div>
        {/* 当count 值未发生改变时，页面不会重新渲染 */}
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          还原
        </button>
        <button
          style={{ marginLeft: 16 }}
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default UseStatePage;
