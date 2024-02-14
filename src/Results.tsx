import React from 'react';
import { IGame, ITeam, IStandings } from './interfaces'; 
import { getTeams } from './functions';

type TeamProps = {
    optionA: string,
    optionB: string

}

const Results = (props: TeamProps) => {

const teamList:ITeam[] = getTeams()

const teamA = teamList.find((team) => team.id === parseInt(props.optionA));
const teamB = teamList.find((team) => team.id === parseInt(props.optionB));

console.log("teamA " + (props.optionA))
console.log("teamB " + (props.optionB))

console.log("teamA is "+ teamA?.name);
console.log("teamB is "+ teamB?.name);
//using ? option chaining to check if variable is undefined or not

  return (
    <div className="results">
    

        <table>
            <thead>
                <tr>
                    <td><img src={teamA?.logo} alt={teamA?.name}/></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><img src={teamB?.logo} alt={teamB?.name}/></td>
                </tr>
                
                <tr>
                    <td>{teamA?.name}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{teamB?.name}</td>
                </tr>

                <tr>previousGames[i].scores</tr>
            </thead>
        </table>
    </div>
  );
};

export default Results;