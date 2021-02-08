import { useReducer } from "react"

const initialState = {
  counter: 10
};

type actionType = { type: "increase" } | { type: "decrease" } | { type: "custom", payload: number }

const countReducer = (state: typeof initialState, action: actionType)=>{
  switch (action.type) {
    case "increase":
      return {
        ...state,
        counter: state.counter + 1
      };
    
    case "decrease":
      return {
        ...state,
        counter: state.counter - 1
      };
    
    case "custom":
      return {
        ...state,
        counter: action.payload
      };
  
    default:
      return state;
  }
}

const CounterReducer = () => {
  const [{ counter }, dispatch] = useReducer(countReducer, initialState)
  return (
    <>
      <h2>counter: { counter }</h2> 
      <button 
        className="btn btn-outline-primary"
        onClick={ () => dispatch({ type: 'increase' }) }
      >
        +1
      </button>
      &nbsp;
      <button 
        className="btn btn-outline-primary"
        onClick={ () => dispatch({ type: 'decrease' }) }
        disabled={counter <= 0}
      >
        -1
      </button>
      &nbsp;
      <button 
        className="btn btn-outline-success"
        onClick={ () => dispatch({ type: 'custom', payload: 100 }) }
      >
        100
      </button>
      &nbsp;
      <button 
        className="btn btn-outline-info"
        onClick={ () => dispatch({ type: 'custom', payload: 0 }) }
      >
        0
      </button>
    </>
  )
}

export default CounterReducer
