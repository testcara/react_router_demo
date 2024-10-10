import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  return (
    <div>
      <h1>search page</h1>
      <p>Query: {query}</p>
      <p> Page: {page}</p>
    </div>
  );
}
