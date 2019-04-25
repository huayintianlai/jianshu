import React, { Component } from 'react';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper
} from './style'
import { CSSTransition } from 'react-transition-group'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false,
        }
        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <SearchWrapper className="left">
                        <CSSTransition
                            in={this.state.focused}
                            timeout={300}
                            classNames="slide"
                        >
                            <NavSearch
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                                className={this.state.focused ? 'focused' : ''} />
                        </CSSTransition>
                        <span className={this.state.focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</span>
                    </SearchWrapper>

                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                </Nav>

                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writing">
                        <span className="iconfont Aa">&#xe602;</span>
                        写文章
                </Button>
                </Addition>
            </HeaderWrapper >
        )
    }
    handleInputFocus() {
        this.setState({
            focused: true
        });
    }
    handleInputBlur() {
        this.setState({
            focused: false
        });
    }
}

export default Header