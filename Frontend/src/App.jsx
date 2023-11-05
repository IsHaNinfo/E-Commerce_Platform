import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Inventory from "./pages/Inventory/Inventory";
import About from "./pages/About/About"; 

import UploadAvatr from './UploadPhoto'

import Cart from "./pages/Cart/Cart"
import ProductList from "./pages/Product/ProductList";
import MyOrder from "./pages/myorderPage/MyOrder"
import OrdDetails from './pages/OrdDetails/OrdDetails';
// import Home from "./pages/home/Home";
import ProductView from "./pages/ProductView/ProductView"
import AvailableProductDelivery from "./pages/AvailableProductDelivery/AvailableProductDelivery";
import Geshan from "./pages/Geshan/Geshan"
import DeliveryAccepted from "./pages/DeliveryAccepted/DeliveryAccepted"
import DeliveryPickup from "./pages/DeliveryPickup/DeliveryPickup";
// import PickupItems from "./pages/PickupItems/PickupItems";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/Inventory" element={<Inventory />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/products" element={<ProductList />}></Route>
        <Route path="/MyOrder" element={<MyOrder />}></Route>
        <Route path="/OrdDetails" element={<OrdDetails />}></Route>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/Geshan" element={<Geshan />}></Route>
        <Route path="/DeliveryAccepted" element={<DeliveryAccepted />}></Route>
        <Route path="/ProductView" element={<ProductView />}></Route>
        <Route path="/DeliveryPickup" element={<DeliveryPickup />}></Route>

        <Route
          path="/AvailableProductDelivery"
          element={<AvailableProductDelivery />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
