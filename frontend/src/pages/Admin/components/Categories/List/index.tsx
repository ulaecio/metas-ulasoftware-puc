import React from 'react';
import { useHistory } from 'react-router-dom';
import "./styles.css"

const List = () => {
    const history = useHistory();

    const handleCreate = () => {
        history.push('/admin/categories/create');
    }

    return (
        <div className="admin-products-list">
{/*             <button className="btn btn-primary btn-lg" onClick={ handleCreate }>
                ADICIONAR
            </button> */}

            <button className='btn home-btn-order' onClick={ handleCreate }>Adicionar</button>
 
        </div>
    );
}

export default List;