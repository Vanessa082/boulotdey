import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWrapper from "./component/common/app-wrapper";
import LandingPage from "./pages/landing/landing";
import CreateAccountPage from "./pages/auth/create-account/create-account-page";
import LoginPage from "./pages/auth/login/login-page";
import JobBoardPage from "./pages/jobboard/job-board-page/job-board-page";
import PostJobPage from "./pages/jobboard/post-job/post-job-page";
import JobDetailPage from "./pages/jobboard/job-details/job-detail-page";
import VerificationPage from "./pages/jobboard/verification-page/verification-page";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppWrapper />}>
          <Route index element={<LandingPage />} />
          <Route path="create-account" element={<CreateAccountPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="job-board">
            <Route index element={<JobBoardPage />} />

            <Route path="post-job" element={<PostJobPage />} />
            <Route
              path=":job_id"
              element={
                <JobDetailPage />
              }
            />
            <Route path="get-verified" element={<VerificationPage />} />
          </Route>

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
