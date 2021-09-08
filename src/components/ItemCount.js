import React, { useState } from 'react'

const ItemCount = () => {
    const [counter, setCounter] = useState(1); // []


    // handleAdd
    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleSubtract = () => setCounter(counter - 1);

    const handleReset = () => {
        setCounter(1);
        alert('Agregado')
    }

    return (
        <>
            <div class="card" style={{ width: '28%', marginLeft: '10%' }}>
                <img
                    src="https://mdbootstrap.com/img/new/standard/city/062.jpg"
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        Stock: {counter}
                    </p>
                </div>

                <div className="card-body text-center">
                    <button className="btn btn-primary" onClick={handleAdd}>+1</button>
                    <button className="btn btn-primary mx-auto" disabled={counter == 0} onClick={handleReset}>Agregar al Carro</button>
                    <button className="btn btn-primary" disabled={counter <= 0} onClick={handleSubtract}>-1</button>
                </div>
            </div>

        </>
    )
}

export default ItemCount
