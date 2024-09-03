import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './views/error/404';
import Layout from "./components/layout/layout";
import Posts from "./views/posts/posts";
import CreatePost from "./views/posts/post_create";
import PostDetail from "./views/posts/post_detail";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Posts />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}