import React, { Component } from 'react'
import './index.css'

export default class Goodsitems extends Component {
    
    render() {
        const {id,name,price,last,add} = this.props
        return (
                <div className="items">
                    <span className="item_span">{id}</span>
                    <span className="item_span">{name}</span>
                    <span className="item_span">{price}</span>
                    <span className="item_span">{last}</span>
                    {add ? <span className="item_span">是</span>:<span className="item_span">否</span>}
                </div> 
        )
    }
}
