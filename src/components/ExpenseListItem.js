import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import currency from "currency.js";

const INR = (value) => currency(value, { useVedic: true, symbol: "₹" });

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <Link to={`/edit/${id}`} className="list-item">
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">
        {moment(createdAt).format("Do MMMM, YYYY")}
      </span>
    </div>
    <h3 className="list-item__data">{INR(amount).format()}</h3>
  </Link>
);

export default ExpenseListItem;
