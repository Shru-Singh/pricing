import './navbar.css';
import React, { useState } from "react";
import Sidebar from "./sidebar/sidebar";
import Backdrop from "./backdrop";

function Navbar({ page }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  const drawerOpenHandler = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const backdropClickHandler = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="headerLeft">
          <div className="babynama">BabyNama</div>
        </div>
        <div className="headerRight">
          <div className="menuList">
            <div className="menuListItem">
              <p>Home</p>
            </div>

            <div className="menuListItem">
              <p>Testimonials</p>
            </div>

            <div className="menuListItem">
              <p>About</p>
            </div>
            <div className="menuListItem">
              <p>Services</p>
            </div>
            <div className="menuListItem">
              <p>Plans</p>
            </div>
            <div className="menuListItem">
              <p>Doctors</p>
            </div>
            <div className="menuListItem">
              <p>Baby Tools</p>
            </div>
            <div className="menuListItem">
              <p>Blog</p>
            </div>
            <div className="menuListItem">
              <p>FAQs</p>
            </div>
            <div className="menuListItem">
              <p>Contact</p>
            </div>
          </div>

          <div className="drawerOpener" onClick={drawerOpenHandler}>
            <img src="Images/menu.png" alt="" />
          </div>
          {sidebarOpen ? <Sidebar state={true} closeHandler={backdropClickHandler}/> : <Sidebar state={false} />}
          {sidebarOpen ? (
            <Backdrop closeHandler={backdropClickHandler} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;