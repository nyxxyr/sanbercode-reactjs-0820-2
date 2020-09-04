import React from 'react';

import { InputChoice, InputText, InputButton } from './Input';

class Section extends React.Component{
    render(){
        return(
            <div className="custom-flex">
                <InputText />
                <InputChoice />
                <InputButton />
            </div>
        )
    }
}

export default Section;