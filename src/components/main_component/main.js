import "./main.css";
import { useState, useEffect, useCallback } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Main() {
  const [duration, setDuration] = useState('');
  const [cost, setCost] = useState(1);
  const [data,setData]=useState([]);
  const url = 'data.json';


  const getData = useCallback(async () => {

    const response = await fetch(url);    
    const past = await response.json();
    const events = past.plans;
    console.log(events)  
    setData(events);

  }, [url]);

  useEffect(() => {
    getData();
  }, [url, getData]);


  const handleChange = (event) => {
    setDuration(event.target.value);
    setCost(event.target.value);
  };

  return (
    <>
      <div className="main">
        <h1>Unlock worry free parenting for you</h1>
        <h2>Get Pediatrician led holistic care for your baby</h2>
      </div>
      <div className="cards">
        {data.map((item)=>
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
                Select Duration:
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Duration</InputLabel>
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
            </div>
            <div className="listItem">
              <p>
                Plan Cost:
                 <span> ${item.Plan_Cost*cost}</span>
              </p>
            </div>
          </div>
        </div>
        )}
        </div>
    </>
  );
}
