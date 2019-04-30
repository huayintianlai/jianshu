import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoItem
} from './style';

class Header extends PureComponent {
    getListArea() {
        const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toArray();
        const pageList = [];
        const limit = 10;
        if (newList.length) {
            for (let i = (page - 1) * limit; i < page * limit; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>热门搜索
                        <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage) }}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInfo>
            )
        }
    }

    render() {
        const { focused, list, changeFocusedOnFoucus, changeFocusedOnBlur } = this.props;
        return (<HeaderWrapper >
            <Logo />
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <SearchWrapper className="left">
                    <CSSTransition
                        in={focused}
                        timeout={300}
                        classNames="slide"
                    >
                        <NavSearch
                            onFocus={() => changeFocusedOnFoucus(list)}
                            onBlur={changeFocusedOnBlur}
                            className={focused ? 'focused' : ''} />
                    </CSSTransition>
                    <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe637;</span>
                    {this.getListArea(focused)}
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
        );
    }

}

const mapStateToProps = (state) => {
    console.log('list是', state.getIn(['header', 'list']));
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeFocusedOnFoucus(list) {
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.changeFocusedAction(true));
        },
        changeFocusedOnBlur() {
            dispatch(actionCreators.changeFocusedAction(false));
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage) {
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);