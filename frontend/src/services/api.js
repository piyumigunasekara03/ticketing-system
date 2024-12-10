import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // Backend URL
});

export default API;

export const startSimulation = async (config) => {
    try {
      const response = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(config),
      });
      return await response.json();
    } catch (error) {
      console.error("Error starting simulation:", error);
    }
  };
  
  export const stopSimulation = async () => {
    try {
      const response = await fetch("/api/stop", { method: "POST" });
      return await response.json();
    } catch (error) {
      console.error("Error stopping simulation:", error);
    }
  };
  