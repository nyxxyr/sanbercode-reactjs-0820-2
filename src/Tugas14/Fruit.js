import React from 'react'
import { FruitProvider } from './FruitContext'
import FruitTable from './FruitTable'
import FruitForm from './FruitForm'

const Fruit = () => {
    return(
        <FruitProvider>
            <FruitTable />
            <FruitForm />
        </FruitProvider>
    )
}

export default Fruit
