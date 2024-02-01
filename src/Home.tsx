import { getTeams,headToHead } from "./functions";
import { useState, useEffect } from "react";
import { ITeam } from "./interfaces";

const Home = () => {

    const [teams, setTeams] = useState<ITeam[]>([]);
    
    const sortedTeams = [...teams].sort((a, b) => a.name.localeCompare(b.name));
    //spread operator creates a new array with the same elements as "teams"

    const [optionA, setOptionA] = useState<string>('');
    const [optionB, setOptionB] = useState<string>('');
    
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

        const handleSelectChange = (value: string, selectNumber: number) => {
            if (selectNumber === 1) {
              setOptionA(value);
              // setTeams((prevTeams) => prevTeams.filter((team) => team.name !== value));
            } else if (selectNumber === 2) {
              setOptionB(value);
              // setTeams((prevTeams) => prevTeams.filter((team) => team.name !== value));
            }
          };

          const getFilteredTeams = (selectedValue: string) => {
            return teams.filter((team) => team.name !== selectedValue);
          };
    


    return ( 
        <div className="home">
            <h2>Select teams</h2>
            
            <select
            required 
            defaultValue={'DEFAULT'}
            name="leftTeam" 
            id="leftTeam"
            value={optionA}
            onChange={(e) => {
              handleSelectChange(e.target.value, 1)
              if(e.target.value === optionB){
                alert('Please choose two different teams');
                setOptionA('');
              }}}
            // onChange={(e) => {
            //     const selectedValue = e.target.value;
            //     setOptionA(selectedValue);
            //     setTeams((prevTeams) => getFilteredTeams(selectedValue));
            //   }}
            >
                <option value='' disabled >Please choose an option</option>
                {sortedTeams.map((option) => (
                    <option key={option.id}
                    value={option.id}>
                    {option.name}
                </option>
                ))}
            </select>
            
            <p>VS</p>

            <select
            required 
            defaultValue={'DEFAULT'}
            name="rightTeam" 
            id="rightTeam"
            value={optionB}
            onChange={(e) => {
              handleSelectChange(e.target.value, 2)
              if(e.target.value === optionA){
                alert('Please choose two different teams');
                setOptionB('');
              }}}
            // onChange={(e) => {
            //     const selectedValue = e.target.value;
            //     setOptionB(selectedValue);
            //     setTeams((prevTeams) => getFilteredTeams(selectedValue));
            //   }}
            >
                <option value="" disabled>Please choose an option</option>
                {sortedTeams.map((option) => (
                    <option key={option.id}
                    value={option.id}>
                    {option.name}
                </option>
                ))}
            </select>


            {/* <button onClick={() => console.log(optionA + " v " + optionB)}>Go!</button> */}
            <button onClick={()=> headToHead(optionA, optionB)}>Go!</button>
        </div>
     );
}
 
export default Home;

