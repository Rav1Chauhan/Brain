import "./App.css";
import Dashboard from "./pages/dashboard";
import Share from "./pages/share";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import { Starter } from "./pages/Starter";
// import AuthForm from "./pages/Form";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<AuthForm />} /> */}
        <Route path="/" element={<Starter />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:sharelink" element={<Share />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
