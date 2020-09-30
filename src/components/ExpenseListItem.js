import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import currency from "currency.js";

const INR = (value) => currency(value, { useVedic: true, symbol: "₹" });

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {INR(amount).format()} - {moment(createdAt).format("Do MMMM, YYYY")}
    </p>
  </div>
);

export default ExpenseListItem;
