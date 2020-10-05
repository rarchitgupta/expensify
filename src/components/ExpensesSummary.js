import React from "react";
import { connect } from "react-redux";
import currency from "currency.js";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

const INR = (value) => currency(value, { useVedic: true, symbol: "₹" });

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = INR(expensesTotal).format();

  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}
      </h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
