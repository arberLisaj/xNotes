import Navbar from "../../layouts/Navbar";
import LinkButton from "./LinkButton";

const NotFound = () => {
  return (
    <>
      <Navbar />
      <section className="w-screen text-center">
        <h1 className=" mt-10 text-4xl font-[500] ">404 - Not Found</h1>
        <p className="text-lg ">
          The page you tried to access could not be found
        </p>
        <LinkButton
          linkAddress="/"
          tailwindClasses="m-auto mt-2 bg-gray-800 text-gray-100 rounded-md hover:bg-gray-600 active:bg-gray-900"
        >
          Take me Home
        </LinkButton>
      </section>
    </>
  );
};

export default NotFound;
