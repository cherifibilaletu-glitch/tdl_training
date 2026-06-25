import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Domain from "./pages/Domain";
import Corporate from "./pages/Corporate";
import Languages from "./pages/Languages";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Documents from "./pages/Documents";
import Faq from "./pages/Faq";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="domains/:key" element={<Domain />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="languages" element={<Languages />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="news" element={<News />} />
        <Route path="documents" element={<Documents />} />
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
