import { useReducer } from "react";
const counterReducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
const ReducerCounter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "Add" })}>Add</button>
    </div>
  );
};

export default ReducerCounter;
