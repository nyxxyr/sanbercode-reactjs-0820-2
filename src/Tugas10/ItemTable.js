import React from 'react';

class TableHeader extends React.Component{
    render(){
        return(
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                    <th colSpan={2}>Tombol Aksi</th>
                </tr>
            </thead>
        )
    }
}

class TableBody extends React.Component{
    constructor(props){
        super(props)
        this.handleEditBtn = (event) => {
            this.props.handleEditBtn(event)
        }
        this.handleDeleteBtn = (event) => {
            this.props.handleDeleteBtn(event)
        }
    }
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
                                <td><button onClick={this.handleEditBtn} value={index} className='btn'>Edit</button></td>
                                <td><button onClick={this.handleDeleteBtn} value={index} className='btn'>Hapus</button></td>
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
        let dataBuah = this.props.dataHargaBuah;
        return(
            <table border="2" className="tbl">
                <TableHeader />
                <TableBody handleEditBtn={this.props.handleEditBtn} handleDeleteBtn={this.props.handleDeleteBtn} dataBuah={dataBuah}/>
            </table>
        )
    }
}

export default ItemTable;