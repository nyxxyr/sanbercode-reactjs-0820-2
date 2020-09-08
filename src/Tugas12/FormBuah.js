import React from 'react'

class FormBuah extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = (event) => {
            this.props.handleSubmit(event)
        }
        this.handleChange = (event) => {
            this.props.handleChange(event)
        }
    }
    render(){
        return(
            <div>
                <header><h2>Form Buah</h2></header>
                <form onSubmit={this.handleSubmit} className='form-control' style={{margin: 'auto'}}>
                    <div className='custom-flex' style={{justifyContent: 'space-evenly', alignItems:''}}>
                        <div className='form-input' style={{margin: '1rem'}}>
                            <label>Nama</label>
                            <input type="text" name='nama' onChange={this.handleChange} value={this.props.data.inputNama} required='required'/>
                        </div>
                        <div className='form-input' style={{margin: '1rem'}}>
                            <label>Harga</label>
                            <input type="text" name='harga' onChange={this.handleChange} value={this.props.data.inputHarga} required='required'/>
                        </div>
                        <div className='form-input' style={{margin: '1rem'}}>
                            <label>Berat</label>
                            <input type="text" name='berat' onChange={this.handleChange} value={this.props.data.inputBerat} required='required'/>
                        </div>
                        <input style={{margin: 'auto'}} className="btn" type="submit" value="Kirim" />
                    </div>
                </form>
            </div>
        )
    }
}

export default FormBuah
