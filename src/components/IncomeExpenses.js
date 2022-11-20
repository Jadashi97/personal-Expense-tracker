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
    <div>
      <div>
        <p>Income</p>
        <p>{moneyFormatter(income)}</p>
      </div>
      <div>
        <p>Expenses</p>
        <p>{moneyFormatter(expenses)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses
