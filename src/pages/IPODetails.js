import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIPOs } from "../utils/ipoStorage";

function IPODetails() {
  const { id } = useParams();
  const [ipo, setIpo] = useState(null);

  useEffect(() => {
    const fetchIPO = async () => {
      const data = await getIPOs(); 
      const foundIPO = data.find((i) => i.id === parseInt(id));
      setIpo(foundIPO);
    };
    fetchIPO();
  }, [id]);

  if (!ipo) {
    return <h3>Loading IPO Details...</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>{ipo.name}</h2>
      <p><strong>Date:</strong> {ipo.date}</p>
      <p><strong>Price:</strong> ₹{ipo.price}</p>
      <p><strong>Status:</strong> {ipo.status}</p>
    </div>
  );
}

export default IPODetails;
