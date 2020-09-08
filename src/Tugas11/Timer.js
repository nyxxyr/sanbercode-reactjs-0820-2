import React from 'react'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isShow: true,
            time: 100,
            clock: 0
        }
    }
    componentDidMount(){
        this.timerCount = setInterval(
            () => this.countDown()
        , 1000)
    }
    componentDidUpdate(){
        if(this.state.isShow === true){
            if(this.state.time === 0){
                this.setState({
                    isShow: false
                })
                this.componentWillUnmount()
            }
        }
    }
    componentWillUnmount(){
        clearInterval(this.timerCount)
    }
    countDown(){
        this.date = new Date()
        this.setState({
            time: this.state.time - 1,
            clock: `${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()}`
        })
    }
    render(){
        let condition = this.state.isShow ?
                <div style={{textAlign: 'center'}}>
                    <h2>Sekarang Pukul {this.state.clock}</h2>
                    <h2>Sisa Waktu {this.state.time}</h2> 
                </div>
                : ''
        return(
            <div className="form-control">{condition}</div>
        )
    }
}

export default Timer