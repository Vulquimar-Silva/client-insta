import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "../pages/Home";
import User from "../pages/User";
import Error404 from "../pages/Error404";
import LayoutBasic from "../layouts/LayoutBasic";

const Navigation = () => {
return (
  <BrowserRouter>
  <Routes>
    <Route element={<LayoutBasic />} exact>
      <Route path="/" element={<Home />} exact />
      <Route path="/:username" element={<User />} exact />
      <Route path="*" element={<Error404 />} />
    </Route>
  </Routes>
</BrowserRouter>
)
} 
export default Navigation;