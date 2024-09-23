import {Route, Routes } from "react-router-dom"
import AppWrapper from "./component/common/app-wrapper"
import LandingPage from "./pages/landing-page/landing-page"

function App() {

  return (
    <Routes>
      <Route element={<AppWrapper/>}>
      <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  )
}

export default App
