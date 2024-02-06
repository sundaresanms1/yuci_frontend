import React, { createContext, useContext, useState } from "react";

const SubtitleContext = createContext();

export const useSubtitle = () => useContext(SubtitleContext);

export const SubtitleProvider = ({ children }) => {
  const [subtitle, setSubtitle] = useState("");
  const [rowData, setRowData] = useState(null); // Initialize rowData state

  const updateRowData = (data) => {
    setRowData(data);
  };

  return (
    <SubtitleContext.Provider value={{ subtitle, setSubtitle,rowData, updateRowData }}>
      {children}
    </SubtitleContext.Provider>
  );
};

export default SubtitleProvider;
