// src/router.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
 import About from './pages/About.jsx';
 import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx'
// import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
         <Route path="/blog" element={<Blog />} />
         <Route path="/blog/:slug" element={<BlogPost />} />
        {/* <Route path="/portfolio" element={<Portfolio />} />  */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
