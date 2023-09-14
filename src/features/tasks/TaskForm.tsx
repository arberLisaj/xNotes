import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import Button from "../../components/Button";
import {
  default as CATEGORY,
  default as CATEGORY_OPTIONS,
} from "../../constants/category";
import PRIORITY from "../../constants/priority";
import STATUS from "../../constants/status";
import useStore from "../../store";

const schema = z.object({
  inputValue: z.string().min(3),
  category: z.enum(CATEGORY),
  status: z.enum(STATUS),
  priority: z.enum(PRIORITY),
});

type FormData = z.infer<typeof schema>;

const TaskForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const addTask = useStore((store) => store.addTask);
  const onSubmit = (data: FieldValues) => {
    const newTask = {
      id: Date.now(),
      title: data.inputValue,
      status: data.status,
      priority: data.priority,
      category: data.category,
    };
    addTask(newTask);
    reset();
    navigate("/tasks");
  };
  return (
    <form
      onSubmit={handleSubmit((data) => onSubmit(data))}
      className="py-8 p-4 rounded border-2 dark:border-gray-700"
    >
      <label htmlFor="title">title</label>
      <input
        autoFocus
        {...register("inputValue")}
        type="text"
        id="title"
        placeholder="Description..."
      />
      {errors.inputValue && (
        <p className="mb-2 text-red-500 text-sm dark:text-red-400">
          {errors.inputValue.message}
        </p>
      )}

      <label htmlFor="category">category</label>
      <select {...register("category")} id="category">
        {CATEGORY_OPTIONS.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <section>
        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")}>
          {STATUS.map((status, index) => (
            <option key={index} value={status}>
              {status}
            </option>
          ))}
        </select>
      </section>
      <section>
        <label htmlFor="priority">Priority</label>
        <select id="priority" {...register("priority")} className="mb-6">
          {PRIORITY.map((value, index) => (
            <option key={index} value={value}>
              {value}
            </option>
          ))}
        </select>
      </section>
      <Button
        title="create"
        type="submit"
        className="bg-gray-800 text-gray-100 hover:bg-gray-600 active:bg-gray-900 text-sm"
        handleClick={() => "hi"}
      >
        create task
      </Button>
    </form>
  );
};

export default TaskForm;
