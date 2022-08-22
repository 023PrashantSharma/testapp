import { Routes, Route, Link } from "react-router-dom"
import logo from "./logo.svg";
import Root from "./pages"
function App() {
  return (
    <Routes>
      <Route path={`/`} excat={true} element={
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="flex space-x-2 justify-center">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to={"/admin/dashboard"}>
              <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Dashboard</button>
            </Link>
          </div>
        </div>
      }
      />
      <Route path={`/admin/dashboard`} excat={true} element={<Root />} />
      <Route path={`*`} excat={true} element={<div >Not found</div>} />
    </Routes>
  );
}

export default App;
