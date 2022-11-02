import React from 'react';
import '../index.css';
import '../App.css'

const Reward = (props) => {
  return (
    <>
      <div>
        <span>
            <span className='doller'>$</span>
            <span className='amount'>{props.amount}</span>
        </span>
      </div>
    </>
  )
}

export default Reward
