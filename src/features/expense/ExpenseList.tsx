import Expense from "./Expense";

const ExpenseList = () => {
  const expenses = [
    {
      id: 0,
      title: "Bread",
      description: "Bought bread for making a sandwitch",
      price: 4.99,
      category: "Groceries",
    },
  ];
  return (
    <section className="w-full max-w-[1200px] m-auto">
      {expenses.map((expense) => (
        <Expense
          key={expense.id}
          title={expense.title}
          description={expense.description}
          price={expense.price}
          category={expense.category}
        />
      ))}
    </section>
  );
};

export default ExpenseList;
