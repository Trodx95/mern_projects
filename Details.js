import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {
  const [p, setP] = useState({});
  const { id } = useParams();

  const { removeFromDom } = props;

  const deleteP = (petId) => {
    axios
      .delete("http://localhost:8000/api/Pets/" + petId)
      .then((res) => {
        removeFromDom(petId);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/Pets/" + id)
      .then((res) => setP(res.data))
      .catch((err) => console.error(err));
  });

  return (
    <div>
      <h1>Pet Shelter</h1>
      <h2> details about {p.name}</h2>
      <a href="/">go home</a>
      <button
        onClick={(e) => {
          deleteP(p._id);
        }}
      >
        adobt {p.name}
      </button>
      <p>name: {p.name}</p>
      <p>type: {p.type}</p>
      <p>description: {p.description}</p>
      <p>skill 1: {p.skills_1}</p>
      <p>skill 2: {p.skills_2}</p>
      <p>skill 3: {p.skills_3}</p>

      <Link to={"/pet/" + p._id + "/edit"}>Edit</Link>
    </div>
  );
};

export default Detail;
