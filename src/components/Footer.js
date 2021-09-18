import React from "react";

const styles = {
  footer: {
    left: 0,
    bottom: 0,
    width: "100%",
    color: "gray",
    textAlign: "center",
    paddingTop: "100px",
  },
};

function Footer() {
  return (
    <div>
      <footer>
        <p style={styles.footer}>Copyright © 2021. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
