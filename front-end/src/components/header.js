import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Drawer } from 'antd-mobile';

import { render } from 'react-dom';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';

import Homepage from './homepage.js';
import Movielist from './movielist.js';
import TotalCinema from './totalCinema.js';
import FilmDetail from './filmDetail.js';
import Login from './login.js';
import UserPage from './userPage.js';
// import Toptag from './topTags.js';
class Headers extends Component {
    state = {
        open: false,
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
    }
    render() {
        const sidebar = (<ul className="nav-list">
            <li>
                <NavLink to="/">首页<i className="iconfont">&#xe637;</i></NavLink>
            </li>
            <li>
                <NavLink to="/movie/now-play">影片<i className="iconfont">&#xe637;</i></NavLink>
            </li>
            <li>
                <NavLink to="/cinema">影院<i className="iconfont">&#xe637;</i></NavLink>
            </li>
            <li><NavLink to="/">商城<i className="iconfont">&#xe637;</i></NavLink></li>
            <li><NavLink to="/">演出<i className="iconfont">&#xe637;</i></NavLink></li>
            <li><NavLink to="/login">我的<i className="iconfont">&#xe637;</i></NavLink></li>
            <li><NavLink to="/">卖座卡<i className="iconfont">&#xe637;</i></NavLink></li>
        </ul>);
        return (
            <Router>
                <div>
                    <header>
                        <h1 onClick={this.onOpenChange}>
                            <div className="h1-left">
                                <i className="iconfont">&#xe655;</i>
                            </div>
                            <div className="h1-right">卖座电影</div>
                        </h1>
                        <div className="header-right">
                            <a href="#" className="left-a">
                                <span>深圳</span>
                                <i className="iconfont">&#xe600;</i>
                            </a>
                            <Link to={"/login"} className="right-a"><i className="iconfont">&#xe610;</i></Link>
                        </div>
                    </header>
                    <Drawer
                        className="my-drawer"
                        style={{ minHeight: document.documentElement.clientHeight - 200 }}
                        enableDragHandle
                        contentStyle={{ color: '#A6A6A6' }}
                        sidebar={sidebar}
                        touch={false}
                        open={this.state.open}
                        onOpenChange={this.onOpenChange}
                    >

                        <Route exact path="/" component={Homepage} />
                        <Route path="/movie" component={Movielist} />
                        <Route path="/cinema" component={TotalCinema} />
                        <Route path="/filmDetail/:id" component={FilmDetail} />
                        <Route path="/login" component={Login} />
                        <Route path="/userpage" component={UserPage} />
                    </Drawer>
                </div>
            </Router>

        )
    }
}

var Header = connect(
    function (state, ownProps) {
        return {

        }
    }
)(Headers);

export default Header;
