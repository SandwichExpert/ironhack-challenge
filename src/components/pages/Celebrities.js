import React, { useState, useEffect } from "react";
import { NavLink, Route } from "react-router-dom";
import axios from "axios";
import CelebrityDetails from "./CelebrityDetails";

export default function Celebrities() {
  const [celebrities, setCelebrities] = useState([]);
  const [selectedCelebrityId, setSelectedCelebrityId] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    for (let page = 1; page <= 100; page++) {
      axios
        .get(
          `https://api.themoviedb.org/3/person/popular?api_key=ec73888bff877adf555ab8dbe270516c`,
          page
        )
        .then(res => {
          console.log(res.data);
          setCelebrities(lastCelebrities => [
            ...lastCelebrities,
            ...res.data.results
          ]);
        });
    }
  }, []);

  function getImageUrl(celebrity) {
    return "https://image.tmdb.org/t/p/w185/" + celebrity.profile_path;
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  let selectedCelebrity = celebrities.find(
    celebrity => celebrity.id === selectedCelebrityId
  );

  let filteredCelebrities = celebrities.filter(celebrity =>
    celebrity.name.toUpperCase().includes(search.toUpperCase())
  );

  return (
    <>
      <h1>Celebrities</h1>
      <input type="text" value={search} onChange={handleSearchChange} />
      <div>
        <h1>{filteredCelebrities.length} celebrities</h1>
      </div>
      <div className="celebsContainer">
        <div className="celebsList">
          <div className="left_celebs">
            <table>
              <tbody>
                {filteredCelebrities.map(celebrity => (
                  <tr
                    key={celebrity.id}
                    onClick={() => setSelectedCelebrityId(celebrity.id)}
                    className="definite"
                  >
                    <td>
                      <img
                        src={getImageUrl(celebrity)}
                        alt={celebrity.name}
                        height="175"
                        width="120"
                      />
                    </td>
                    <td
                      className={
                        selectedCelebrityId === celebrity.id
                          ? "active_name"
                          : "inactive"
                      }
                    >
                      {celebrity.name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="right-celebrities">
            {selectedCelebrity && (
              <div>
                <img src={getImageUrl(selectedCelebrity)} />
                <h2>{selectedCelebrity.name}</h2>
                <h4>Known for: </h4>
                {selectedCelebrity.known_for.map(movie => (
                  <div key={movie.id}>
                    {movie.title}
                    <br />
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w185/" + movie.poster_path
                      }
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* <div className="right-celebrities">
          <Route exact path="/celebrities/:id" component={CelebrityDetails}/>
        </div> */}
      </div>
    </>
  );
}
