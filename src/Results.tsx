import React, { useState, useEffect } from 'react';
import { IGame, ITeam } from './interfaces';
import { getTeams, headToHead } from './functions';

type TeamProps = {
    optionA: string,
    optionB: string
}

const Results: React.FC<TeamProps> = (props: TeamProps) => {
    const [teamA, setTeamA] = useState<ITeam | null>(null);
    const [teamB, setTeamB] = useState<ITeam | null>(null);
    const [previousGames, setPreviousGames] = useState<IGame[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    //initialise variables. Variables can be either type. Init as null and changed below

    useEffect(() => {
        const fetchData = async () => {
            try {
                const teamList: ITeam[] = getTeams();
                const games: IGame[] = await headToHead(props.optionA, props.optionB);
                const teamAData = teamList.find((team) => team.id === parseInt(props.optionA))?? null;
                const teamBData = teamList.find((team) => team.id === parseInt(props.optionB))?? null;

                setTeamA(teamAData);
                setTeamB(teamBData);
                setPreviousGames(games);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('There was a problem loading the requested data');
            }
        };

        fetchData();
    }, [props.optionA, props.optionB]);

    if (error) {
        return (
            <div className="resultError">
                <h3>{error}</h3>
            </div>
        );
    }

        console.log("teamA.id " + (props.optionA))
        console.log("teamB.id " + (props.optionB))

        console.log("teamA.name is " + teamA?.name);
        console.log("teamB.name is " + teamB?.name);
        //using ? option chaining to check if variable is undefined or not

        console.log(previousGames);

    return (
                    <div className="results">
        
        
                        <table>
                            <thead>
                                <tr>
                                    <td><img src={teamA?.logo} alt={teamA?.name || "unable to fetch name"} /></td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td><img src={teamB?.logo} alt={teamB?.name || "unable to fetch name"} /></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{teamA?.name || "unable to fetch name"}</td>
                                    <td></td>
                                    <td></td>
                                    <td></td>
                                    <td>{teamB?.name || "unable to fetch name"}</td>
                                </tr>
        
                                {previousGames && previousGames.slice(0, 5).map((game) => (
                                    <tr key={game.id}>
                                        <td>{teamA?.id !== game.teams.away.id ? game.scores.home : game.scores.away}</td>
                                        <td>{teamA?.id !== game.teams.away.id ? "Home" : "Away"}</td>
                                        <td>{game.date.slice(0,10)}</td>
                                        <td>{teamB?.id !== game.teams.away.id ? "Home" : "Away"}</td>
                                        <td>{teamB?.id !== game.teams.away.id ? game.scores.home : game.scores.away}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
        };
        
        export default Results;
