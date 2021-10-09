import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import './index.css'
/*
 App第一个界面是登录，登录成功就跳转，不能就提示
*/
export default class App extends Component {

    handle = (e) => {
        //用户判断！！是否存在  ---- json
        let history = this.props.history;
        history.push('/more');
    } 
    render() {
        return (
            <Form name="basic"
                labelCol={{ span: 8}}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                autoComplete="off"
                className="bg"
            >

            <div className="content">
                <Form.Item label="用户名">
                    <Input />
                </Form.Item>

                <Form.Item label="密码">
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16,}}>
                    <Button type="primary" htmlType="submit" onClick={this.handle}>
                        登录
                    </Button>
                </Form.Item>
            </div>
            </Form>
            
        );
    }
}
