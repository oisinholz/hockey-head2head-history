import axios from "axios";
import { getTeams } from "./functions";

const Home = () => {

    const handleClick = () =>{
        axios.get('https://v1.hockey.api-sports.io/standings?league=57&season=2023', {
            headers:{
                'x-rapidapi-key':'4a7b521a87ba35b3644c201ed432b06e'
            }
        })
        .then(res =>{
            console.log(res.data.response[0])
        })
        .catch(err =>{
            console.log(err)
        })
    }

    return ( 
        <div className="home">
            <button onClick={getTeams}>Click me</button>
        </div>
     );
}
 
export default Home;

