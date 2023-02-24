import React, { useState } from "react";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  //keep track of what is being typed via useState hook
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skills_1, setSkills_1] = useState("");
  const [skills_2, setSkills_2] = useState("");
  const [skills_3, setSkills_3] = useState("");

  //Create an array to store errors from the API
  const [errors, setErrors] = useState([]);
  //handler when the form is submitted
  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();

    //make a post request to create a new person
    axios
      .post("http://localhost:8000/api/Pets", {
        name,
        type,
        description,
        skills_1,
        skills_2,
        skills_3,
      })
      // new item was succesfully created and the response has the new DB item in res.data
      .then((res) => {
        console.log(res);
        props.addNewAuthor(res.data);
      })

      .then((res) => console.log(res)) // If successful, do something with the response.

      .catch((err) => {
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        // Set Errors
        setErrors(errorArr);
      });
  };

  //onChange to update title and price

  return (
    <form onSubmit={onSubmitHandler}>
      {errors.map((err, index) => (
        <p key={index}>{err}</p>
      ))}
      <h1>Pet Shelter</h1>
      <h2>know a pet needing a home?</h2>
      <a href="/">go home</a>
      <p>
        <label>name</label>
        <br />
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </p>
      <p>
        <label>type</label>
        <br />
        <input
          type="text"
          onChange={(e) => setType(e.target.value)}
          value={type}
        />
      </p>
      <p>
        <label>description</label>
        <br />
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </p>
      <p>
        <label>skill 1</label>
        <br />
        <input
          type="text"
          onChange={(e) => setSkills_1(e.target.value)}
          value={skills_1}
        />
      </p>
      <p>
        <label>skill 2</label>
        <br />
        <input
          type="text"
          onChange={(e) => setSkills_2(e.target.value)}
          value={skills_2}
        />
      </p>
      <p>
        <label>skill 3</label>
        <br />
        <input
          type="text"
          onChange={(e) => setSkills_3(e.target.value)}
          value={skills_3}
        />
      </p>

      <input type="submit" />
    </form>
  );
};
