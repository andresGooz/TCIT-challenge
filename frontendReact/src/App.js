import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/structure/views/error/404';
import Layout from "./components/structure/layout/layout";
import CreatePost from "./components/structure/forms/postCreate";
import PostDetail from "./components/structure/filter/postDetail";
import Posts from "./components/structure/lists/posts";


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