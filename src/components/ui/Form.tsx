import CATEGORY_OPTIONS from "../../constants/category";
import PRIORITY from "../../constants/priority";
import STATUS from "../../constants/status";
import Button from "./Button";

const Form = () => (
  <section>
    <label htmlFor="title">Title</label>
    <input
      type="text"
      id="title"
      className="w-full p-2 mb-3 border border-gray-300 rounded bg-gray-50"
    />

    <p>Category</p>
    <select className="w-full">
      {CATEGORY_OPTIONS.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
    <section>
      <p>Status</p>
      <select>
        {STATUS.map((status, index) => (
          <option key={index} value={status}>
            {status}
          </option>
        ))}
      </select>
    </section>
    <section>
      <p>Priority</p>
      <select>
        {PRIORITY.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </section>
    <Button
      tailwindClasses="bg-gray-800 text-gray-100 hover:bg-gray-600 active:bg-gray-900"
      handleClick={() => console.log("hi mom")}
    >
      create
    </Button>
  </section>
);

export default Form;
