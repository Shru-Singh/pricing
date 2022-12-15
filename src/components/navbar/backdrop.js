
import "./sidebar/sidebar.css";

function Backdrop({ closeHandler }) {
    return <div className="backdrop" onClick={closeHandler}></div>;
}


export default Backdrop;