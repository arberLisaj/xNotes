import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import Button from "../../components/ui/Button";
import {
  default as CATEGORY,
  default as CATEGORY_OPTIONS,
} from "../../constants/category";
import PRIORITY from "../../constants/priority";
import STATUS from "../../constants/status";
import { TaskStructure } from "./TaskTable";
import useStore from "../../assets/store";

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
    const newTask: TaskStructure = {
      id: Date.now(),
      title: data.inputValue,
      status: data.status,
      priority: data.priority,
      category: data.category,
    };
    console.log(newTask);
    addTask(newTask);
    reset();
    navigate("/tasks");
  };
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      <label htmlFor="title" className="block">
        Title
      </label>
      <input
        autoFocus
        {...register("inputValue")}
        type="text"
        id="title"
        placeholder="Description..."
        className="w-full p-1.5 mb-1 max-w-[700px] text-sm border dark:bg-gray-200 border-gray-300 rounded bg-gray-50 text-black"
      />
      {errors.inputValue && (
        <p className="mb-2 text-red-500 text-sm">{errors.inputValue.message}</p>
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
        type="button"
        className="bg-gray-800 text-gray-100 hover:bg-gray-600 active:bg-gray-900 capitalize"
        handleClick={() => "hi"}
      >
        create Task
      </Button>
    </form>
  );
};

export default TaskForm;
