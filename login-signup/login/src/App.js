import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Home from './Components/LoginSignup/Home';
import Profile from './Components/LoginSignup/Profile';
import FamilyInfoForm from './Components/LoginSignup/FamilyInfoForm';
import ComplaintForm from './Components/LoginSignup/ComplaintForm';
import InmatesCheckInOut from './Components/LoginSignup/InmatesCheckInOut';
import GuestArrivalDetails from './Components/LoginSignup/GuestArrivalDetails';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/loginsignup"
            element={<LoginSignup />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/familyinfoform"
            element={<FamilyInfoForm />}
          />
          <Route
            path="/complaintform"
            element={<ComplaintForm />}
          />
          <Route
            path="/inmatescheckinout"
            element={<InmatesCheckInOut />}
          />
          <Route
            path="/guestarrivaldetails"
            element={<GuestArrivalDetails />}
          />
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
