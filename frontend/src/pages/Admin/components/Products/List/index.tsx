import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Card';
import "./styles.css"

const List = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/products/create');
    }

    return (
        <div className="admin-products-list">
            <button className="btn home-btn-order" onClick={ handleCreate }>Adicionar</button>
            <div className="admin-list-container">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default List;