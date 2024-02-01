import React, { useState, useEffect, useRef } from "react";
import {
  useLocation,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

import { useCookies } from "react-cookie";
import Sidebar from "./components/Sidebar";

import DashBoard from "./pages/Dashboard";

import NotFoundPage from "./pages/NotFoundPage";
import SearchBar from "./pages/SearchBar";
import SettingsTab from "./pages/SettingsTab";
import {
  useMediaQuery,
  createTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from "@mui/material";
import Header from "./components/Header/Header";


import CallRecording from "./SubMenus/ResourceManager/CallRecording";
export default function App() {



  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");
  const [activeMenuItemSide, setActiveMenuItemSide] = useState("Dashboard");
  const [orangeMode, setOrangeMode] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [themeMode, setThemeMode] = useState(
    prefersDarkMode ? "dark" : "light"
  );

  const theme = createTheme({
    typography: {
      fontFamily: "sans-serif poppins",
      
    },
    palette: {
      mode: themeMode,
      primary: {
        main:
          themeMode === "dark"
            ? orangeMode
              ? "#EE6047"
              : "#ffff"
            : orangeMode
            ? "#EE6047"
            : "#1e2737",
      },
      background: {
        default: "#f5f5f5",
      },
    },
  });
  const toggleThemeMode = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }
  let location = useLocation();
  // const isAuthenticationPage = location.pathname === "/mains";
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        className="h-screen flex "
        style={{
          backgroundColor:
            themeMode === "light"
              ? theme.palette.background.default
              : "#000000",
        }}
      >
      
          <Sidebar
            activeMenuItem={activeMenuItem}
            onMenuItemClick={setActiveMenuItem}
          />

        <div className="flex-grow flex flex-col sticky top-0">
         
            <div>
              <Paper className="bg-white text-black font-sans font-semibold text-xl py-8 h-20 text-center relative">
                <nav className="flex justify-between items-center">
                 
                    <div className="px-6 space-x-2 items-center flex sm:hidden">
                      {/* <img src="./images/bell.png" className="w-7" alt="Bell" /> */}
                      <img
                        src="./images/avatar.png"
                        className="w-7"
                        alt="Avatar"
                        // onClick={handleLogout}
                      />
                    </div>
                
                  {/* {themeMode === "light" ? (
                  <img src="./piifinder.png" className="w-28" alt="Logo" />
                ) : (
                  <img src="./logowhite.png" className="w-20" alt="Logo" />
                )} */}

                  <img
                    src="./images/logo white.png"
                    className="w-28"
                    alt="Logo"
                  />
                  <div
                    // onClick={toggleSidebar}
                    className="block md:hidden"
                  ></div>

                  <div className="px-16 space-x-2 items-center hidden md:flex">
                    {/* <img src="./images/bell.png" className="w-7" alt="Bell" /> */}
                    <img
                      src="./images/avatar.png"
                      className="w-7"
                      alt="Avatar"
                      // onClick={handleLogout}
                    />
                  </div>
                </nav>
              </Paper>
              <Header activeMenuItem={activeMenuItem} />
            </div>
        
          <Routes>
          

            <Route path="/dashboard" element={<DashBoard  theme={theme}  themeMode={themeMode} />} />

            <Route
              path="/search"
              element={<SearchBar theme={theme}  themeMode={themeMode} activeMenuItemSide={activeMenuItemSide} onMenuItemClick={setActiveMenuItem} onMenuItemClickSide={setActiveMenuItemSide} />}
            />

            <Route path="/Setting" element={<SettingsTab theme={theme} toggleThemeMode={toggleThemeMode}  themeMode={themeMode} />} />
           
            <Route path="/callrecording" element={<CallRecording />} />
            <Route
              path="*"
              element={
                 <NotFoundPage />
              }
            />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
