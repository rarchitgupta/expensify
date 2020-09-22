import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should set up Remove Expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("Should set up Edit Expense action object", () => {
  const action = editExpense("123abc", { note: "new note value" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "new note value",
    },
  });
});

test("Should set up Add Expense action object with provided values", () => {
  const expenseData = {
    description: "rent",
    amount: 12000,
    createdAt: 1000,
    note: "This was last month",
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  });
});

test("Should set up Add Expense action object with zero values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      createdAt: 0,
      note: "",
    },
  });
});
