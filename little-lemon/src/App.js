import { Routes, Route} from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./components/pages/home/Home"
import Menu from "./components/pages/menu/Menu"
import Reservations from "./components/pages/reservations/Reservations"
import OrderOnline from "./components/pages/order/OrderOnline"



function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="order" element={<OrderOnline />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
