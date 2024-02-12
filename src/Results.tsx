import React from 'react';
import { IGame } from './interfaces'; 

const Results: React.FC<{ data: IGame[] }> = ({ data }) => {

    let teamA;
    let teamB;


  return (
    <div className="results">
        <table>
            <thead>
                <tr>
                    <td>team1.logo</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>team2.logo</td>
                </tr>
                <tr>
                    <td>team1.name</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>team2.name</td>
                </tr>
                <tr>previousGames[i].scores</tr>
            </thead>
        </table>
    </div>
  );
};

export default Results;