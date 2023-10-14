import { forwardRef, useImperativeHandle, useRef } from 'react';
const ImperativeHandleComponent = forwardRef((props, ref) => {
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
});
export default ImperativeHandleComponent;
