import axios from 'axios';

const candidateId = 'e7b57a8b-9942-40b0-bb88-b467d1d0707d';
const url = 'https://challenge.crossmint.io/api/map/' + candidateId + '/goal';
const headers = {
    'Content-Type': 'application/json',
};

export const getGoal = async () => {
    console.log("Getting Megaverse..");
    const response = await axios.get(url,{headers})
    .catch(function (error) {
        console.log(error);
    });
    console.log("Megaverse Obtained!");
    return response.data.goal;
}