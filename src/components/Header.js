import React from "react";
// Here we are importing a CSS file as a dependency
import "../styles/Header.css";

function Header() {
  return (
    <>
      {/* <header className="header">
        <h1>Home</h1>
      </header> */}

      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="3"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="4"></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="5"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container">
              <img
                src="assets/images/image_db_cloud.jpg"
                className="d-block w-100"
                alt="RDBMS NOSQL Database Experience"
              />
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                src="assets/images/image_mern.png"
                className="d-block w-100"
                alt="MERN MongoDB ExpressJS React Node Development"
              />
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                src="assets/images/image_debug.jpg"
                className="d-block w-100"
                alt="Strong Troubleshooting Debugging Skills"
              />
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                src="assets/images/image_androidStudioJavaAndroid.png"
                className="d-block w-100"
                alt="Android Studio Java Android Mobile Engineering"
              />
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="container">
              <img
                src="assets/images/image_node.png"
                className="d-block w-100"
                alt="RESTful APIs CRUD Web Services"
              />
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
