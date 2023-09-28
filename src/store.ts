import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { TaskType } from "./features/tasks/Task";
import { ExpenseType } from "./features/expense/Expense";

interface StoreType {
  tasks: TaskType[];
  deleteTask: (id: number) => void;
  addTask: (task: TaskType) => void;
  darkMode: boolean;
  setDarkMode: () => void;

  expenses: ExpenseType[];
  addExpense: (value: ExpenseType) => void;
  deleteExpense: (id: number) => void;
}

const useStore = create<StoreType>()(
  devtools(
    persist(
      (set) => ({
        darkMode: false,
        setDarkMode: () =>
          set((store) => ({ darkMode: store.darkMode ? false : true })),
        tasks: [],
        addTask: (task) => set((store) => ({ tasks: [task, ...store.tasks] })),
        deleteTask: (id) =>
          set((store) => ({
            tasks: store.tasks.filter((task) => task.id !== id),
          })),
        expenses: [],
        addExpense: (value) =>
          set((store) => ({ expenses: [value, ...store.expenses] })),

        deleteExpense: (id) =>
          set((store) => ({
            expenses: store.expenses.filter((e) => e.id !== id),
          })),
      }),
      {
        name: "store-tasks",
      }
    )
  )
);
export default useStore;
