import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';


const URL = 'https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p='

function App() {
  const [strPlayer, setstrPlayer] = useState ('')
  const [search, setSearch] = useState ('')
  const [strTeam, setstrTeam] = useState ('')
  const [strNationality, setstrNationality] = useState ('')
  const [strDescriptionEN, setstrDescriptionEN] = useState ('')

  const playerSearch= ()=>{
    axios.get(`${URL}${search}`)
      .then((response)=>{
        console.log(response.data)
        if (response.data.player && response.data.player.length > 0) {
          setstrPlayer(response.data.player[0].strPlayer);
          setstrTeam(response.data.player[0].strTeam)
          setstrNationality(response.data.player[0].strNationality)
          setstrDescriptionEN(response.data.player[0].strDescriptionEN)
        } else {
          console.log("No player data found");
        }
      }).catch (error =>{
        alert(error)
      })
  }
  return (
    <div style={{margin:'50px'}}>
      <h3>Search a football Player</h3>
      <input type='text' value={search} onChange={(e => setSearch(e.target.value))} placeholder='e.g. "Lionel Messi"' />
      <button onClick={playerSearch}>Search</button>
      <p>Player name: {strPlayer}</p>
      <p>Player team: {strTeam}</p>
      <p>Player nationality: {strNationality}</p>
      <p>Player bio: {strDescriptionEN}</p>
    </div>
  );
}

export default App;
