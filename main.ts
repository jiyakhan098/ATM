import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 4523;

let pinAnswer = await inquirer.prompt(
    [
        {
            name : "pin",
            message : "Enter your pin",
            type : "number"

        }
    ]
);
if(pinAnswer.pin === myPin){
    console.log("Correct pin code!");

let operationAns = await inquirer.prompt(
    [
        {
            name :"operation",
            message :"please select option",
            type : "list",
            choices :["withdraw" , "checkbalance","fast cash"]
        }
    ]
)
if (operationAns.operation === "withdraw"){
    let amountAns = await inquirer.prompt(
        [
            {
                name : "amount",
                message : "enter your amount",
                type : "number",
            }
        ]
    )
    if(amountAns.amount < 50000){
        myBalance -= amountAns.amount,
    console.log("Your ramaining balance is:" + myBalance);
}
    
     else if (amountAns.amount > 50000){ 
    console.log("Insuficient balance");
}
    }
else if (operationAns.operation === "checkbalance"){ 
    console.log(`Your balance is:${myBalance}`)}
    
    else if (operationAns.operation === "fast cash"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name : "amount",
                    message : "enter your amount",
                    type : "list",
                    choices : ["5000" ,"10000","15000"]
                }
            ]
        )
        myBalance -= amountAns.amount;
        console.log("Your ramaining balance is:" + myBalance);
    }
}
else {
console.log("Incorrect pin code.")
}


