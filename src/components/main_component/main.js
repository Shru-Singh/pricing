import "./main.css";
import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function Main() {
  const [duration, setDuration] = useState("");
  const [cost, setCost] = useState(1);
  const [data, setData] = useState([]);
  const [dataItem, setDataItem] = useState(1);
  const [bill, setBill] = useState(0);
  const url = "data.json";

  const getData = useCallback(async () => {
    const response = await fetch(url);
    const past = await response.json();
    const events = past.plans;
    console.log(events);
    setData(events);
  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);

  const handleChange = (event) => {
    setDuration(event.target.value);
    setCost(event.target.value);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const Styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "280px",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  const [boughtIsOpen, setBoughtOpen] = useState(false);

  const openModal = (e, i) => {
    setIsOpen(true);
    setDataItem(data[i].Plan_Cost);
  };
  function boughtModal() {
    setBoughtOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setBoughtOpen(false);
    setDataItem(1);
  }
  function planModal() {
    setBill(bill + dataItem * cost);
    console.log(bill);
    closeModal();
  }
  function purchaseModal() {
    setBill(0);
  }

  return (
    <>
      <div className="main">
        <h1>Unlock worry free parenting for you</h1>
        <h2>Get Pediatrician led holistic care for your baby</h2>
      </div>
      <div className="cards">
        {data.map((item, i) => (
          <div className="card" key={item.id}>
            <div className="heading">
              <h2>Premium Care</h2>
            </div>
            <div className="body">
              <div className="listItem">
                <p>
                  WhatsApp Group:
                  <span> {item.WhatsApp_Group}</span>
                </p>
              </div>
              <div className="listItem">
                <p>
                  Basic Medical Queries:
                  <span> {item.Basic_Medical_Queries}</span>
                </p>
              </div>
              <div className="listItem">
                <p>
                  Private Chat:
                  <span> {item.Private_Chat}</span>
                </p>
              </div>
              <div className="listItem">
                <p>
                  Video Consultation:
                  <span> {item.Video_Consultation}</span>
                </p>
              </div>
              <div className="listItem">
                <p>
                  Additional Consultations :
                  <span> {item.Additional_Consultations}</span>
                </p>
              </div>
              <div className="listItem">
                <p>
                  Growth tracking for baby:
                  <span> {item.Growth_tracking_for_baby}</span>
                </p>
              </div>
              <div className="listItem">
                Plan Cost:
                <span> ${item.Plan_Cost} for one month</span>
              </div>
              <div className="select">
              <button className="btn" onClick={(e) => openModal(e, i)}>Select Plan</button></div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
              >
                <h2>Premium Care</h2>
                <form>
                  <div className="listItem">
                    Choose PLan Duration:
                    <Box id="box" sx={{ minWidth: 120 }}>
                      <FormControl fullWidth id="form">
                        <InputLabel id="demo-simple-select-label">
                          Duration
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={duration}
                          label="Duration"
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>1 month</MenuItem>
                          <MenuItem value={3}>3 months</MenuItem>
                          <MenuItem value={6}>6 months</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                    <div className="">Total Plan Cost : {dataItem * cost}</div>
                  </div>
                </form>
                <div className="buyButtons">
                <button className="btn" onClick={closeModal}>close</button>
                <button className="btn" onClick={planModal}>Add Plan</button>
                </div>
              </Modal>
            </div>
          </div>
        ))}
      </div>
      <div className="cost">
        <h2>Total Purchase Cost : $ {bill}</h2>
      </div>
      <div className="buyButtons">
      <button className="btn" onClick={boughtModal}>Buy</button>
      <button  className="btn" onClick={purchaseModal}>Clear Purchase</button>
      </div>
      <Modal
        isOpen={boughtIsOpen}
        onRequestClose={closeModal}
        style={Styles}
      >
        {bill >0 ? (<h2>Thank you for purchasing our plan!</h2>) : (<h2>Yoh haven't selected any plan!</h2>)}
        <button className="btn" onClick={closeModal}>close</button>
      </Modal>
    </>
  );
}
