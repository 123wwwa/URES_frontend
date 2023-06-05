import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ReservationPage3 from "./pages/ReservationPage3";
import LoginPage from "./pages/LoginPage";
import HistoryPage1 from "./pages/HistoryPage1";
import ReservationPage1 from "./pages/ReservationPage1";
import ReservationPage22 from "./pages/ReservationPage22";
import ReservationPage5 from "./pages/ReservationPage5";
import ReservationDone from "./pages/ReservationDone";
import ReservationPage4 from "./pages/ReservationPage4";
import ReservationPage21 from "./pages/ReservationPage21";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/login-page":
        title = "";
        metaDescription = "";
        break;
      case "/history-page1":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-page1":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-page22":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-page5":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-done":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-page4":
        title = "";
        metaDescription = "";
        break;
      case "/reservation-page21":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ReservationPage3 />} />
      <Route path="/login-page" element={<LoginPage />} />
      <Route path="/history-page1" element={<HistoryPage1 />} />
      <Route path="/reservation-page1" element={<ReservationPage1 />} />
      <Route path="/reservation-page22" element={<ReservationPage22 />} />
      <Route path="/reservation-page5" element={<ReservationPage5 />} />
      <Route path="/reservation-done" element={<ReservationDone />} />
      <Route path="/reservation-page4" element={<ReservationPage4 />} />
      <Route path="/reservation-page21" element={<ReservationPage21 />} />
    </Routes>
  );
}
export default App;
