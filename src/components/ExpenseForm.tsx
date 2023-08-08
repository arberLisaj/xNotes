import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "./Categories";

// yarn add || npm i  @hookform/resolvers
// yarn add || npm i  react-hook-form
// yarn add ||  zod

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Price is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});
type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data), reset();
      })}
    >
      <div>
        <label htmlFor="description">Description</label>
        <input
          {...register("description")}
          id="description"
          type="text"
          placeholder="add a description"
        />
        {errors.description && <p>{errors.description.message}</p>}
      </div>
      <div>
        <label htmlFor="amount">Price</label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          placeholder="add the value"
        />
        {errors.amount && <p>{errors.amount.message}</p>}
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <select {...register("category")} id="category">
          <option value="">Select a category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && <p>{errors.category.message}</p>}
      </div>
      <button disabled={!isValid}>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
