import React,{useContext}from 'react';
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export default function TransactionList() {

  const {transactions} = useContext(GlobalContext);

  return (
    <div>
      <h3>List of Expenses</h3>
      <ul>
      {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}
