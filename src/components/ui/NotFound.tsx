import { useNavigate } from "react-router-dom";
import Navbar from "../../layouts/Navbar";
import Button from "./Button";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section className="w-screen text-center">
        <h1 className=" mt-10 text-4xl font-[500] ">404 - Not Found</h1>
        <p className="text-lg ">
          The page you tried to access could not be found
        </p>
        <Button
          handleClick={() => navigate("/")}
          className="m-auto mt-2 bg-gray-800 text-gray-100 roudned-sm hover:bg-gray-600 active:bg-gray-900"
        >
          Take me Home
        </Button>
      </section>
    </>
  );
};

export default NotFound;
