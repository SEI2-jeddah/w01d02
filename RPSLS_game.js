<script>
let arr = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
var score = 0;

// rounds 
for(i in arr){
let CPU= Math.floor(Math.random() * 100) % 5;
console.log("Round "+ (parseInt(i)+1));

CPU = arr[Math.floor(CPU)]

let  userChoice = prompt("Please enter the value with corresponding number\n1 - Rock\n2 - Paper\n3 - Scissors\n4 - Lizard\n5 - Spock");
userChoice = arr[userChoice - 1]
console.log("UserChoice: "+ userChoice);
console.log("Verses");
console.log("CPU's choice: "+ CPU+"\n");

if(userChoice === CPU) {
  console.log("Its a tie");
}else{
  if(userChoice === "Rock"){
    if(CPU === "Scissors"){
      console.log("You Won!!!");
      ++score;
    }else if(CPU === "Lizard"){
      console.log("You Won!!!");
            ++score;
    }else{
      console.log("Sadly you lost, what a shame... go cry in the corner");
    }
  }
  else if(userChoice === "Scissors"){
    if(CPU === "Paper"){
      console.log("You Won!!!");
      ++score;
    }else if(CPU === "Lizard"){
      console.log("You Won!!!");
      ++score;
    }else{
      console.log("Sadly you lost, what a shame... go cry in the corner");
    }
  }
  else if(userChoice === "Paper"){
    if(CPU === "Rock"){
      console.log("You Won!!!");
      ++score;
    }else if(CPU === "Spock"){
      console.log("You Won!!!");
      ++score;
    }else{
      console.log("Sadly you lost, what a shame... go cry in the corner");
    }
  }
  else if(userChoice === "Lizard"){
    if(CPU === "Spock"){
      console.log("You Won!!!");
      ++score;
    }else if(CPU === "Paper"){
      console.log("You Won!!!");
      ++score;
    }
    else{
      console.log("Sadly you lost, what a shame... go cry in the corner");
    }
  }
  else if(userChoice === "Spock"){
    if(CPU === "Scissors"){
      console.log("You Won!!!");
      ++score;
    }else if(CPU === "Rock"){
      console.log("You Won!!!");
      ++score;
    }
    else{
      console.log("Sadly you lost, what a shame... go cry in the corner");
    }
  }else{
  	console.log("ahhh hello can you like follow instructions -- wrong value");
  }
}
console.log("Total score: "+score);
}
</script>
