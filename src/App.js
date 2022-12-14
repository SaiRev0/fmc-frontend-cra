import React, { useContext } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
// import { gapi } from "gapi-script";
import Home from "./pages/Home";
import SignUp from "./pages/Sign-up/SignUp";
import Events from "./pages/Events/Events";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sponsors from "./pages/Sponsors/Sponsors";
import FAQ from "./pages/FAQ/FAQ";
import LandingPage from "./pages/LandingPage/LandingPage";
// import BasicStack from './components/pages/Events/EventMobile/EventTab';
import Photography from "./pages/Events/MobileView/Photography";
import Cinematography from "./pages/Events/MobileView/Cinematography";
import Outreach from "./pages/Events/MobileView/Outreach";
import Design from "./pages/Events/MobileView/Design";
import Media from "./pages/Events/MobileView/Media";
import Animation from "./pages/Events/MobileView/Animation";
import Authentication from "./pages/Authentication/Authentication";
// import RegisterationForm from "./components/pages/Register/RegisterationForm";
// import Dashboard from "./components/pages/Dashboard/Old";
import AuthContext from "./store/auth-context";
// import PrivateRoute from "./components/PrivateRoute";
import Team from "./pages/Team/Teams";
// import Merchandise from './components/pages/Merchandise/Merchandise';
import AllEvents from "./pages/Events/MobileView/AllEvents";
import Cart from "./components/cart/Cart";
import DashBoard_2 from "./pages/Dashboard/DashboardNew";
// import DashBoardNew from "./components/pages/Dashboard/DashboardNew";
import Passes from "./pages/Passes/Passes";
function App() {
  const authCtx = useContext(AuthContext);
  if (window.innerWidth <= 1280) {
    document.body.style.backgroundImage = "none";
  }
  // gapi.load("client:auth2", () => {
  //   gapi.client.init({
  //     clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  //     plugin_name: "chat",
  //   });
  // });
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route path="/landing" exact element={Home} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-up" element={<SignUp />} />;
          <Route path="/events" element={<Events />} />;
          <Route path="/events/photography" element={<Photography />} />;
          <Route path="/events/cinematography" element={<Cinematography />} />;
          <Route path="/events/outreach" element={<Outreach />} />;
          <Route path="/events/media" element={<Media />} />;
          <Route path="/events/design" element={<Design />} />;
          <Route path="/events/animation" element={<Animation />} />;
          <Route path="/events/allevents" element={<AllEvents />} />;
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/authentication" element={<Authentication />} />
          {/* {authCtx.isLoggedIn && <Route path="/dashboard" exact element={Dashboard} />} */}
          {/* {sessionStorage.getItem('isNewUser')==="true" && <Route path="/register" exact element={RegisterationForm} />} */}
          {/* <PrivateRoute path="/register" element={RegisterationForm} />
          <PrivateRoute path="/dashboard" element={DashBoardNew} /> */}
          <Route path="/team" element={<Team />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/d" element={<DashBoard_2 />} />
          <Route path="/passes" element={<Passes />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
