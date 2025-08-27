import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Money from "./pages/Money";
import Time from "./pages/Time";
import Team from "./pages/Team";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="money" element={<Money />} />
        <Route path="time" element={<Time />} />
        <Route path="team" element={<Team />} />
      </Route>
    </Routes>
  );
}
