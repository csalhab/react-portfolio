import React from "react";

// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6",
  },
  heading: {
    background: "#000000",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.3rem",
    color: "white",
    padding: "0 20px",
  },
  content: {
    background: "#f0f0f0",
    fontSize: "1.2rem",
    padding: 20,
  },
  wordHighlights: {
    background: "#c6c1ff",
  },
  funFact: {
    textDecoration: "underline",
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>About Me</div>
      <div style={styles.content}>
        My name is{" "}
        <span style={styles.wordHighlights}>CLAUDIA CORREA SALHAB</span>
        <p></p>
        <p>
          I have a{" "}
          <span style={styles.wordHighlights}>
            Bachelor's Degree in Computer Science & Mathematics
          </span>
          . I live in the Bronx borough or NYC, Riverdale specifically.
        </p>
        <p>
          Professionally, I have a 22+ years career, starting as a Web Developer
          initially and for about 7 years and then I moved into Software
          Engineering and have been a SWE ever since.
        </p>
        <p>
          My favorite programming language is{" "}
          <span style={styles.wordHighlights}>Java</span> and I like building{" "}
          <span style={styles.wordHighlights}>RESTful APIs</span> as well as
          working in{" "}
          <span style={styles.wordHighlights}>
            Android Studio coding Android mobile apps
          </span>
          . I have spent these last several months brushing up on{" "}
          <span style={styles.wordHighlights}>JavaScript & CSS</span>. And I've
          learned a great deal on NodeJS, Express, OOP (Object-Oriented
          Programming), MVC (Model View Controller), ORM/Sequelize, TDD (Test
          Driven Development), Mock, templating engines, Heroku deployment &
          building React apps. All great things on{" "}
          <span style={styles.wordHighlights}>MERN Stack</span>.
        </p>
        <p>
          I do have experience with{" "}
          <span style={styles.wordHighlights}>databases</span> as well, with
          both RDBMS (MySQL, MS SQL Server & Oracle) and NoSQL (MongoDB).
        </p>
        <p>
          On the personal side, I'm not originally from the United States but I
          am, now for over 35 years, a{" "}
          <span style={styles.wordHighlights}>
            Naturalized Citizen of the United States
          </span>
          . I was born in Brasil, (I also have Lebanese heritage) in the state
          of Pará in a city called Belém (which translates to Bethlehem in
          English). This state is in Brasil's north and the city is a basin city
          to the Amazon River.
        </p>
        <p>
          <span style={styles.funFact}>Fun fact</span>: Belem is located just
          over a degree below the Equator.
        </p>
        <p>
          Portuguese is my 1st language and English is actually my 3rd language
          and that's because when I moved to the United States when I was 5
          years old, there were no Portuguese speaking teachers available in the
          school district. So I was assigned a Spanish speaking teacher (who was
          brilliant and found similar words in Spanish to Portuguese and while
          she taught me English, she also taught me Spanish).
        </p>
        <p>
          So when I was deciding what to study in university, I decided to study
          programming/coding because I enjoyed that experience in learning the
          Spanish & English languages. And I've not been disappointed.
        </p>
        <p>
          I'm a <span style={styles.wordHighlights}>strong debugger</span>. And
          I've had to reverse engineer code many times. As a teammate, I'm very
          encouraging and supportive and always offering to help and making
          myself available. These last 5 years, in the Sr Integration Engineer
          role, I discovered that I am very
          <span style={styles.wordHighlights}>
            comfortable being in front of customers
          </span>{" "}
          and thrived just as much as being a collaborator/Software Engineer
          with Development/Engineering teams.
        </p>
        <p>
          I work hard to keep up with current technologies and look forward to
          my next adventure in Software Engineering.
        </p>
      </div>
    </div>
  );
}

export default Card;
