import { useRef } from "react";
const RefComponent = () => {
  const myRef = useRef();
  const focusInput = () => {
    myRef.current.focus();
  };
  return (
    <div>
      <input ref={myRef} />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
export default RefComponent;
