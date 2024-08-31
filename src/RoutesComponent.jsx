import { useState } from "react";
import App from "./App.jsx";
import MovieDetail from "./pages/MovieDetail.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/redux.js";

export default function RoutesComponent() {
  const [sign, setSign] = useState(null);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App sign={sign} setSign={setSign} />} />
          <Route
            path="/details/:id"
            element={<MovieDetail sign={sign} setSign={setSign} />}
          />
          <Route
            path="/signin"
            element={<SignIn sign={sign} setSign={setSign} />}
          />
          <Route
            path="/signup"
            element={<SignUp sign={sign} setSign={setSign} />}
          />
          <Route path="*" element={<p>Not found</p>} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
