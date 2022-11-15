import React, {useState} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  function onSubmit(e){
    e.preventDefault()

    const newTransaction = {
      id: Math.floor(Math.random()* 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text...."/>
        </div>
        <div className='form-control'>
          <label htmlFor="amount">Amount <br/> (negative - expense, positive - income)</label>
          <input type="number"  placeholder="Enter amount..."/>
        </div>
        <button className="btn">Add Transaction</button>
      </form>
    </div>
  )
}
