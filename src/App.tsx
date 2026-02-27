import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePt from './pages/HomePt'
import PageNotFound from './pages/PageNotFound'
import HomeEn from "./pages/HomeEn";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePt />} />
        <Route path="/en" element={<HomeEn />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
