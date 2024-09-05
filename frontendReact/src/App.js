import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/structure/views/error/404';
import Layout from "./components/structure/layout/layout";
import CreatePost from "./features/post/createPost/createPost";
import DeletePost from "./features/post/deletePost/deletePost";
import ListPost from "./features/post/listPost/listPost";
import GetDetailsPost from "./features/post/getPost/getDetailsPost";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreatePost />} /> {/* formulario */}
          <Route path="/posts/create" element={<CreatePost />} /> {/* formulario */}
          <Route path="/posts/delete" element={<DeletePost />} /> {/* formulario */}
          <Route path="/post/:postId" element={<GetDetailsPost />} /> {/* filtro */}
          <Route path="/post/name/:postName" element={<GetDetailsPost />} /> {/* filtro */}
          <Route path="/posts" element={<ListPost />} /> {/* lista */}
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}