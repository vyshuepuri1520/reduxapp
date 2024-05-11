import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
const Shop = () => {
  const dispatch=useDispatch();
  const balance = useSelector(state => state.amount) 
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch)
  return (
    <div>
        <h1>Deposit/withdraw money</h1>
      {/* <button className="btn btn-primary mx-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
      update balance
      <button className="btn btn-primary mx-3"onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}
      <button className="btn btn-primary mx-3" onClick={()=>{withdrawMoney(100)}}>-</button>
      update balance({balance})
      <button className="btn btn-primary mx-3"onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
