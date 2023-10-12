import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Form from './Form';
import List from './List';

const Users = () => {
    return (
        <div>
            <Switch>
                <Route path="/admin/users" exact>
                    <List />
                </Route>
                <Route path="/admin/users/create">
                    <Form />
                </Route>
                <Route path="/admin/users/:productId">
                    <h1>Editar um usuário</h1>
                </Route>
            </Switch>
        </div>
    );
}

export default Users;