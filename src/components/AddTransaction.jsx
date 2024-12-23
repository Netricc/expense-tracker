import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Globalcontext } from "../context/GlobalState";

const AddTransaction = () => {
  const { addTransaction } = useContext(Globalcontext);

  if (!addTransaction) {
    console.error("addTransaction function is not available in the context.");
    return null;
  }

  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      console.error("Transaction text cannot be empty.");
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text.trim(),
      amount: parseFloat(amount),
    };

    if (isNaN(newTransaction.amount)) {
      console.error("Amount must be a valid number.");
      return;
    }

    addTransaction(newTransaction);
    setText("");
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button type="submit" className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

AddTransaction.propTypes = {
  addTransaction: PropTypes.func,
};

export default AddTransaction;
