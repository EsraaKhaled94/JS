var validInput= function (choice){
    if (choice==="rock"){
        return true;
    }
    else if (choice==="paper"){
        return true;
    }
    else if (choice==="rope"){
        return true;
    }
    else if (choice==="scissors"){
        return true;
    }
    else {
        return false;
    }
}
var userChoice = prompt("Do you choose rock, paper , scissors or rope?");
while (!validInput(userChoice)){
    confirm ("Not valid option!!");
    userChoice = prompt("Do you choose rock, paper , scissors or rope?");
}
var computerChoice = Math.random();
if (computerChoice < 0.26) {
	computerChoice = "rock";
} else if(computerChoice <= 0.51) {
	computerChoice = "paper";
} else if (computerChoice <= 0.67) {
	computerChoice = "scissors";
}else {
    computerChoice ="rope";
} 
confirm("Computer: " + computerChoice);

var compare=function (choice1,choice2)
{
    if (choice1==choice2){
        confirm ("Can you choose again?!");
        userChoice = prompt("Do you choose rock, paper ,              scissors or rope?");
        while (!validInput(userChoice))
        {
            confirm ("Not valid option!!");
            userChoice = prompt("Do you choose rock, paper ,              scissors or rope?");
        }
        var computerChoice = Math.random();
        if (computerChoice < 0.26) {
    	    computerChoice = "rock";
        } else if(computerChoice <= 0.51) {
    	    computerChoice = "paper";
        } else if (computerChoice <= 0.67) {
    	    computerChoice = "scissors";
        }else {
            computerChoice ="rope";
        } 
        confirm("Computer: " + computerChoice);
        compare(userChoice,computerChoice)
    }
    if (choice1==="rock"){
        if (choice2 ==="scissors"){
            return "rock wins";
        }
        else if (choice2==="rope"){
            return "rope wins";
        }
        else  {
            return "paper wins";
        }
    }
    if (choice1==="paper"){
        if (choice2 ==="scissors"){
            return "scissors wins"
        }
        else if (choice2==="rope"){
            return "rope wins";
        }
        else  {
            return "paper wins";
        }
    }
    if (choice1==="scissors"){
        if (choice2 ==="paper"){
            return "scissors wins"
        }
        else if (choice2==="rope"){
            return "scissors wins";
        }
        else  {
            return "rock wins";
        }
    }
    if (choice1==="rope"){
        if (choice2 ==="paper"){
            return "rope wins"
        }
        else if (choice2==="scissors"){
            return "scissors wins";
        }
        else  {
            return "rock wins";
        }
    }
};
confirm (compare (userChoice,computerChoice))