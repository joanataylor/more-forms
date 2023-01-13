import { useState } from "react";

const HookForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [userNameError, setUserNameError] = useState(null);
  const [lastName, setLastName] = useState("");
  const [userLastNameError, setUserLastNameError] = useState(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [users, setUsers] = useState([]);
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };
    setUsers([...users, user]);
    setHasBeenSubmitted(true);
    //code below clears form after submitting info
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    if (hasBeenSubmitted) {
      console.log("thank you for submitting the form.");
    } else {
      console.log("Please fill out form");
    }
  };

  const userNameHandler = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setUserNameError("Name required.");
    } else if (e.target.value.length < 2) {
      setUserNameError("Name must be more than 2 characters.");
    } else {
      setUserNameError(null);
    }
  };

  const userLastNameHandler = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setUserLastNameError("Last name required.");
    } else if (e.target.value.length < 2) {
      setUserLastNameError("Name must be more than 2 characters.");
    } else {
      setUserLastNameError(null);
    }
  };

  const userEmailHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email required.");
    } else if (e.target.value.length < 5) {
      setEmailError("Email must be more than 5 characters.");
    } else {
      setEmailError(null);
    }
  };

  const userPasswordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password required.");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError(null);
    }
  };

  const userConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 1) {
      setConfirmPasswordError("Confirm Password.");
    } else if (password !== e.target.value) {
      setConfirmPasswordError("Password does not must match.");
    } else {
      setConfirmPasswordError(null);
    }
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3>
          {hasBeenSubmitted
            ? "Thank you for submitting the form."
            : "Please fill out form"}
        </h3>

        <div className="container mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name:{""}
          </label>

          <input
            type="text"
            name="firstName"
            id="firstName"
            className="form-control"
            onChange={userNameHandler}
            value={firstName}
          />

          {userNameError && (
            <span className="form-text text-danger">{userNameError}</span>
          )}
        </div>

        <div className="container mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name:{" "}
          </label>

          <input
            type="text"
            name="lastName"
            id="lastName"
            className="form-control"
            // onChange={(e) => setLastName(e.target.value)}
            onChange={userLastNameHandler}
            value={lastName}
          />
          {userLastNameError && (
            <span className="form-text text-danger">{userLastNameError}</span>
          )}
        </div>

        <div className="container mb-3">
          <label htmlFor="email" className="form-label">
            Email Address:{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            // onChange={(e) => setEmail(e.target.value)}
            onChange={userEmailHandler}
            value={email}
          />
          {emailError && (
            <span className="form-text text-danger">{emailError}</span>
          )}
        </div>
        <div className="container mb-3">
          <label htmlFor="password" className="form-label">
            Password:{" "}
          </label>

          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            // onChange={(e) => setPassword(e.target.value)}
            onChange={userPasswordHandler}
            value={password}
          />

          {passwordError && (
            <span className="form-text text-danger">{passwordError}</span>
          )}
        </div>

        <div className="container mb-3">
          <label htmlFor="password" className="form-label">
            Confirm Password:{" "}
          </label>

          <input
            type="password"
            id="password"
            className="form-control"
            // onChange={(e) => setConfirmPassword(e.target.value)}
            onChange={userConfirmPasswordHandler}
            value={confirmPassword}
          />

          {confirmPasswordError && (
            <span className="form-text text-danger">
              {confirmPasswordError}
            </span>
          )}
        </div>

        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-warning">
            Create User
          </button>
        </div>
      </form>
      {/* allows code to be shown while typing it out */}
      <div>
        <p>Your Form Data</p>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
      </div>
    </div>
  );
};

export default HookForm;
