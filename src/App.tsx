import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWrapper from "./component/common/app-wrapper";
import LandingPage from "./pages/landing/landing";
import Registration from "./pages/registration/registration-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppWrapper />}>
          <Route index element={<LandingPage />} />
          <Route path="/register" element={<Registration/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
