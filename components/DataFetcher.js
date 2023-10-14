import { useEffect, useState } from 'react';
const DataFetcher = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    ///////////fetch data
  }, []);
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default DataFetcher;
