import React, { Component } from 'react'
// import { Pagination } from 'antd';
import axios from 'axios'
import Goodsitems from '../Goodsitems';
import Pageitem from '../Pageitem'
import './index.css'

export default class Allgoods extends Component {
    state = {
        goods: []
    }

    getdata = () => {

        axios.get('/api1/more/goods').then(
            response => {
                let x = response.data
                let good = x.goods
                let len = x.goods.length
                let newitems;
                for (let i = 0; i < len; i++) {
                    const { goods } = this.state
                    newitems = [...goods, good[i]]
                    // console.log(good[i]);       
                    this.setState({ goods: newitems })          
                }
            },
            error => {console.log("失败了",error)}
        )


    }
    render() {
        const { goods } = this.state
        return (
            <div >
                <div className="items" onClick={this.getdata}>
                    <span className="item_span">商品编号</span>
                    <span className="item_span">商品名称</span>
                    <span className="item_span">价格</span>
                    <span className="item_span">剩余量</span>
                    <span className="item_span">是否需要进货</span>
                </div>
                {
                    goods.map((good) => {
                        return <Goodsitems key={good.id} {...good} />
                    })
                }
                <div className="items">
                    <Pageitem />
                    {/* <Pagination defaultCurrent={1} total={60} /> */}
                </div>
                {/* 如果点了对应页面则计算id,在当前页面重新渲染其余部分 */}
            </div>
        )
    }
}
