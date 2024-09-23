import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWrapper from "./component/common/app-wrapper";
import LandingPage from "./pages/landing-page/landing-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppWrapper />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
