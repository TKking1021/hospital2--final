import React, { Component } from 'react'
import './index.css'
export default class index extends Component {

    state = {
        nums:[1,2,3,4,5]
    }

    // componentDidMount(){
    //     let u = document.getElementsByClassName("pageli");
    //     let a = [...u]
    //     console.log(a)
    // }

    // handle = (c)=>{
    //     console.log(c)
    // }

    render() {
        const {nums} = this.state;
        return (
            <div className="uf">
                <ul>
                    <li className="pageli"><a onClick={this.handle} href="">{nums[0]}</a></li>
                    <li className="pageli"><a onClick={this.handle} href="">{nums[1]}</a></li>
                    <li className="pageli"><a onClick={this.handle} href="">{nums[2]}</a></li>
                    <li className="pageli"><a onClick={this.handle} href="">{nums[3]}</a></li>
                    <li className="pageli"><a onClick={this.handle} href="">{nums[4]}</a></li>
                </ul>
            </div>
        )
    }
}
