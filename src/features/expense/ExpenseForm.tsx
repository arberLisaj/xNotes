import Button from "@/components/Button";

const ExpenseForm = () => {
  return (
    <form
      className="py-8 p-4 rounded border-2 dark:border-gray-700 max-w-[1100px] m-auto"
      onSubmit={(e) => e.preventDefault()}
    >
      <label htmlFor="title">Title</label>
      <input type="text" id="title" autoFocus placeholder="enter a title..." />
      <label htmlFor="description" className="mt-2">
        Description
      </label>
      <textarea
        id="description"
        className="block w-full p-2 outline-none resize-none max-w-[700px] dark:text-white border border-gray-300 dark:border-none dark:bg-gray-700 rounded"
        placeholder="description..."
      ></textarea>

      <label htmlFor="category" className="mt-2">
        Category
      </label>
      <select id="category" className="text-gray-700 cursor-pointer mb-5">
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
      <Button
        title="create"
        type="button"
        handleClick={() => console.log("hi")}
        className="bg-black text-white dark:bg-gray-700"
      >
        create expense
      </Button>
    </form>
  );
};

export default ExpenseForm;
