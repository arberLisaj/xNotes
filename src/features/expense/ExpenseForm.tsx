import Button from "@/components/Button";

const ExpenseForm = () => {
  return (
    <section className="w-full max-w-[1100px] m-auto">
      <input type="text" placeholder="enter a title..." />
      <textarea
        className="block w-full p-2 mt-3 outline-none resize-none max-w-[700px] dark:text-white border border-gray-300 dark:border-none dark:bg-gray-700 rounded"
        placeholder="description..."
      ></textarea>
      <select className="mt-3 text-gray-700 cursor-pointer">
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
      <Button
        title="create"
        type="button"
        handleClick={() => console.log("hi")}
        className="bg-black text-white dark:bg-gray-700 p-2 px-4"
      >
        create expense
      </Button>
    </section>
  );
};

export default ExpenseForm;
