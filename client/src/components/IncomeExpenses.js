import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { moneyFormatter } from './Transaction';

const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transaction =>(transaction.amount));

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expenses = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  );


  return (
    <div className='inc-expense-container'>
      <div>
        <h3>Income</h3>
        <p className='money plus'>{moneyFormatter(income)}</p>
      </div>
      <div>
        <h3>Expenses</h3>
        <p className='money minus'>{moneyFormatter(expenses)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
