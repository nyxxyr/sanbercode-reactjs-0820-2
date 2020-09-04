import React from 'react';

import ItemTable from './ItemTable';

class Title extends React.Component{
    render(){
        return(
            <header><h1>Tabel Harga Buah</h1></header>
        );
    }
}

class ItemLists extends React.Component{
    render(){
        const dataHargaBuah = [
            {nama: 'Semangka', harga: 10000, berat: 1000},
            {nama: 'Anggur', harga: 40000, berat: 500},
            {nama: 'Strawberry', harga: 30000, berat: 400},
            {nama: 'Jeruk', harga: 30000, berat: 1000},
            {nama: 'Mangga', harga: 30000, berat: 500},
        ]
        return(
            <div>
                <Title />
                <ItemTable dataHargaBuah={dataHargaBuah}/>
            </div>
        );
    }
}

export default ItemLists;