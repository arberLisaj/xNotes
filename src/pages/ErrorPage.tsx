import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NotFound from "../components/ui/NotFound";
import ErrorComponent from "../components/ErrorComponent";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section>
      {isRouteErrorResponse(error) ? <NotFound /> : <ErrorComponent />}
    </section>
  );
};

export default ErrorPage;
