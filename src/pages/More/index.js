import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter, Link, Route, Switch,Redirect } from 'react-router-dom';

import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import './index.css'

import Addgoods from '../../components/Addgoods'
import Allgoods from '../../components/Allgoods'
import Delgoods from '../../components/Delgoods'
import Lessgoods from '../../components/Lessgoods'
import Bookoperating from '../../components/Bookoperating'
import Searchoperating from '../../components/Searchoperating'
import Selfbook from '../../components/Selfbook'
import Allbook from '../../components/Allbook'
import Selfsell from '../../components/Selfsell'
import Allsell from '../../components/Allsell'
import Prescription from '../../components/Prescription'
import Usersetting from '../../components/Usersetting'

//antd
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
//antd end 

export default class More extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    const { collapsed } = this.state;
    return (
      <BrowserRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
            <div className="logo" />

            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link to="/more/prescription">开设处方</Link>
              </Menu.Item>

              <SubMenu key="sub1" icon={<UserOutlined />} title="商品">
                <Menu.Item key="2"><Link to="/more/allgoods">所有商品</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/more/addgoods">添加商品</Link></Menu.Item>
                <Menu.Item key="4"><Link to="/more/delgoods">删除商品</Link></Menu.Item>
                <Menu.Item key="5"><Link to="/more/lessgoods">稀缺商品</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<UserOutlined />} title="手术室">
                <Menu.Item key="6"><Link to="/more/bookoperating">预约手术室</Link></Menu.Item>
                <Menu.Item key="7"><Link to="/more/searchoperating">查看手术室情况</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<UserOutlined />} title="预约挂号">
                <Menu.Item key="8"><Link to="/more/selfbook">个人</Link></Menu.Item>
                <Menu.Item key="9"><Link to="/more/allbook">全部</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="sub4" icon={<TeamOutlined />} title="业绩">
                <Menu.Item key="10"><Link to="/more/selfsell">个人业绩</Link></Menu.Item>
                <Menu.Item key="11"><Link to="/more/allsell">总体业绩</Link></Menu.Item>
              </SubMenu>
              <Menu.Item key="12" icon={<FileOutlined />}>
                <Link to="/more/usersetting">用户设置</Link>
              </Menu.Item>

            </Menu>

          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-background" style={{ minHeight: 360 }}>
                <Switch>
                  <Route path="/more/prescription" component={Prescription} />
                  <Route path="/more/allgoods" component={Allgoods} />
                  <Route path="/more/addgoods" component={Addgoods} />
                  <Route path="/more/delgoods" component={Delgoods} />
                  <Route path="/more/lessgoods" component={Lessgoods} />
                  <Route path="/more/bookoperating" component={Bookoperating} />
                  <Route path="/more/Searchoperating" component={Searchoperating} />
                  <Route path="/more/selfbook" component={Selfbook} />
                  <Route path="/more/allbook" component={Allbook} />
                  <Route path="/more/selfsell" component={Selfsell} />
                  <Route path="/more/allsell" component={Allsell} />
                  <Route path="/more/usersetting" component={Usersetting} />
                  <Redirect to="/more/prescription"/>
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}><span className="sp">医疗后台服务系统 create by zy</span> </Footer>
          </Layout>
        </Layout>
      </BrowserRouter>
    );
  }
}
