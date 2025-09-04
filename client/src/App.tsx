import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  const location = useLocation();

  // Routes where you don't want the Navbar and Footer
  const hideLayout = location.pathname.startsWith("/dashboard");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900">
      {!hideLayout && (
        <header className="shadow-sm">
          <Navbar />
        </header>
      )}

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {!hideLayout && (
        <footer className="bg-white border-t py-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Banku. All rights reserved.
        </footer>
      )}
    </div>
  );
};

export default App;
