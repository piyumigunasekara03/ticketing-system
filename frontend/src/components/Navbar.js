import React from "react";

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <h1 style={styles.title}>Ticketing System</h1>
        </nav>
    );
};

const styles = {
    navbar: {
        backgroundColor: "#007bff",
        color: "#fff",
        padding: "10px 20px",
        textAlign: "center",
    },
    title: {
        margin: 0,
        fontSize: "24px",
    },
};

export default Navbar;
