import data from "./nhlData.json";
import { ITeam } from "./interfaces";
import { IStandings } from "./interfaces";

export function getTeams(): ITeam[]{
    const teams: ITeam[] = [];

    const items: Array<IStandings> = data.response[0];

    items.forEach(item => {
        teams.push(item.team);
    })

    console.log(teams);
    return teams;
  }