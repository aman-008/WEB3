// Write a function called canVote that returns true or false if the age of a user is > 18

function canVote(age){
    if (age >= 18){
        return true;
    }
    else{
        return false;
    }
}

let voter = canVote(18);

if (voter == true){
    console.log("able to vote");
}
else{
    console.log("not able to vote");
}


// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function oddEven(num){
    if (num%2==0){
        console.log("Even.");
    }
    else{
        console.log("Odd.")
    }
}

oddEven(2);