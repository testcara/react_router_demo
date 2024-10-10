import { Outlet } from "react-router-dom";
import Footer from "./footer";
export default function Users() {
  return (
    <div>
      <h1>Users Page</h1>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
