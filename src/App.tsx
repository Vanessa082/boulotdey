import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppWrapper from "./component/common/app-wrapper";
import LandingPage from "./pages/landing/landing";
import CreateAccountPage from "./pages/auth/create-account/create-account-page";
import Login from "./pages/auth/login/login";
import JobBoard from "./pages/jobboard/jobboard";
import PostJobForm from "./pages/jobboard/post-job";
import JobDetail from "./pages/jobboard/job-detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<AppWrapper />}>
          <Route index element={<LandingPage />} />
          <Route path="create-account" element={<CreateAccountPage />} />
          <Route path="login" element={<Login />} />
          <Route path="job-board" element={<JobBoard />} />
          <Route path="post-job" element={<PostJobForm />}/>
          <Route path="job-detail" element={<JobDetail jobTitle={""} companyName={""} location={""} employmentType={""} deadline={""} salaryRange={""} description={""} qualifications={[]} skills={[]} benefits={[]} languageRequirements={""} />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
