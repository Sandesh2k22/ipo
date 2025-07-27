import axios from "axios";

const API_URL = "https://ipo-backend-2ra9.onrender.com/api/ipos";


export const getIPOs = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching IPOs:", error);
    return [];
  }
};


export const addIPO = async (ipo) => {
  try {
    const response = await axios.post(API_URL, ipo);
    return response.data;
  } catch (error) {
    console.error("Error adding IPO:", error);
  }
};


export const updateIPO = async (id, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating IPO:", error);
  }
};

export const deleteIPO = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting IPO:", error);
  }
};
