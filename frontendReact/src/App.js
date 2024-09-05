import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './components/structure/views/error/404';
import Layout from "./components/structure/layout/layout";
import CreatePost from "./components/structure/views/createPost";
import ListPost from "./components/structure/views/listPost";
import GetDetailsPost from "./components/structure/views/getDetailsPost";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CreatePost />} />
          <Route path="/posts/create" element={<CreatePost />} />
          <Route path="/post/:postId" element={<GetDetailsPost />} />
          <Route path="/posts" element={<ListPost />} />
          <Route path="/NotFound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}