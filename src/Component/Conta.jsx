
import {Button } from '@chakra-ui/react'
import { useReducer } from 'react'
  function Counter({initialCount}) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
      <>
        Count: {state.count}
        <Button
          onClick={() => dispatch({type: 'reset', payload: initialCount})}>
          Reset
        </Button>
        <Button onClick={() => dispatch({type: 'decrement'})}>-</Button>
        <Button onClick={() => dispatch({type: 'increment'})}>+</Button>
      </>
    );
  }
export default Counter;  