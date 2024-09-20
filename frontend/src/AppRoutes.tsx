import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      ></Route>
      <Route
        path="/user-profile"
        element={<span>USER PROFILE PAGE</span>}
      ></Route>
      <Route path="*" element={<Navigate to={"/"} />}></Route>
    </Routes>
  );
};

export default AppRoutes;
