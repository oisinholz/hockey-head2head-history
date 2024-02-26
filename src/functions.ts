import data from "./nhlData.json";
import { ITeam, IStandings, IGame } from "./interfaces";
import axios from "axios";

export function getTeams(): ITeam[] {
    const teams: ITeam[] = [];

    const items: Array<IStandings> = data.response[0];

    items.forEach(item => {
        teams.push(item.team);
    })

    // console.log(teams);
    return teams;
}

export function handleClick() {
    axios.get('https://v1.hockey.api-sports.io/standings?league=57&season=2023', {
        headers: {
            'x-rapidapi-key': '4a7b521a87ba35b3644c201ed432b06e'
        }
    })
        .then(res => {
            console.log(res.data.response[0])
        })
        .catch(err => {
            console.log(err)
        })
}

//   export function headToHead(teamA: string, teamB:string) {
//     let result: IGame[] = [];

//     axios.get('https://v1.hockey.api-sports.io/games/h2h?h2h='+teamA+'-'+teamB, {
//         headers:{
//             'x-rapidapi-key':'4a7b521a87ba35b3644c201ed432b06e'
//         }
//     })
//     .then(res =>{
//         let previousGames:IGame[] = res.data.response 

//         for(let i = previousGames.length-1; i >= previousGames.length-7; i--){
//             if(previousGames[i].status.long !== 'Not Started'){
//             // console.log(previousGames[i]);
//             result.push(previousGames[i]);
//         }
//     }

//     })
//     .catch(err =>{
//         console.log(err)
//     })
//     return result;
// }


export async function headToHead(teamA: string, teamB: string): Promise<IGame[]> {
    try {
        const response = await axios.get(`https://v1.hockey.api-sports.io/games/h2h?h2h=${teamA}-${teamB}`, {
            headers: {
                'x-rapidapi-key': '4a7b521a87ba35b3644c201ed432b06e'
            }
        });

        const previousGames: IGame[] = response.data.response;

        let result: IGame[] = [];

        for (let i = previousGames.length - 1; i >= previousGames.length - 7; i--) {
            if (previousGames[i].status.long !== 'Not Started') {
                result.push(previousGames[i]);
            }
        }

        return result;
    } catch (error) {
        console.error('Error fetching head-to-head data:', error);
        throw error; 
    }
}