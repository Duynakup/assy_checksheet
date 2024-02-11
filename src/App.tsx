
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout/Layout"
import CheckPage from "./pages/CheckPage/CheckPage"
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<CheckPage />}>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App