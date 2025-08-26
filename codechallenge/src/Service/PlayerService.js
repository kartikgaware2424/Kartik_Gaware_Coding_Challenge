import axios from "axios";

const Base_Url="http://localhost:8080/api/player";
class PlayerService
{
    getAllPlayer()
    {
        return axios.get(`${Base_Url}/getAll`)

    }
    addPlayer(player)
    {
         return axios.post(`${Base_Url}/add`,player)

    }

    updatePlayer(id,player)
    {
         return axios.put(`${Base_Url}/update/${id}`,player)

    }
    deletePlayer(id)
    {
        return axios.delete(`${Base_Url}/delete/${id}`);

    }

}
export default new PlayerService();