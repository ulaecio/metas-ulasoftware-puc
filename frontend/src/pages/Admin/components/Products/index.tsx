import React from "react";
import { Route, Switch } from "react-router-dom";
import List from "./List";
import Form from "./Form";
import EditForm from "./EditForm";

const Products = () => {
  return (
    <div>
      <Switch>
        <Route path="/admin/products" exact>
          <List />
        </Route>
        <Route path="/admin/products/create">
          <Form />
        </Route>
        <Route path="/admin/products/:productId">
        <EditForm />
        </Route>
      </Switch>
    </div>
  );
};

export default Products;
