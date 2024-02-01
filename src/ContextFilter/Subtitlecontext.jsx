import React, { createContext, useContext, useState } from "react";

const SubtitleContext = createContext();

export const useSubtitle = () => useContext(SubtitleContext);

export const SubtitleProvider = ({ children }) => {
  const [subtitle, setSubtitle] = useState("");

  return (
    <SubtitleContext.Provider value={{ subtitle, setSubtitle }}>
      {children}
    </SubtitleContext.Provider>
  );
};

export default SubtitleProvider;
