var easyNum = -1;
var mediumNum = -1;
var hardNum = -1;
var NumberToGuess = -1;
var Count = 0;
var Theme1Button = false;
var Theme2Button = false;
var Theme3Button = false;

function DiffEasy() {
  var DifficultyReminder = document.getElementById("DifficultyReminder");
  var DifficultySelected = document.getElementById("DifficultySelected");

  easyNum = (Math.floor(Math.random()*10)+1);
  NumberToGuess = easyNum;
  DifficultySelected.innerHTML = "Difficulty Selected: Easy"
  DifficultyReminder.innerHTML = "Guess a number bertween (including) 1 - 10";

}

function DiffMedium(){
  var DifficultyReminder = document.getElementById("DifficultyReminder");
  var DifficultySelected = document.getElementById("DifficultySelected");
  mediumNum = (Math.floor(Math.random()*50)+1);
  NumberToGuess = mediumNum;
  DifficultySelected.innerHTML = "Difficulty Selected: Medium"
  DifficultyReminder.innerHTML = "Guess a number bertween (including) 1 - 50";

}

function DiffHard(){
  var DifficultyReminder = document.getElementById("DifficultyReminder");
  var DifficultySelected = document.getElementById("DifficultySelected");

  hardNum = (Math.floor(Math.random()*100)+1);
  NumberToGuess = hardNum;
  DifficultySelected.innerHTML = "Difficulty Selected: Hard"
  DifficultyReminder.innerHTML = "Guess a number bertween (including) 1 - 100";


}

function Theme1(){
  var ThemeSelected = document.getElementById("ThemeSelected");

  Theme1Button = true;
  Theme2Button = false;
  Theme3Button = false;

  ThemeSelected.innerHTML = "Theme 1 Selected";
}

function Theme2(){
  var ThemeSelected = document.getElementById("ThemeSelected");

  Theme2Button = true;
  Theme1Button = false;
  Theme3Button = false

  ThemeSelected.innerHTML = "Theme 2 Selected";

}

function Theme3(){
  var ThemeSelected = document.getElementById("ThemeSelected");

  Theme3Button = true;
  Theme1Button = false;
  Theme2Button = false;

  ThemeSelected.innerHTML = "Theme 3 Selected";

}


function StartGame(){
  document.getElementById("TheBox").style.display = "none";  
  document.getElementById("ToHide").style.background = "teal";

  Count = 0

  console.log(NumberToGuess);


  document.getElementById("HiddenUnhidden").style.display = "block" ;

  if (Theme1Button==true){
    document.body.style.background = "url('StarryNight.jpg')" ;
  }
  if(Theme2Button==true){
    document.body.style.background = "url('SkylineHigh.jpg')" ;
  }
  if(Theme3Button==true){
    document.body.style.background = "url('SnowyMountain.jpg')" ;
  }
  
}

function Guess(){
  var UserNumber = document.getElementById("UserGuessNumber").value;
  var UserName = document.getElementById("UserName").value;
  document.getElementById("PlayAgainButton");
  console.log(UserNumber);
  var Result = document.getElementById("Result");
  var NumberOfTries = document.getElementById("NumberofTries");

  Count = Count + 1;

  NumberOfTries.innerHTML = "Number of Tries: " + Count;
  
  if(UserNumber==NumberToGuess){
    Result.innerHTML = UserName + " WOW! Good Guess! Congratulations! You are Correct!";
    PlayAgainButton.style.display = "block";
  }else if(UserNumber>NumberToGuess){
    Result.innerHTML = UserName + " are you living in the clouds? That number is high. \n <br> Guess Agian...";
  }else if(UserNumber<NumberToGuess){
    Result.innerHTML = UserName + " are you a kid and dont know how to count bigger numbers? That number is low. \n  <br> Guess Agian...";
  }

}

function PlayAgain(){
  document.getElementById("TheBox").style.display = "block"; 
  document.getElementById("HiddenUnhidden").style.display = "none" ;
  document.body.style.background = "none" ;
  document.getElementById("ToHide").style.backgroundColor="lightblue";
  document.body.style.backgroundColor = "lightblue";
  document.getElementById("Result").innerHTML = " ";
  document.getElementById("PlayAgainButton").style.display = "none";
  Count = 0;
  
  document.getElementById("NumberofTries").innerHTML = "Number of Tries: " + Count;
}

