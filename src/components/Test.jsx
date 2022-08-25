import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increase, decrease } from '../stores/testSlice'
import { useTest } from '../stores/testSlice'
const Test = () => {
  const { number, dispatch } = useTest()

  const increaseHandler = () => {
    dispatch(increase())
  }

  const decreaseHandler = () => {
    dispatch(decrease())
  }

  return (
    <>
      <div>{number}</div>
      <button onClick={increaseHandler}>+1</button>
      <button onClick={decreaseHandler}>-1</button>
    </>
  )
}

export default Test
