import z from "zod";
import { FieldValues, useForm } from "react-hook-form";
import CATEGORY_OPTIONS from "../../constants/category";
import PRIORITY from "../../constants/priority";
import STATUS from "../../constants/status";
import Button from "../../components/ui/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import CATEGORY from "../../constants/category";

const schema = z.object({
  inputValue: z.string().min(3),
  category: z.enum(CATEGORY),
  status: z.enum(STATUS),
  priority: z.enum(PRIORITY),
});

type FormData = z.infer<typeof schema>;

const TaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
    reset();
  };
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <label htmlFor="title" className="block">Title</label>
      <input
        {...register("inputValue")}
        type="text"
        id="title"
        placeholder="Description..."
        className="w-full p-2.5 mb-3 max-w-[700px] text-sm border border-gray-300 rounded bg-gray-50"
      />
      {errors.inputValue && (
        <p className="mb-2 text-red-500">{errors.inputValue.message}</p>
      )}

      <p>Category</p>
      <select {...register("category")}>
        {CATEGORY_OPTIONS.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <section>
        <p>Status</p>
        <select {...register("status")}>
          {STATUS.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </section>
      <section>
        <p>Priority</p>
        <select {...register("priority")}>
          {PRIORITY.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </section>
      <Button
        tailwindClasses="bg-gray-800 text-gray-100 hover:bg-gray-600 active:bg-gray-900 mt-1"
        handleClick={() => "hi"}
      >
        create
      </Button>
    </form>
  );
};

export default TaskForm;
