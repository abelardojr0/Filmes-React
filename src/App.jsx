import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout";
import { Inicio } from "./pages/Inicio";
import { Filmes } from "./pages/Filmes";
import { Series } from "./pages/Series";
import { Page404 } from "./pages/Page404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="filmes" element={<Filmes />} />
          <Route path="series" element={<Series />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
