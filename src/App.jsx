import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import PrivaccyPolicyPage from "./pages/PrivacyPolicyPage";
import BlogPostPage from "./pages/BlogPostPage";
import CategoryPage from "./pages/CategoryPage";
import AuthorPage from "./pages/AuthorPage";

function App() {
  return (
    <div className="h-screen scrollbar-thumb-[#232536] scrollbar-track-[#F4F4F4] overflow-y-scroll scrollbar-thin ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blogPost" element={<BlogPostPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy" element={<PrivaccyPolicyPage />} />
        <Route path="category" element={<CategoryPage />} />
        <Route path="author" element={<AuthorPage />} />
      </Routes>
    </div>
  );
}

export default App;
