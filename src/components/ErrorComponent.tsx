import LinkButton from "./ui/LinkButton";

const ErrorComponent = () => (
  <>
    <section className="w-screen text-center">
      <h1 className="mt-10 text-4xl font-[500]">Oops!</h1>
      <p className="text-lg ">Oops,something went wrong. Please try again</p>

      <LinkButton
        linkAddress="/"
        tailwindClasses="m-auto mt-2 bg-gray-800 text-gray-100 rounded-md hover:bg-gray-600 active:bg-gray-900"
      >
        Take me Home
      </LinkButton>
    </section>
  </>
);

export default ErrorComponent;
