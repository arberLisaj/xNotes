import Button from "../../components/ui/Button";

const ExpenseForm = () => {
  return (
    <section className="w-full max-w-[1100px] m-auto">
      <input
        type="text"
        className="block w-full p-2 border max-w-[700px] bg-gray-50 rounded"
        placeholder="title"
      />
      <textarea
        className="block w-full p-2 mt-3 border resize-none max-w-[700px] bg-gray-50 rounded"
        placeholder="description"
      ></textarea>
      <select className="mt-3 text-gray-700 cursor-pointer">
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
      <Button
        type="button"
        handleClick={() => console.log("hi")}
        className="bg-gray-800 text-gray-100 mt-2 hover:bg-gray-700 active:bg-gray-900 px-3 py-2 capitalize"
      >
        create expense
      </Button>
    </section>
  );
};

export default ExpenseForm;
