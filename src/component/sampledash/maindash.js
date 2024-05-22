import React, { useState } from "react"; // Importing useState from React
import Sidebar12 from "./sidebar";
import "./dd.css"
import { Link } from "react-router-dom";
import Navbar12 from "./nav";
import Content12 from "./content";

function App12() {
    // const [selectedContent, setSelectedContent] = useState('');

    // const handleMenuItemClick = (content) => {
    //     setSelectedContent(content);
    // };

    const [selectedContent, setSelectedContent] = useState('');
    const [isLogoutConfirmationOpen, setIsLogoutConfirmationOpen] = useState(false);

    const handleMenuItemClick = (content) => {
        if (content === 'logout') {
            setIsLogoutConfirmationOpen(true);
        } else {
            setSelectedContent(content);
        }
    };

    const handleLogoutConfirm = () => {
        // Perform logout actions
        // For now, just redirect to login page
        window.location.href = '/login';
    };

    const handleLogoutCancel = () => {
        setIsLogoutConfirmationOpen(false);
    };
   

    return (
        <>
        <Link to="/final">
        <div className="container" >
            <Navbar12/>
            <Sidebar12 onMenuItemClick={handleMenuItemClick} />
            <Content12 selectedContent={selectedContent} /> 
        </div>
        </Link>
          
        </>
      
    );
}

export default App12;