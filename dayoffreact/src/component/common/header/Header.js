import React, { Component } from 'react'
import './header.css';
import HeaderSearch from './HeaderSearch';
import Category from './category/Category';
import Login from '../login/Login'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Header extends Component {
  state = {
      login: false
    }
  
    componentDidMount() {
      if(sessionStorage.getItem("userId")){
        this.setState({
          login:true
        })
      }
      else{
        this.setState({
          login:false
        })
      }
    }

    logout= async ()=>{
      const res = await axios.get("logout")
      sessionStorage.removeItem("userId")
      sessionStorage.removeItem("userRole")
      sessionStorage.removeItem("userName")

      this.setState({
        login:false
      })
    }

  render() {
      if(this.state.login===false) {
      return (
          <div className='TotalHeader'>
            <ul className='Toplogin_Info1'>
            <li><Link><Login history={this.props.history}></Login></Link></li> &nbsp;&nbsp;&nbsp;
            <li><Link to='/cart'> <img className='cartlogo' src='/images/cartlogo.png'/> 장바구니</Link></li>
            <li><HeaderSearch></HeaderSearch></li>
            </ul>
            <div className='imgHeader'>
              </div>
              <div className='Header_Top'>
              <Link to={"/"}><img className='logo1' src={"/images/DAYOFF_logo3.png"}></img></Link>
          </div>

          <div className="Header">
              
              <Category />
          </div>
          </div>
      )

    }else {
      return (
          <div className='TotalHeader'>
          <ul className='Toplogin_Info'>
          <li>{sessionStorage.getItem("userName")}</li>
          <li><Link><Login history={this.props.history}></Login></Link></li>  &nbsp;&nbsp;&nbsp;
          <li>{sessionStorage.getItem("userRole")==="admin"?<Link to='/admin/orders'>ADMIN</Link>:<Link to='/mypage/myorders'>마이페이지</Link>}</li>
          <li><Link to='/cart'> <img className='cartlogo' src='/images/cartlogo.png' /> 장바구니</Link></li>
          <li><HeaderSearch></HeaderSearch></li>

          </ul>
          <div className='imgHeader'>
          </div>
           <div className='Header_Top'>
          <Link to={"/"}><img className='logo1' src='/images/DAYOFF_logo3.png'></img></Link>
          </div>
          <div className="Header">
              <Category />
          </div>
          </div>
      )
  }
}
}
