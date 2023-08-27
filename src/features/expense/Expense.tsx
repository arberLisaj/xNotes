interface Props {
  title: string;
  description: string;
  price: number;
  category: string;
}
const Expense = ({ title, description, price, category }: Props) => {
  return (
    <section className="p-3 border rounded-md w-fit">
      <h1 className="font-[500] text-2xl">{title}</h1>
      <p>{price}</p>
      <p>{category}</p>
      <hr className="my-1" />
      <p>{description}</p>
    </section>
  );
};

export default Expense;
