import React from "react";
import RandomEncounter from './RandomEncounter';
import RandomDungeon from './RandomDungeon';
import CalculateEncounter from './CalculateEncounter';

export default function Content() {
    const entranceRooms = [
        {
            id: 1,
            roomType: 'entrance',
            description: 'locked door',
            attributes: 'DC 15 STR, DC 10 DEX to unlock'
        }
    ]

    function showDiv() {
        document.getElementById('welcomeDiv').style.display = "block";
        // console.log(dungeonTheme);
    }

    // dungeon theme variables
    const [value, setValue] = React.useState('forest');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    // var dungeonTheme;

    return (
        <div className="content-page">
            {/* <h2>Dungeon Room Types</h2>
            <ul>
                <li>Entrance</li>
                <ul>
                    <li>Locked Door DC 10</li>
                    <li>Mouth of Cave</li>
                </ul>
                <li>Puzzle</li>
                <li>Setback</li>
                <li>Boss</li>
                <li>Reward</li>
            </ul> */}

            <CalculateEncounter />
            {/* <RandomEncounter />
            <RandomDungeon /> */}

        </div>
    )
}