import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="flex-1 px-4 pb-8 max-w-4xl w-full mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
