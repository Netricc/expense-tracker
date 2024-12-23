import { Globalcontext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(Globalcontext);

  return (
    <>
      <h3>History</h3>
      {transactions && transactions.length > 0 ? (
        <ul className="list">
          {transactions.map((transaction) => (
            <Transaction
              text={transaction.text}
              key={transaction.id}
              id={transaction.id}
              amount={transaction.amount}
            />
          ))}
        </ul>
      ) : (
        <p className="p-no-transaction">There are no transactions yet</p>
      )}
    </>
  );
};

export default TransactionList;
