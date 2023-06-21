import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>Not found!</h1>
      <Link to="/">Return to home page</Link>
    </>
  );
}
