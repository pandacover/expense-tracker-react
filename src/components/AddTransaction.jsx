import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text
            <input type="text" placeholder='Enter text...' value={text} onChange={e => setText(e.target.value)}/>
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <input type="number" placeholder="Enter amount..." value={amount} onChange={e => setAmount(e.target.value)} />
          </label>
          <button className="btn">Add transaction</button>
        </div>
      </form>
    </>
  )
}
