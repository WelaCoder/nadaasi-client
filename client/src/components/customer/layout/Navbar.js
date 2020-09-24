import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  Popover,
  FormControl,
  OverlayTrigger,
} from "react-bootstrap";

import logo from "../../../assets/images/nadaasi/Nadaasioriginal.png";
import UserLogo from "../../../assets/images/home/icons/user.svg";
import SearchLogo from "../../../assets/images/home/icons/search.svg";
import CartLogo from "../../../assets/images/home/icons/shopping-cart.svg";

import { LogOut } from "../../../actions/auth";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setFilters } from "../../../actions/appActions";
import { useEffect } from "react";
// import { useCart } from "react-use-cart";
// import { useDispatch, useSelector } from "react-redux";

// import { logout, selectUser, isLoggedIn } from "../../features/user/userSlice";

const MyNavbar = ({ LogOut, auth: { isAuthenticated }, cart, setFilters }) => {
  const ref = useRef(null);
  let path = useLocation();
  const [showLogout, setShowLogout] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', () => {
      setWidth(window.innerWidth);
    });
  }, [])
  const handleClick = () => {
    if (ref != null) {
      if (getWindowDimensions().width < 992) {
        ref.current.click();
      }
    }
  }
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }
  return (
    <Navbar expand="lg" className="navbar" bsPrefix="navbar" collapseOnSelect>
      <Navbar.Toggle aria-controls="basic-navbar-nav" ref={ref} />

      <Navbar.Brand href="#" className="logo">
        <img src={logo} alt="logo" width="200" />
        {width < 992 && <NavLink to="/cart" className='ml-3'>
          <span className="tool-item">
            <img alt="Cart" src={CartLogo} width="20" />
            <span className="badge">
              {
                cart != null && cart.length
                //   totalUniqueItems
              }
            </span>
          </span>
        </NavLink>}
      </Navbar.Brand>

      <Navbar.Collapse id="basic-navbar-nav" className="">
        <Nav className="menu">
          <NavLink className="menu-item" to="/" onClick={handleClick} exact>
            Home
          </NavLink>
          <NavLink className="menu-item" to="/shop" onClick={handleClick}>
            Shop
          </NavLink>
          <NavLink className="menu-item" to="/about" onClick={handleClick}>
            About
          </NavLink>
          <NavLink className="menu-item" to="/contact" onClick={handleClick}>
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="tools">
          {isAuthenticated ? (
            <>

              <NavLink to="/user/">

                <span className="tool-item" onMouseEnter={() => setShowLogout(true)} onMouseLeave={() => setTimeout(() => {
                  setShowLogout(false)
                }, 2000)}>
                  <img src={UserLogo} alt="User" width="20" />
                </span>
                {
                  showLogout &&
                  <butthon
                    className="tool-item"
                    id={path.pathname == "/shop" ? 'logout_button_extra' : 'logout_button'}
                    onClick={() => {
                      LogOut();
                    }}
                  >
                    {"logout"}
                  </butthon>

                }



              </NavLink>
            </>
          ) : (
              <NavLink to="/user/sign-in" onClick={handleClick}>
                <span className="tool-item">
                  <img src={UserLogo} alt="User" width="20" />
                </span>
              </NavLink>
            )}
          {path.pathname == "/shop" && (
            <OverlayTrigger
              rootClose
              trigger="hover"
              placement="bottom"
              overlay={
                <Popover id="popover-basic">
                  <Popover.Content>
                    <FormControl
                      placeholder="Search"
                      onChange={(e) => setFilters({ search: e.target.value })}
                    />
                  </Popover.Content>
                </Popover>
              }
            >
              <span className="tool-item cursor-pointer">
                <img alt="Search" src={SearchLogo} width="20" />
                Search
              </span>
            </OverlayTrigger>
          )}
          {width > 992 &&
            <NavLink to="/cart" onClick={handleClick}>
              <span className="tool-item">
                <img alt="Cart" src={CartLogo} width="20" />
                <span className="badge">
                  {
                    cart != null && cart.length
                    //   totalUniqueItems
                  }
                </span>
              </span>
            </NavLink>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
const mapStateToProps = (state) => ({
  auth: state.app,
  cart: state.app.cart,
});
export default connect(mapStateToProps, { LogOut, setFilters })(MyNavbar);
