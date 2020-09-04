import React from 'react';

class TableHeader extends React.Component{
    render(){
        return(
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                </tr>
            </thead>
        )
    }
}

class TableBody extends React.Component{
    render(){
        return(
            <tbody>
                <>{
                    this.props.dataBuah.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td>{item.berat/1000} Kg</td>
                            </tr>
                        )
                    })   
                }</>
            </tbody>
        )
    }
}

class ItemTable extends React.Component{
    render(){
        const dataBuah = this.props.dataHargaBuah;
        return(
            <table border="2" className="tbl">
                <TableHeader />
                <TableBody dataBuah={dataBuah}/>
            </table>
        )
    }
}

export default ItemTable;