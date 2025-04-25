// src/App.tsx
import { Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import BlogList from './Blog/BlogList'
import BlogPost from './Blog/BlogPost'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  )
}
