import React from 'react';

import ChoiceList from './ChoiceList';

class InputText extends React.Component{
    render(){
        return(
            <div className="form-input">
                <label className="input-label">Nama Pelanggan</label>
                <input style={{marginLeft: '2rem'}} type="text" />
            </div>
        )
    }
}

class InputChoice extends React.Component{
    render(){
        return(
            <div className="form-input choice">
                <label className="input-label">Daftar Item</label>
                <ul className="items" style={{marginLeft: '4rem'}}>
                    <ChoiceList />
                </ul>
            </div>
        )
    }
}

class InputButton extends React.Component{
    render(){
        return(
          <input className="btn" type="submit" value="Kirim" />
        )
    }
}

export {
    InputChoice,
    InputText,
    InputButton
}