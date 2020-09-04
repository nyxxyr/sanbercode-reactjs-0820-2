import React from 'react';

const items = ['Semangka', 'Jeruk', 'Nanas', 'Salak', 'Anggur'];

class ChoiceList extends React.Component{
    render(){
        return(
            <>
                {
                    items.map((item, index) => {
                        return(
                            <li key={index}><input type="radio" name="choice" />{item}</li>
                        )
                    })
                }
            </>
        )
    }
}

export default ChoiceList;