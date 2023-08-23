import readline from 'readline'
import { createPolyanet, deletePolyanets } from './polyanet.js';
import { createCometh, deleteCometh } from './cometh.js';
import { createSoloon, deleteSoloon } from './soloon.js';
import { getGoal } from './goal.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const delay = ms => new Promise(res => setTimeout(res, ms));

const createMegaverse = async () =>{
    console.log("Creating megaverse...");
    const goal = await getGoal()
    var row, column = 0;
    
    for (row = 0; row < goal.length; row++){
        for(column = 0; column< goal.length; column++){
            if(goal[row][column] !== "SPACE"){
                await delay(3000);
            }
            if(goal[row][column].includes("POLYANET")) createPolyanet(row,column);
            if(goal[row][column].includes("COMETH")) createCometh(goal[row][column], row, column);
            if(goal[row][column].includes("SOLOON")) createSoloon(goal[row][column], row, column);
        }
    }
    console.log("Megaverse created successfully!");
    process.exit(0);
}

const deleteMegaverse = async () =>{
    console.log("Deleting megaverse...");
    const goal = await getGoal()
    var row, column = 0;
    for (row = 0; row < 30; row++){
        for(column = 0; column< 30; column++){
            if(goal[row][column] !== "SPACE"){
                await delay(3000);
            }
            if(goal[row][column].includes("POLYANET")) deletePolyanets(row,column);
            if(goal[row][column].includes("COMETH")) deleteCometh(row, column);
            if(goal[row][column].includes("SOLOON")) deleteSoloon(row, column);
        }
    }
    console.log("Megaverse deleted successfully!");
    process.exit(0);
}
rl.question("Create or delete megaverse:  ", async(action) => {
    console.log(action);
    if (action.toLowerCase() === "create") await createMegaverse()
    if (action.toLowerCase() === "delete") await deleteMegaverse()
    if (action.toLowerCase() !== "create" || action.toLowerCase() === "delete"){
        console.log("Wrong Input")
        process.exit(0);
    }
    
});