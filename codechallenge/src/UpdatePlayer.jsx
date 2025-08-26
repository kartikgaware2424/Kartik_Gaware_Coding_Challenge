import { useState } from "react";
import axios from "axios";
import PlayerService from "./Service/PlayerService";
export default function UpdatePlayer()
{
    const [playerList, setPlayer] = useState({
            playerId: "",
            playerName: "",
            jerseyNumber: "",
            role: "",
            totalMatches: "",
            teamName: "",
            state: "",
            description: ""
        });

        
        const[message,setMessage]=useState("");
        const handleChange=(e)=>
        {
            setPlayer({...playerList,[e.target.name]:e.target.value})
        }
    
        const handleSubmit=(e)=>{
            e.preventDefault();
            PlayerService.updatePlayer(playerList.playerId,playerList).
            then(()=>setMessage("Player Updated Successfully")).
            catch(err=>setMessage("Error occured while Update",err))
            
            
        }
    
    
        return (
            <>
                <div className="container mt-10">
                    <h2 className="text-center mb-4">Update Player</h2>
    
                    <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
                        <div className="mb-3">
                            <label className="form-label">Enter Id</label>
                            <input type="text" className="form-control" name="playerId" value={playerList.playerId} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter playerName</label>
                            <input type="text" className="form-control" name="playerName" value={playerList.playerName} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter jerseyNumber</label>
                            <input type="text" className="form-control" name="jerseyNumber" value={playerList.jerseyNumber} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Enter role</label>
                            <input type="text" className="form-control" name="role" value={playerList.role} onChange={handleChange} required />
                        </div>
    
                        <div className="mb">
                            <label htmlFor="" className="form-label">Enter total Matches</label>
                            <input type="text" className="form-control" name="totalMatches" value={playerList.totalMatches} onChange={handleChange} required/>
                        </div>
    
                         <div className="mb">
                            <label htmlFor="" className="form-label">Enter team Name</label>
                            <input type="text" className="form-control" name="teamName" value={playerList.teamName} onChange={handleChange} required/>
                        </div>
    
                        <div className="mb">
                            <label htmlFor="" className="form-label">Enter State </label>
                            <input type="text" className="form-control" name="state" value={playerList.state} onChange={handleChange} required/>
                        </div>
    
                        <div className="mb">
                            <label htmlFor="" className="form-label">Enter description </label>
                            <input type="text" className="form-control" name="description" value={playerList.description} onChange={handleChange} required/>
                        </div>
                        <br />
                        <button type="submit">Submit</button>
                        
    
                    </form>
                    <h1>{message}</h1>
    
                </div>
            </>
        )
}