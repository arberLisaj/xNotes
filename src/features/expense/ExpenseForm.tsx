import Button from "../../components/ui/Button";

const ExpenseForm = () => {
  return (
    <section className="w-full max-w-[1200px] m-auto">
      <input
        type="text"
        className="block w-full p-2 border max-w-[700px] bg-gray-50"
        placeholder="title"
      />
      <textarea
        className="block w-full p-2 mt-2 border resize-none max-w-[700px] bg-gray-50"
        placeholder="description"
      ></textarea>
      <select className="mt-2 text-gray-700 cursor-pointer">
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
      <Button
        handleClick={() => console.log("hi")}
        tailwindClasses="bg-gray-800 text-gray-100 mt-2 hover:bg-gray-700 active:bg-gray-900"
      >
        create
      </Button>
    </section>
  );
};

export default ExpenseForm;
