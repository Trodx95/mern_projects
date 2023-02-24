import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Update = (props) => {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skills_1, setSkills_1] = useState("");
  const [skills_2, setSkills_2] = useState("");
  const [skills_3, setSkills_3] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/api/Pets/" + id).then((res) => {
      setName(res.data.name);
      setType(res.data.type);
      setDescription(res.data.description);
      setSkills_1(res.data.skills_1);
      setSkills_2(res.data.skills_2);
      setSkills_3(res.data.skills_3);
    });
  }, []);

  const updatePet = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/Pets/" + id, {
        name,
        type,
        description,
        skills_1,
        skills_2,
        skills_3,
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h1>Pet shelter</h1>
      <h2> Edit {name}</h2>
      <a href="/">go home</a>
      <form onSubmit={updatePet}>
        <p>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Type</label>
          <br />
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
        </p>
        <p>
          <label>description</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </p>
        <p>
          <label>skill 1</label>
          <br />
          <input
            type="text"
            name="skill_1"
            value={skills_1}
            onChange={(e) => {
              setSkills_1(e.target.value);
            }}
          />
        </p>
        <p>
          <label>skills 2</label>
          <br />
          <input
            type="text"
            name="skills_2"
            value={skills_2}
            onChange={(e) => {
              setSkills_2(e.target.value);
            }}
          />
        </p>
        <p>
          <label>skills 3</label>
          <br />
          <input
            type="text"
            name="skills_3"
            value={skills_3}
            onChange={(e) => {
              setSkills_3(e.target.value);
            }}
          />
        </p>

        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
