import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootstrap from 'react-bootstrap';


const App =  () => {
  const [players,setPlayers] = useState([]);
  const[loading,setLoading] = useState(false);
  const getplayerData = async() => {
    try{
      const data = await axios.get(
        "https://nba-players.herokuapp.com/players-stats"
      );
      console.log(data);
      setPlayers(data.data);

    }catch(e){
      console.log(e);

    }
  };
  const columns = [
    { dataField: "name", text: "Player Name"},
    { dataField: "points_per_game", text: "Points Per Game"},
    { dataField: "team_name", text: "Team Name"},

  ];

  useEffect(() => {
    getplayerData();

  }, [])

  return <div className="App">
    <BootstrapTable
    keyField="name"
    data = {players}
    columns = {columns}
    pagination={paginationFactory()}
    
    />
  </div>
};

export default App; 
