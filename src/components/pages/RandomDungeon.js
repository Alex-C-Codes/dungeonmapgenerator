import React from "react";

export default function Content() {

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
            <h2>Dungeon Generator</h2>
            <div>
                <label>
                    {/* <h3>Dungeon Themes</h3> */}
                    Select theme <br></br>
                    <select value={value} onChange={handleChange}>
                        <option value="forest">forest</option>
                        <option value="swamp">swamp</option>
                        <option value="arctic">arctic</option>
                    </select>
                </label>
                {/* <p>Generating {value} dungeon!</p> */}
                {/* {dungeonTheme = value} */}
                <input type="button" name="answer" value="Generate Dungeon" onClick={showDiv} />
                <div id="welcomeDiv"  style={{display:'none'}} className="answer_list" > Here is the {value} dungeon!</div>

            </div>

            <br></br>
            
            {/* <input type="button" name="answer" value="Generate Dungeon" onClick={showDiv} />
            <div id="welcomeDiv"  style={{display:'none'}} className="answer_list" > Here is the {dungeonTheme} dungeon!</div> */}

        </div>
    )
}