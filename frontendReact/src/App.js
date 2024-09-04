import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/views/error/404';
import Layout from "./components/layout/layout";
import CreatePost from "./components/forms/post_create";
import PostDetail from "./components/filter/post_detail";
import Posts from "./components/lists/posts";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreatePost />} /> {/* formulario */}
          <Route index path="/posts/create" element={<CreatePost />} /> {/* formulario */}
          <Route path="/post/:id" element={<PostDetail />} /> {/* filtro */}
          <Route path="/post/name/:name" element={<PostDetail />} /> {/* filtro */}
          <Route path="/posts" element={<Posts />} /> {/* lista */}
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}