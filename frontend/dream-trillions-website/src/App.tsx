import React, { useState } from "react";
import { HashRouter,BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/HomePage/homePage";
import Careers from "./pages/Career/career";
import Services from "./pages/Services/service";
import Contact from "./pages/Contact/contact";
import About from "./pages/Aboutus/aboutus";
import Loader from "./pages/Loader/loader";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="careers" element={<Careers />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;