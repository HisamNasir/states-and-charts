import { createContext, useContext, useState } from 'react';
const MyContext = createContext();
const MyContextProvider = ({ children }) => {
  const [value, setValue] = useState('Context Value');
  return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
};
export const useMyContext = () => {
  return useContext(MyContext);
};
export default MyContextProvider;