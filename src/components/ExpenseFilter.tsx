import categories from "./Categories";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <section className="bg-blue-400">
      <select onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </section>
  );
};

export default ExpenseFilter;
