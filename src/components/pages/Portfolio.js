import React from "react";

const styles = {
  cardDesign: {
    width: "18rem",
    paddingTop: "30px",
  },
};

function Portfolio() {
  return (
    <div>
      <div class="container">
        Portfolio:
        <div class="row">
          <div class="col">
            <div class="card h-100" style={styles.cardDesign}>
              <img
                src="assets/images/work-day-scheduler.png"
                class="card-img-top"
                alt="Work Day Scheduler"
              />
              <div class="card-body">
                <h5 class="card-title">Work Day Scheduler</h5>
                <p class="card-text">
                  A simple calendar app for scheduling your work day.
                </p>
                <a
                  href="https://csalhab.github.io/work-day-scheduler/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" style={styles.cardDesign}>
              <img
                src="assets/images/work-weather-dashboard.png"
                class="card-img-top"
                alt="Weather Dashboard"
              />
              <div class="card-body">
                <h5 class="card-title">Weather Dashboard</h5>
                <p class="card-text">
                  Get the current forecast for any city along with its 5 day
                  forecast too.
                </p>
                <a
                  href="https://csalhab.github.io/weather-dashboard/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" style={styles.cardDesign}>
              <img
                src="assets/images/work-note-taker.png"
                class="card-img-top"
                alt="Note Taker"
              />
              <div class="card-body">
                <h5 class="card-title">Note Taker</h5>
                <p class="card-text">
                  Take Notes With An App Backed by ExpressJS Server.
                </p>
                <a
                  href="https://ccs-note-taker.herokuapp.com/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" style={styles.cardDesign}>
              <img
                src="assets/images/generate-password.png"
                class="card-img-top"
                alt="Password Generator"
              />
              <div class="card-body">
                <h5 class="card-title">Password Generator</h5>
                <p class="card-text">
                  Need a strong and secured password? You can get that on this
                  password generator app.
                </p>
                <a
                  href="https://csalhab.github.io/password-generator/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" style={styles.cardDesign}>
              <img
                src="assets/images/work-bucket.png"
                class="card-img-top"
                alt="Bucket"
              />
              <div class="card-body">
                <h5 class="card-title">Bucket</h5>
                <p class="card-text">
                  Robust app for posting and tracking bucket list items such as
                  travel, experiences & recipes.
                </p>
                <a
                  href="http://aspirational-bucket.herokuapp.com/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" style={styles.cardDesign}>
              <img
                src="assets/images/workout-tracker.png"
                class="card-img-top"
                alt="Workout Tracker"
              />
              <div class="card-body">
                <h5 class="card-title">Workout Tracker</h5>
                <p class="card-text">
                  View create and track your daily workouts.
                </p>
                <a
                  href="https://ccs-workout-tracker.herokuapp.com/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" style={styles.cardDesign}>
              <img
                src="assets/images/tech-blog.png"
                class="card-img-top"
                alt="Tech Blog"
              />
              <div class="card-body">
                <h5 class="card-title">Tech Blog</h5>
                <p class="card-text">
                  A CMS-style blog site where you can blog posts.
                </p>
                <a
                  href="https://ccs-tech-blog.herokuapp.com/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" style={styles.cardDesign}>
              <img
                src="assets/images/budget-tracker.png"
                class="card-img-top"
                alt="Budget Tracker"
              />
              <div class="card-body">
                <h5 class="card-title">Budget Tracker</h5>
                <p class="card-text">
                  It works online or while you're offline!
                </p>
                <a
                  href="https://ccs-on-offline-budget-tracker.herokuapp.com/"
                  target="_blank"
                  class="btn btn-primary"
                >
                  Check it out!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
