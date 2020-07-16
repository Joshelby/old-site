const doorImage1 = document.getElementById("door1");
const doorImage2 = document.getElementById("door2");
const doorImage3 = document.getElementById("door3");
const streakTag = document.getElementById("streak")
numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
startButton = document.getElementById("start")
currentlyPlaying = true
streak = 0

const isBot = door => door.src === botDoorPath

const isClicked = door => !door.src === closedDoorPath

const playDoor = (door) => {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver()
  }
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = spaceDoorPath
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath
    openDoor2 = botDoorPath
    openDoor3 = spaceDoorPath
  } else if (choreDoor === 2) {
    openDoor1 = spaceDoorPath
    openDoor2 = beachDoorPath
    openDoor3 = botDoorPath
  }
}

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"

doorImage1.onclick = () => {
  if (!isClicked(doorImage1) && currentlyPlaying === true) {
    doorImage1.src = openDoor1
    playDoor(doorImage1)
  }
}

doorImage2.onclick = () => {
  if (!isClicked(doorImage2) && currentlyPlaying === true) {
    doorImage2.src = openDoor2
    playDoor(doorImage2)
  }
}

doorImage3.onclick = () => {
  if (!isClicked(doorImage3) && currentlyPlaying === true) {
    doorImage3.src = openDoor3
    playDoor(doorImage3)
  }
}

startButton.onclick = () => {
  if (currentlyPlaying === false)
    startRound()
}

const startRound = () => {
  doorImage1.src = closedDoorPath
  doorImage2.src = closedDoorPath
  doorImage3.src = closedDoorPath
  numClosedDoors = 3
  startButton.innerHTML = "Good luck!"
  currentlyPlaying = true
  randomChoreDoorGenerator()
}

const gameOver = (status) => {
  if (status === "win") {
    streak++
    streakTag.innerHTML = streak
    startButton.innerHTML = "You win! Play again?"
  } else {
    streak = 0
    streakTag.innerHTML = streak
    startButton.innerHTML = "Game over! Play again?"
  }
  currentlyPlaying = false
}

startRound()