import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/checkout/:quantity/:price" element={<Checkout />} />
        <Route path="/confirmation" element={<Confirmation />}/>
      </Routes>
    </>
  )
}