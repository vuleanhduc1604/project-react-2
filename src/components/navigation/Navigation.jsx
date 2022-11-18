import React from 'react';
import { NavLink, Outlet, Link } from 'react-router-dom';
const Navigation = () => {
    return (
        <section className="wrapper container">      
           <div className="burger" id="burger">
            <i className="fa-solid fa-bars"></i>
           </div>
           <span className="overlay"></span>
           <img srcSet="sk-logo.png" alt="" className="logo-sk"/>
           <nav className="navbar" id="navbar">
              <ul className="menu" id="menu">   
                 <li className="menu-item home-item"><Link to='/'className="menu-link">Home</Link></li>
                 <li className="menu-item menu-dropdown">
                    <span className="menu-link" data-toggle="submenu">Giới thiệu<i className="fa fa-caret-down" aria-hidden="true"></i></span>
                    <ul className="submenu">
                       <li className="submenu-item"><Link to='/about'className="submenu-link">Về chúng tôi</Link></li>
                       <li className="submenu-item"><Link to="/clientsprofit" className="submenu-link">Lợi ích khách hàng</Link></li>
                    </ul>
                 </li>
                 <li className="menu-item" id="hethong"><Link to="/dichvu" className="menu-link">Dịch vụ</Link></li>
                 <li className="menu-item" id="hethong"><a href="tracnghiem.html" target='_blank' className="menu-link">Trắc nghiệm</a></li>
                 <li className="menu-item"><Link to="/tuyendung" className="menu-link">Tuyển dụng</Link></li>
              </ul>
           </nav>
           <Link href="profile.html" className="account"><i className="fa-solid fa-user"></i></Link>
        </section>
    );
};

export default Navigation;