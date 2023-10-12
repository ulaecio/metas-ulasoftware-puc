import Footer from "components/Footer";
import "./styles.css";
import Products from "./components/Products";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavBarRota from "components/NavBarRota";
import Users from "./components/Users";
import Categories from "./components/Categories";

const Admin = () => {
  return (
    <>
      <div className="admin-container">
        <NavBarRota />
        <NavBar />
        <div className="admin-container">
          <div className="admin-content">
            <Switch>
              <Route path="/admin/products">
                <Products />
              </Route>
              <Route path="/admin/categories">
                <Categories />
              </Route>
              <Route path="/admin/users">
                <Users />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
