import "./main.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Main() {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <div className="main">
        <h1>Unlock worry free parenting for you</h1>
        <h2>Get Pediatrician led holistic care for your baby</h2>
      </div>
      <div className="cards">
        <div className="card">
          <div className="heading">
            <h2>Premium Care</h2>
          </div>
          <div className="body">
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span>8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                Select Duration:
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Duration</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="heading">
            <h2>Premium Care</h2>
          </div>
          <div className="body">
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span>8 am - 11 pm</span>
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="heading">
            <h2>Premium Care</h2>
          </div>
          <div className="body">
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span> 8 am - 11 pm</span>
              </p>
            </div>
            <div className="listItem">
              <p>
                WhatsApp Group:
                <span>8 am - 11 pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
