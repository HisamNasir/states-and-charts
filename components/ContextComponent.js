import { useMyContext } from '../context/MyContext';
const ContextComponent = () => {
  const { value, setValue } = useMyContext();
  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue('New Value')}>the value</button>
    </div>
  );
};
export default ContextComponent;
