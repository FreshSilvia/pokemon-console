const inquirer = require('inquirer');
const playGame = () => {
    inquirer

        .prompt([{   //pass questions in here
            type: 'input',
            message: 'What is you trainer name?',
            name: 'trainerName'
        },

        {
            type: 'password',
            message: 'Set your password',
            name: 'password'
        },
        {
            type: 'list',
            message: 'Choose your starter pokemon', 
            choices: ['Chikorita', 'Cyndaquil', 'Totodile'],
            name: 'pokemon' 
        }
    ])
    .then(res => {
        inquirer

            .prompt([{
                type: 'input',
                message: `What would you like to name you ${res.pokemon}`,
                name: 'pokemonName'
            }]).then (inqRes => {
                let trainerName = res.trainerName;
                let pokemonType = res.pokemon;
                let pokemonName = inqRes.pokemonName;
                console.log(`Welcome ${trainerName}`)
                console.log(`Your ${pokemonType}, ${pokemonName} is ready for battle!`)
                console.log('A wild caterpie appeared!');
                console.log(`${trainerName}, called ${pokemonName}`);
                let pokemon_hp = 50;
                let cat_hp = 30;
                const battleSequence = (pokemon_hp, cat_hp, pokemonName) => {
                    
                    inquirer
                        .prompt([{
                            type: 'list',
                            message: `What move do you want to light em up with?`,
                            choices: ['Bite', 'Tackle', 'Glare', 'DripStomp'],
                            name: 'attack'
                        }])
                        .then(res => {
                            //-= is Subtracting random between 1-10 from our health points.
                            pokemon_hp -= Math.trunc(Math.random() * 10);
                            cat_hp -= Math.trunc(Math.random() * 10);
                            console.log(`${pokemonName}, used ${res.attack}`);
                            console.log(`Caterpie has ${cat_hp} health points remaining`);
                            console.log('Caterpie used Tackle');
                            console.log(`${pokemonName}, has ${pokemon_hp} health points remaining.`);
                            if (pokemon_hp <= 0) {
                                console.log(`${pokemonName} has fainted, you better leave ${pokemonName} and dip!`)
                            } else if (cat_hp <= 0) {
                                console.log('caterpie lost, you won!!');
                            } else {
                                battleSequence(pokemon_hp,cat_hp, pokemonName);
                            }
                        })
                };
                battleSequence(pokemon_hp,cat_hp, pokemonName);
            })
    })

}
playGame();// Have to call the function to console log.
//When console logging node( node filename. js)
