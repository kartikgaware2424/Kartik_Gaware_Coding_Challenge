import axios from "axios"
import PlayerService from "./Service/PlayerService"
import { useState } from "react";
export default function DeletePlayer()
{
    const[playerId,setId]=useState();
    const[message,setMessage]=useState()

    const handlClick=()=>
    {
        PlayerService.deletePlayer(playerId).
        then(()=>setMessage("Player deleted successfully"));

        


    }
    const handleChange=(e)=>
    {
        setId(e.target.value);

    }
    return(
        <>
        <div className="container mt-10">
        <h2 className="text-center mb-4">Delete Player</h2>
        <label className="form-label">Enter Id</label>
        <input type="text" value={playerId} onChange={handleChange} required />
          <br />
        <button onClick={handlClick}>  Delete Player</button>
       
        <h1>{message}</h1>
        </div>
       

       
        </>
    )
}