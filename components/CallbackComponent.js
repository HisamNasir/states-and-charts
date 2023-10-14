import { useCallback, useState } from 'react';
const CallbackComponent = () => {
  const [count, setCount] = useState(0);
  const addition = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={addition}>Add</button>
    </div>
  );
};
export default CallbackComponent;