import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { History } from "./pages/History/History";
import { DefaultScreen } from "./screens/DefaultScreen/DefaultScreen";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultScreen />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}
