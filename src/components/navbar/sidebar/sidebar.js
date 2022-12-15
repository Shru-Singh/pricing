import "./sidebar.css";

function Sidebar({ state, closeHandler }) {
  return (
    <>
    {state ? (
    <div className="sidebar">
      <div className="sidebarDrawer">
        <div className="cross">
          <img src="Images/cross.png" alt="" onClick={closeHandler} />
        </div>
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
      </div>
    </div>
    ) : (
        <></>
      )}
      </>
  );
}

export default Sidebar;