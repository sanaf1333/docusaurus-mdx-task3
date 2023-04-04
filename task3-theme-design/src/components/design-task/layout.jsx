import React, { useState, useRef } from 'react';


export const Layout = ({ children, color }) => {

    return (
        <div>
            {children}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", width: "100vh", borderTop: "1px solid black", backgroundColor: color ? color : "#6ef0c0", position: "relative", zIndex: 0, margin: "auto", marginTop: "-50px" }}></div>
        </div>
    );
}
