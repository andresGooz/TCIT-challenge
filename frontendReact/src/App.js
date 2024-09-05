import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/structure/views/error/404';
import Layout from "./components/structure/layout/layout";
import CreatePost from "./components/structure/post/form/createPost";
import DeletePost from "./components/structure/post/form/deletePost";
import ListPost from "./components/structure/post/list/listPost";
import GetDetailsPost from "./components/structure/post/filter/getDetailsPost";


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