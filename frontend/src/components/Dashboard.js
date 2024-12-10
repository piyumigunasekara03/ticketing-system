import React, { useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [tickets, setTickets] = useState(0);
  const [config, setConfig] = useState({
    totalTickets: "",
    releaseRate: "",
    retrievalRate: "",
    vendorCount: "",
  });

  // const addtickets = () => {
  //   api.post("/tickets/add", { amount: 10 })
  //     .then((response) => settickets(response.data.tickets))
  //     .catch((error) => console.error(error));
  // };

  // const buytickets = () => {
  //   api.post("/tickets/buy", { amount: 5 })
  //     .then((response) => settickets(response.data.remainingtickets))
  //     .catch((error) => console.error(error));
  // };


  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setConfig((prev) => ({ ...prev, [name]: value }));
  // };

  // return (
  //   <div className="dashboard">
  //     <div className="stats">
  //       <div>
  //         <label>Total Tickets</label>
  //         <input
  //           type="number"
  //           name="totalTickets"
  //           placeholder="Max ticket capacity"
  //           value={config.totalTickets}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label>Ticket Release Rate</label>
  //         <input
  //           type="number"
  //           name="releaseRate"
  //           placeholder="Tickets/minute"
  //           value={config.releaseRate}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label>Customer Retrieval Rate</label>
  //         <input
  //           type="number"
  //           name="retrievalRate"
  //           placeholder="Customers/minute"
  //           value={config.retrievalRate}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label>Vendor Count</label>
  //         <input
  //           type="number"
  //           name="vendorCount"
  //           placeholder="Number of vendors"
  //           value={config.vendorCount}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //     <h1>Tickets: {tickets}</h1>
      // {/* <button onClick={addTickets}>Add Tickets</button>
      // <button onClick={buyTickets}>Buy Tickets</button> */}
  //     </div>
  //     </div>
  //   </div>
  // );
};

export default Dashboard;
