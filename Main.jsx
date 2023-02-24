import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Main = (props) => {
  const [p, setP] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8000/api/Pets").then((res) => setP(res.data));
  }, []);

  const { removeFromDom } = props;

  const deleteP = (petId) => {
    axios
      .delete("http://localhost:8000/api/Pets/" + petId)
      .then((res) => {
        removeFromDom(petId);
      })
      .catch((err) => console.error(err));
  };

  return (
    <form>
      <div>
        <h1>Pet shelter</h1>
        <Link to={"/pet" + "/new"}>Add new Pet</Link>
        <h2>these pets are looking for a good home</h2>
        <div class="table-responsive">
          <table class="table">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
            {p.map((pet, idx) => {
              return (
                <tr>
                  <td>
                    name: <Link to={"/pet/" + pet._id}>{pet.name}</Link>
                  </td>

                  <td>type: {pet.type}</td>
                  <td>
                    <div>
                      <Link to={"/pet/" + pet._id + "/edit"}>Edit</Link>
                    </div>
                    <div>
                      <button
                        onClick={(e) => {
                          deleteP(pet._id);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </form>
  );
};
export default Main;
