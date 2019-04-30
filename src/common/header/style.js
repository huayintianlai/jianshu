import styled from 'styled-components';
import logoPic from '../../static/logo.png';

export const HeaderWrapper = styled.div`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({ 'href': '/' })`
    display:block;
    float: left;
    width:100px;
    height: 56px;
    padding: 0;
    background: url(${logoPic});
    cursor: pointer;
    background-size:contain;
`
export const Nav = styled.ul`
    width: 50.5vw;
    height: 100%;
    margin: 0 auto 0 18.5vw;
    padding-left: 15px;
    padding-right: 15px;
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    background: #fff;
`;

export const SearchInfoSwitch = styled.span`
	float: right;
	font-size: 13px;
	cursor: pointer;
	.spin {
		display: block;
		float: left;
		font-size: 12px;
		margin-right: 2px;
		transition: all .2s ease-in;
		transform-origin: center center;
	}
`;

export const SearchInfoTitle = styled.div`
	margin-top: 20px;
	margin-bottom: 15px;
	line-height: 20px;
	font-size: 14px;
	color: #969696;
`;

export const SearchInfoItem = styled.a`
	display: block;
	float: left;
	line-height: 20px;
	padding: 0 5px;
	margin-right: 10px;
	margin-bottom: 15px;
	font-size: 12px;
	border: 1px solid #ddd;
	color: #787878;
	border-radius: 3px;
`;

export const NavItem = styled.li`
    line-height: 26px;
    padding:15px;
    font-size:17px;
    &.left{
        float:left;
        color:#333;
    }
    &.right{
        float:right;
        color:#969696;
    }
    &.active{
        color:#ea6f5a;
    }
`;

export const SearchWrapper = styled.li`
    position: relative; 
    float:left;
    padding: 9px 15px;
    .slide-enter{
        width:10vw;
        transition:all .3s ease-out;
    }
    .slide-enter-active{
        width:13vw;
    }
    .slide-exit{
        width:13vw;
        transition:all .3s ease-out;
    }
    .slide-exit-active{
        width:10vw;
    }
    .iconfont{
        position: absolute;
        color: #969696;
        right: 22px;
        bottom: 15px;
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        &.focused{
            background: #969696;
            border-radius: 15px;
            color:#fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({ 'placeholder': "搜索" })`
    padding: 0 40px 0 20px;
    width: 10vw;
    height: 38px;
    font-size: 14px;
    background: #eee;
    border: 1px solid #eee;
    border-radius: 40px;
    outline:none;
    &::placeholder{
        color:#999;
    }
    &.focused{
        width:13vw;
    }
`;

export const Addition = styled.div`
    position: absolute;
    height: 100%;
    width: 22.5vw;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    width: 30vw;
    top: 0;
    right: 0;
`
export const Button = styled.button`
    float:right;
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    padding: 6px 12px;
    &.writing{
        color: #fff;
        background-color: #ea6f5a;
        border: 1px solid transparent;
    }
    &.reg{
        color:red;
        background-color: #fff;
        border: 1px solid  #ea6f5a;
    }
`;