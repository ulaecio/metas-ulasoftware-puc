import Home from "pages/Home";
import Auth from "pages/Auth";
import history from "utils/history";
import PrivateRoute from "./components/PrivateRoute";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Admin from "./pages/Admin";
import Seller from "./pages/Seller";
import Manager from "pages/Manager";
import Catalog from "pages/Catalog";
import ProductDetails from "pages/Catalog/components/ProductDetails";

const Routes = () => {
  //ROTAS DA PÁGINA PRINCIPAL
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/products" exact>
          <Catalog />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
        <Redirect from="/auth" to="/auth/login" exact />
        <Route path="/auth/login">
          <Auth />
        </Route>
        {/*VERIFICA SE USUÁRIO ESTÁ AUTENTICADO*/}
        <Redirect from="/auth**" to="/auth/login" exact />
        {/*ROTA PRIVADA QUE PRECISA DE AUTENTICAÇÃO*/}
        <PrivateRoute path="/admin" allowedRoutes={["ROLE_ADMIN"]}>
          <Admin />
        </PrivateRoute>
        <PrivateRoute path="/manager" allowedRoutes={["ROLE_MANAGER"]}>
          <Manager />
        </PrivateRoute>
        <PrivateRoute path="/seller" allowedRoutes={["ROLE_SELLER"]}>
          <Seller />
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
