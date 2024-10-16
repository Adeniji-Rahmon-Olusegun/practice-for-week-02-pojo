
function countScores(people) {
    // Your code here
    let objectScores = {};

    for (let idx = 0; idx < people.length; idx++) {
        let name = people[idx].name;
        let score = people[idx].score;

        
        if (objectScores[name] === undefined) {
            objectScores[name] = score;
        } else {
            objectScores[name] += score; 
        }
    
    }

    return objectScores;
}

let ppl = [{name: "Anthony", score: 10},
    {name: "Fred", score : 10},
    {name: "Anthony", score: -8},
    {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }


let peeps = [
{name: "Anthony", score: 2},
{name: "Winnie", score: 2},
{name: "Fred", score: 2},
{name: "Winnie", score: 2},
{name: "Fred", score: 2},
{name: "Anthony", score: 2},
{name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
