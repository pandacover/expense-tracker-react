import { GlobalContext } from '../context/GlobalState';
import { Transaction } from './Transaction';
import { useContext } from 'react';

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        { transactions.map (transactions => (<Transaction key={transactions.id} transactions={transactions}/>))} 
      </ul>
    </>
  )
}
