import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <section>
      {isRouteErrorResponse(error) ? "invalid page" : "unexpected error"}
    </section>
  );
};

export default ErrorPage;
