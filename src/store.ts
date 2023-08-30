import { devtools, persist } from "zustand/middleware";
import { TaskStructure } from "./features/tasks/TaskTable";
import { create } from "zustand";
interface StoreType {
  tasks: TaskStructure[];
  deleteTask: (id: number) => void;
  addTask: (task: TaskStructure) => void;
  darkMode: boolean;
  setDarkMode: () => void;
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
      }),
      {
        name: "store-tasks",
      }
    )
  )
);
export default useStore;