import {Route, Routes } from "react-router-dom"
import AppWrapper from "./component/common/app-wrapper"

function App() {

  return (
    <Routes>
      <Route element={<AppWrapper/>}>
      <Route index element={} />
      </Route>
    </Routes>
  )
}

export default App
