const outName = document.getElementById("name");
const sleepGoalHours = document.getElementById("goal");
const hours = document.getElementById("hours")


outName.innerHTML= localStorage.getItem("Name");
sleepGoalHours.innerHTML= localStorage.getItem("goalz");
hours.innerHTML= localStorage.getItem("hoursTracked")


const moreSleep=parseInt(localStorage.getItem("hoursTracked"));
const goalHours=parseInt(localStorage.getItem("goalz"));

console.log(moreSleep);

if (moreSleep<8 ){
  document.getElementById('moreSleep').innerHTML=("Looks like you need more sleep");
  document.getElementById('moreSleepTip').innerHTML=("Have you tried counting sheep?");
}else {
  document.getElementById('moreSleep').innerHTML=("Looks like you are getting enough sleep");
  document.getElementById('moreSleepTip').innerHTML=("Make sure you keep it up on a regular basis");

};

if (moreSleep==goalHours){
  document.getElementById('meetGoal').innerHTML=("Congratulations!");
  document.getElementById('meetGoalMsg').innerHTML=("You have met your goals!");
} else {
  document.getElementById('meetGoal').innerHTML=("Tip of the day:");
  document.getElementById('meetGoalMsg').innerHTML=("Try to limit your exercise before bed");

}
