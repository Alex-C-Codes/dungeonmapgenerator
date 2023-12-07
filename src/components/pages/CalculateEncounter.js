import React, { useState } from "react";

// reference: https://kastark.co.uk/rpgs/encounter-calculator-5th/

export default function Content() {

    var easyXP;
    var mediumXP;
    var hardXP;
    var deadlyXP;

    // dungeon theme variables
    const [numberOfChar, setCharNumValue] = useState('');
    const [charLevel, setCharLevelValue] = useState('');

    function calculateXP() {

        var easy;
        var medium;
        var hard;
        var deadly;

        var charLevelInt = parseInt(charLevel);

        if (charLevelInt === 1) {
            easy = 25;
            medium = 50;
            hard = 75;
            deadly = 100;
        } else if (charLevelInt === 2) {
            easy = 50;
            medium = 100;
            hard = 150;
            deadly = 200;
        } else if (charLevelInt === 3) {
            easy = 75;
            medium = 150;
            hard = 225;
            deadly = 400;
        } else if (charLevelInt === 4) {
            easy = 125;
            medium = 250;
            hard = 375;
            deadly = 500;
        } else if (charLevelInt === 5) {
            easy = 250;
            medium = 500;
            hard = 750;
            deadly = 1100;
        } else if (charLevelInt === 6) {
            easy = 300;
            medium = 600;
            hard = 900;
            deadly = 1400;
        } else if (charLevelInt === 7) {
            easy = 350;
            medium = 750;
            hard = 1100;
            deadly = 1700;
        } else if (charLevelInt === 8) {
            easy = 450;
            medium = 900;
            hard = 1400;
            deadly = 2100;
        } else if (charLevelInt === 9) {
            easy = 550;
            medium = 1100;
            hard = 1600;
            deadly = 2400;
        } else if (charLevelInt === 10) {
            easy = 600;
            medium = 1200;
            hard = 1900;
            deadly = 2800;
        } else if (charLevelInt === 11) {
            easy = 800;
            medium = 1600;
            hard = 2400;
            deadly = 3600;
        } else if (charLevelInt === 12) {
            easy = 1000;
            medium = 2000;
            hard = 3000;
            deadly = 4500;
        } else if (charLevelInt === 13) {
            easy = 1100;
            medium = 2200;
            hard = 3400;
            deadly = 5100;
        } else if (charLevelInt === 14) {
            easy = 1250;
            medium = 2500;
            hard = 3800;
            deadly = 5700;
        } else if (charLevelInt === 15) {
            easy = 1400;
            medium = 2800;
            hard = 4300;
            deadly = 6400;
        } else if (charLevelInt === 16) {
            easy = 1600;
            medium = 3200;
            hard = 4800;
            deadly = 7200;
        } else if (charLevelInt === 17) {
            easy = 2000;
            medium = 3900;
            hard = 5900;
            deadly = 8800;
        } else if (charLevelInt === 18) {
            easy = 2100;
            medium = 4200;
            hard = 6300;
            deadly = 9500;
        } else if (charLevelInt === 19) {
            easy = 2400;
            medium = 5700;
            hard = 7300;
            deadly = 10900;
        } else if (charLevelInt === 20) {
            easy = 2800;
            medium = 5700;
            hard = 8500;
            deadly = 12700;
        } else {
            // easy = '';
            // medium = '';
            // hard = '';
            // deadly = '';
        }

        easyXP = easy * numberOfChar;
        mediumXP = medium * numberOfChar;
        hardXP = hard * numberOfChar;
        deadlyXP = deadly * numberOfChar;

        // console.log(difficultyArr);

        // return xp;
        // return difficultyArr;
    }

    function showDiv() {
        document.getElementById('welcomeDiv').style.display = "block";
    }

    function addRow() {
        console.log('hello');
    }
    
    return (
        <div className="content-page">
            <h2>Calculate Encouter Difficulty</h2>
            <div>
                <form>
                    <label>Number of Characters</label>
                    <input 
                        type="text"
                        id="characterNumber"
                        name="characterNumber"
                        value={numberOfChar}
                        onChange={(event) => setCharNumValue(event.target.value)}
                    /><br></br>
                    <label>Character Level</label>
                    <input
                        type="text"
                        id="character"
                        name="characterLevel"
                        value={charLevel}
                        onChange={(event) => setCharLevelValue(event.target.value)}
                    /><br></br>
                </form>

                <button type="submit" name="addRow" value="AddRow" onClick={addRow()}>Add Row</button>

                <button type="submit" name="calculate" value="Calculate" onClick={showDiv}>Calculate</button>

                <div id="welcomeDiv"  style={{display:'none'}} className="answer_list" >
                    {calculateXP()}
                    <ul>
                        <li>Easy: {easyXP} XP</li>
                        <li>Medium: {mediumXP} XP</li>
                        <li>Hard: {hardXP} XP</li>
                        <li>Deadly: {deadlyXP} XP</li>
                    </ul>
                </div>

            </div>

            <br></br>

        </div>
    )
}