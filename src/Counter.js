import react, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  if (!action) return state;

  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "increment_by":
      return { count: state.count + action.payload };

    case "decrement_by":
      return { count: state.count - action.payload };  

    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="count">Count:{state.count}</div>
      <button onClick={() => dispatch({ type: "increment_by", payload:2 })}>+2</button>
      <button onClick={() => dispatch({ type: "increment" })}>+1</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ type: "decrement_by",payload:2 })}>-2</button>
    </>
  );
}
