import { useContext } from "react";
import PropTypes from "prop-types";
import { Globalcontext } from "../context/GlobalState";

const Transaction = ({ text, id, amount }) => {
  const { deleteTransaction } = useContext(Globalcontext);

  if (!deleteTransaction) {
    console.error(
      "deleteTransaction function is not available in the context."
    );
    return null;
  }

  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={sign === "+" ? "plus" : "minus"}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(id)} className="delete-btn">
        X
      </button>
    </li>
  );
};

Transaction.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  amount: PropTypes.number.isRequired,
};

export default Transaction;
