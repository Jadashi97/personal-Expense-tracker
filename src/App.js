import './App.css';
import Header from './components/Header';
import AddTransaction from './components/AddTransaction';
import TransactionList from './components/TransactionList';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

function App() {
  return (
    <div className="container">
      <Header/>
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </div>
  );
}

export default App;
