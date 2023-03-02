import React from "react";

const ServerInfo = () => {
  const serverName = "Battle-RO";
  return (
    <div>
      <h4>Informacion del servidor:</h4>
      <div className="serverTime-container">
        <span>{serverName}</span>
        <span>12:30pm</span>
      </div>
    </div>
  );
};

export default ServerInfo;
