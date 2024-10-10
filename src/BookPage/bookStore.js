import { Outlet } from "react-router-dom";
export default function BookStore() {
  return (
    <div>
      <h1>BookStore page</h1>
      <Outlet />
    </div>
  );
}
