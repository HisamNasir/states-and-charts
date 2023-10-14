import { useMemo, useState } from 'react';
const MemoComponent = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expensiveOperation = useMemo(() => {
    return data.map((item) => item * 2);
  }, [data]);
  return (
    <div>
      <p>Expensive Operation Result: {expensiveOperation.join(', ')}</p>
    </div>
  );
};
export default MemoComponent;
