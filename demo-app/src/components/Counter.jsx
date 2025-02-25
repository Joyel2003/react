import React, {Component} from 'react'

class Counter extends Component{

    constructor(props){
        super(props)

        this.state ={
            count: 0
        }
    }
    increment = () =>{
        // this.setState(prevState => ({
        //     count: prevState.count + 1
        // }))
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count)
    }


    // decrement = () => {
    //     this.setState(prevState => ({
    //         count: prevState.count - 1
    //     }))
    // }



    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    // decrementSix(){
    //     this.decrement()
    //     this.decrement()
    //     this.decrement()
    //     this.decrement()
    //     this.decrement()
    //     this.decrement()
    // }
    render(){
        return(
        <div>
             <div>
                count - {this.state.count}
            </div>
            <button onClick={() => this.incrementFive()}>Increment</button>
            <button onClick ={() => this.decrementSix()}>Decrement</button>
        </div>
        )
    }
}
export default Counter
  
   
       