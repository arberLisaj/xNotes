export interface ExpenseType {
  id: number;
  title: string;
  description: string;
  price: number;
  category: "Groceries" | "Utilities" | "Entertainment";
}
interface Props {
  expense: ExpenseType;
}
const Expense = ({
  expense: { id, title, description, price, category },
}: Props) => {
  return (
    <div className="w-fit">
      <p>{id}</p>
      <h1>{title}</h1>
      <hr />
      <p>{description}</p>
      <hr />
      <span>{category}</span> <span>{price}</span>
    </div>
  );
};

export default Expense;
