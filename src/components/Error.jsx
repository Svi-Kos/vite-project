import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return <h1>An error occured: {error.message}</h1>;
}
