import { getTeams } from "./functions";
import { useState } from "react";
import { useEffect } from "react";
import { ITeam } from "./interfaces";

const Home = () => {

    const [teams, setTeams] = useState<ITeam[]>([]);

    const [optionA, setOptionA] = useState('');
    const [optionB, setOptionB] = useState('');
    
    useEffect(() => {
        let ignore = false;
        const fetch = async () => {
          if (!ignore) {
            const teamsData = getTeams();
            setTeams(teamsData);
          }
        };
        fetch();
        return () => {
          ignore = true;
        };}, []);
    
        // const checkSelectOptions = (e:any, i:number) => {
        //     e.preventDefault();
        //     if (i === 1)
        //       setOptionB(
        //         teams.filter((entry) => entry.name !== e.target.value)
        //       );
        //     else if (i === 2)
        //       setOptionA(
        //         teams.filter((entry) => entry.name !== e.target.value)
        //       );
        //   };
    


    return ( 
        <div className="home">
            <h2>Select teams</h2>
            
            <select
            required 
            name="leftTeam" 
            id="leftTeam"
            value={optionA}
            onChange={(e) => {
                setOptionA(e.target.value);
            }}
            // onChange={(e) => {
            //     checkSelectOptions(e, 1);
            //   }}
            >
                <option value="" disabled selected>Please choose an option</option>
                {teams.map((option, optionIndex) => (
                    <option key={optionIndex}
                    value={option.name}>
                    {option.name}
                </option>
                ))}
            </select>
            
            <select
            required 
            name="rightTeam" 
            id="rightTeam"
            value={optionB}
            onChange={(e) => {
                setOptionB(e.target.value);
            }}
            // onChange={(e) => {
            //     checkSelectOptions(e, 2);
            //   }}
            >
                <option value="" disabled selected>Please choose an option</option>
                {teams.map((option, optionIndex) => (
                    <option key={optionIndex}
                    value={option.name}>
                    {option.name}
                </option>
                ))}
            </select>


            <button onClick={getTeams}>Go!</button>
        </div>
     );
}
 
export default Home;

