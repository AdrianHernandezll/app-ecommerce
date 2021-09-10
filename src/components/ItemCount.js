import React, { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial); // []

    const addItem = () => setCount(count + 1);
    const onSubtract = () => setCount(count - 1);

    const agregarCarrito = () => {
        onAdd(count)
        alert('Agregado')
    }

    return (
        <>
            <div className="card" style={{ width: '28%', marginLeft: '10%' }}>
                <img
                    src="https://mdbootstrap.com/img/new/standard/city/062.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Stock: {count}
                    </p>
                </div>

                <div className="card-body text-center">
                    <button className="btn btn-primary" onClick={addItem}>+1</button>
                    <button className="btn btn-primary mx-auto" disabled={count === 0} onClick={agregarCarrito}>Agregar al Carro</button>
                    <button className="btn btn-primary" disabled={count <= 0} onClick={onSubtract}>-1</button>
                </div>
            </div>

        </>
    )
}

export default ItemCount
