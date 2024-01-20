import data from "./nhlData.json";
import { ITeam } from "./interfaces";
import { IStandings } from "./interfaces";
import axios from "axios";

export function getTeams(): ITeam[]{
    const teams: ITeam[] = [];

    const items: Array<IStandings> = data.response[0];

    items.forEach(item => {
        teams.push(item.team);
    })

    console.log(teams);
    return teams;
  }

  export function handleClick() {
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