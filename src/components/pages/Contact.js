import React from "react";

const styles = {
  formContainer: {
    left: 30,
    paddingLeft: "150px",
    paddingTop: "70px",
    paddingRight: "70px",
    width: "100%",
  },
  form: {
    left: 30,
    width: "30%",
    color: "white",
    textAlign: "center",
    paddingLeft: "70px",
    paddingTop: "70px",
    paddingRight: "70px",
    paddingBottom: "50px",
    background: "#808080",
  },
};

function Contact() {
  return (
    <div style={styles.formContainer}>
      <form
        style={styles.form}
        action="mailto:claudiacorreasalhab@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <div class="row mb-3">
          <label for="name" class="col-sm-2 col-form-label">
            Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="name" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="email" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="email" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="messageTextArea" class="col-sm-2 col-form-label">
            Message
          </label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
              id="messageTextArea"
              rows="3"
            ></textarea>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
