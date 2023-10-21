// break and continue statement

const scores = [25, 30, 0, 86, 100, 20, 5];
for(let i = 0; i < scores.length; i++){
    if(scores[i] === 0){
        continue;
    }
    console.log("Your score is: ", scores[i]);
    if(scores[i] === 100){
        console.log("Congratulations!! You have reached the top score");
        break;
    }
}