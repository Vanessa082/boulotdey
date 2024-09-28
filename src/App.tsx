import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWrapper from "./component/common/app-wrapper";
import LandingPage from "./pages/landing/landing";
import CreateAccountPage from "./pages/auth/create-account/create-account-page";
import Login from "./pages/auth/login/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppWrapper />}>
          <Route index element={<LandingPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
