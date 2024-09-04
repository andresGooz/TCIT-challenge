import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/views/error/404';
import Layout from "./components/layout/layout";
import Posts from "./components/lists/posts";
import CreatePost from "./components/forms/post_create";
import PostDetail from "./components/filter/post_detail";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreatePost />} />
          <Route index path="/posts/create" element={<CreatePost />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}