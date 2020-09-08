import React from 'react';

import ItemTable from './ItemTable';
import FormBuah from '../Tugas12/FormBuah';

class Title extends React.Component{
    render(){
        return(
            <header><h1>Tabel Harga Buah</h1></header>
        );
    }
}

class ItemLists extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dataHargaBuah:[
                {nama: 'Semangka', harga: 10000, berat: 1000},
                {nama: 'Anggur', harga: 40000, berat: 500},
                {nama: 'Strawberry', harga: 30000, berat: 400},
                {nama: 'Jeruk', harga: 30000, berat: 1000},
                {nama: 'Mangga', harga: 30000, berat: 500},
            ],
            index: -1,
            inputNama: '',
            inputBerat: '',
            inputHarga: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleEditBtn = this.handleEditBtn.bind(this)
        this.handleDeleteBtn = this.handleDeleteBtn.bind(this)
    }
    handleEditBtn(event){
        let choosen = parseInt(event.target.value)
        let choice = this.state.dataHargaBuah.filter((item, index) => {
            return index === choosen
        })
        choice.map((item) => {
            this.setState({
                inputNama: item.nama,
                inputHarga: item.harga,
                inputBerat: item.berat,
                index: choosen,
            })
            return true
        })
    }
    handleDeleteBtn(event){
        let choosen = parseInt(event.target.value)
        let choice = this.state.dataHargaBuah.filter((item, index) => {
            return index !== choosen
        })
        this.setState({
            dataHargaBuah: choice
        })

    }
    handleChange(event){
        if(event !== undefined){
            let value = event.target.value
            switch(event.target.name){
                case 'nama':
                    this.setState({
                        inputNama: value
                    })
                    break
                case 'harga':
                    this.setState({
                        inputHarga: value
                    })
                    break
                case 'berat':
                    this.setState({
                        inputBerat: value
                    })
                    break
                default:
                    console.log('masukkan tidak terdaftar')
            }
        }
    }
    handleSubmit(event){
        event.preventDefault()
        let i = this.state.index
        let newData = {
            nama: this.state.inputNama,
            harga: parseInt(this.state.inputHarga),
            berat: parseInt(this.state.inputBerat),
        }
        if(i === -1){
            this.setState({
                dataHargaBuah: [...this.state.dataHargaBuah, newData],
                inputNama: '',
                inputHarga: '',
                inputBerat: '',
                index: -1
            })
        }else{
            let resArray = this.state.dataHargaBuah
            resArray[i] = newData
            this.setState({
                dataHargaBuah: resArray,
                inputNama: '',
                inputHarga: '',
                inputBerat: '',
                index: -1,
            })
        }
    }
    render(){
        return(
            <div>
                <Title />
                <ItemTable handleEditBtn={this.handleEditBtn} handleDeleteBtn={this.handleDeleteBtn} dataHargaBuah={this.state.dataHargaBuah}/>
                <br></br>
                <FormBuah handleSubmit={this.handleSubmit} handleChange={this.handleChange} data={this.state} />
            </div>
        );
    }
}

export default ItemLists;