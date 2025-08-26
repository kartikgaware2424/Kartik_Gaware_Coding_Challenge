import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import PlayerService from "./Service/PlayerService";

export default function DisplayAll() {
    const [playerList, setPlayer] = useState([])
    const [message, setMessage] = useState("")

    // const handleClick=(e)=>
    // {
    //     e.preventDefault();


    //     PlayerService.getAllPlayer().
    //     then((response)=>{setPlayer(response.data),console.log(response.data)}).
    //     then(()=>setMessage(" Displayed All Players  "))



    // }

    useEffect(() => {
       
        PlayerService.getAllPlayer().
            then((response) => { setPlayer(response.data), console.log(response.data) }).
            then(() => setMessage(" Displayed All Players  "))

    },[]);
    return (
        <>
            <h1>Display All The Employees </h1>
            {/* <button onClick={handleClick}>Get</button> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>  <th>PlayerName</th> <th>PlayerRole</th> <th>Team Name</th> <th>Total Matches</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList.map((p) =>
                    (
                        <tr key={p.playerId}>
                            <td>{p.playerId}</td>
                            <td>{p.playerName}</td>
                            <td>{p.role}</td>
                            <td>{p.teamName}</td>
                            <td>{p.totalMatches}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h1>{message}</h1>
        </>
    )
}