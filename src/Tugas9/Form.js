import React from 'react';

import Section from './Section';

class Title extends React.Component{
    render(){
        return(
            <header>
                <h1>Form Pembelian Buah</h1>
            </header>
        )
    }
}

class Form extends React.Component{
    render(){
        return(
            <div className="form-control">
                <Title />
                <Section />
            </div>
        );
    }
}

export default Form;