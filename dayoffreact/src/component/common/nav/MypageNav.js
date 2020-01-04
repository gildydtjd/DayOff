import React, { Component } from 'react'
import './nav.css';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {

  render() {
    return (
      <div className="Nav">
        <h1 className='Nav_Title'> My PAGE</h1>
        <div className='Nav_Info'>
          <h3>쇼핑정보</h3>
          <NavLink to={'/'} className='Nav_Info_List'>주문내역 및 환불/반품</NavLink><br></br>
          <NavLink to={'/MapPage'} className='Nav_Info_List'>매장 픽업 서비스</NavLink><br></br>
          <NavLink to={'/'} className='Nav_Info_List'>회원등급 현황</NavLink>
        </div>

        <div className='Nav_Info'>
          <h3>활동정보</h3>
          <NavLink to={'/'} className='Nav_Info_List'>적립금</NavLink><br></br>
          <NavLink to={'/'} className='Nav_Info_List'>쿠폰</NavLink>
        </div>

        <div className='Nav_Info'>
          <h3>나의정보</h3>
          <NavLink to={'/'} className='Nav_Info_List'>배송지관리</NavLink><br></br>
          <NavLink to={'/'} className='Nav_Info_List'>회원정보 관리</NavLink><br></br>
          <NavLink to={'/'} className='Nav_Info_List'>회원탈퇴</NavLink>
        </div>

        <div className='Nav_Info'>
          <h3>DayOff 고객센터</h3>
          <h3>Tel.02-1234-5678</h3>
          <h6>근무시간 9:00~18:00 <br></br>(점심시간 12:00~13:00)</h6>
        </div>
      </div>
    )


  }
}