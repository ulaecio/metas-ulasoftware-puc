import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Categories = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin/categories" exact>
                    <List />
                </Route>
                <Route path="/admin/categories/create">
                    <Form />
                </Route>
                <Route path="/admin/categories/:categoryId">
                    <h1>Editar uma categoria</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Categories;