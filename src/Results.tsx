import React from 'react';
import { IGame, ITeam, IStandings } from './interfaces'; 
import { getTeams, headToHead } from './functions';

type TeamProps = {
    optionA: string,
    optionB: string

}

const Results = (props: TeamProps) => {

const teamList:ITeam[] = getTeams()
const previousGames: IGame[] = headToHead((props.optionA), (props.optionB))

const teamA = teamList.find((team) => team.id === parseInt(props.optionA));
const teamB = teamList.find((team) => team.id === parseInt(props.optionB));

console.log("teamA.id " + (props.optionA))
console.log("teamB.id " + (props.optionB))

console.log("teamA.name is "+ teamA?.name);
console.log("teamB.name is "+ teamB?.name);
//using ? option chaining to check if variable is undefined or not

console.log(previousGames);

  return (
    <div className="results">
    

        <table>
            <thead>
                <tr>
                    <td><img src={teamA?.logo} alt={teamA?.name || "unable to fetch name"}/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><img src={teamB?.logo} alt={teamB?.name || "unable to fetch name"}/></td>
                </tr>
                
                <tr>
                    <td>{teamA?.name || "unable to fetch name"}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{teamB?.name || "unable to fetch name"}</td>
                </tr>

                {previousGames.slice(0,5).map((game) => (
                    <tr key={game.id}>
                         <td>{teamA?.id !== game.teams.away.id ? game.scores.home : game.scores.away}</td>
                         <td>{teamA?.id !== game.teams.away.id ? "Home" : "Away"}</td>
                         <td>{game.date}</td>
                         <td>{teamB?.id !== game.teams.away.id ? "Home" : "Away"}</td>
                         <td>{teamB?.id !== game.teams.away.id ? game.scores.away : game.scores.home}</td>
                    </tr>
                 ))}
            </thead>
        </table>
    </div>
  );
};

export default Results;