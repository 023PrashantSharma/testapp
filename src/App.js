import { Routes, Route } from "react-router-dom"
import Root from "./pages/user"
import ListUser from "./pages"
function App() {
  return (
    <Routes>
      <Route path={`/`} excat={true} element={<Root />}
      />
      <Route path={`/admin/dashboard`} excat={true} element={<ListUser />} />
      <Route path={`*`} excat={true} element={<div >Not found</div>} />
    </Routes>
  );
}

export default App;
