import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {/* Pages will go here later */}
          <Route path="/" element={<div>Home Page</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
