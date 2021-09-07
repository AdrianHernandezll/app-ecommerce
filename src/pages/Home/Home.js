import React from 'react'
import ItemListContainer from '../../components/ItemListContainer'

const Home = () => {
    return (
        <div className="container">
            <h1 className="text-center" style={{ paddingTop: "30%" }}>
                <ItemListContainer />
            </h1>
        </div>
    )
}

export default Home
