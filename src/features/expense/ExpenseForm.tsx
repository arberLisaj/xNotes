import Button from "@/components/Button";
import useStore from "@/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(6),
  price: z.number().min(0.5),
  category: z.enum(["Groceries", "Utilities", "Entertainment"], {
    errorMap: () => ({ message: "Category is required." }),
  }),
});
type formData = z.infer<typeof schema>;

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const addExpense = useStore((store) => store.addExpense);
  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
    navigate("/expenses");
  };
  return (
    <form
      className="py-8 p-4 rounded border-2 dark:border-gray-700 max-w-[1100px] m-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        {...register("title")}
        autoFocus
        placeholder="enter a title..."
      />
      {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      <label htmlFor="price">Price</label>
      <input
        type="number"
        id="price"
        {...register("price", { valueAsNumber: true })}
        placeholder="price"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}

      <label htmlFor="description" className="mt-2">
        Description
      </label>
      <textarea
        {...register("description")}
        id="description"
        className="block w-full p-2 outline-none resize-none max-w-[700px] dark:text-white border border-gray-300 dark:border-none dark:bg-gray-700 rounded"
        placeholder="description..."
      ></textarea>
      {errors.description && (
        <p className="text-red-500">{errors.description.message}</p>
      )}
      <label htmlFor="category" className="mt-2">
        Category
      </label>
      <select
        {...register("category")}
        id="category"
        className="text-gray-700 cursor-pointer mb-5"
      >
        <option>Groceries</option>
        <option>Utilities</option>
        <option>Entertainment</option>
      </select>
      <Button
        title="create"
        type="submit"
        className="bg-black text-white dark:bg-gray-700"
      >
        create expense
      </Button>
    </form>
  );
};

export default ExpenseForm;
