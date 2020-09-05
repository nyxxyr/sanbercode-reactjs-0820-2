import React from 'react'

class Card extends React.Component{
    render(){
        return(
            <div className='card'>
                <img src={this.props.el.photo} alt='gambar'/>
                <p className='bold'>{this.props.el.gender === 'Male' ? `Mr ${this.props.el.name}` : `Mrs ${this.props.el.name}`}</p>
                <p>{this.props.el.profession}</p>
                <p>{this.props.el.age} years old</p>
            </div>
        )
    }
}

class ListOfCard extends React.Component{
    render(){
        return(
            <div className='listCards'>
                {
                    this.props.data.map(el => {
                        return(<Card key={el.photo} el={el} />)
                    })
                }
            </div>
        )
    }
}

export default ListOfCard;