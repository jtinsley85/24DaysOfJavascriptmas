/*
DESCRIPTION:
In this challenge a casino has asked you to make an online dice that works just like 
it wold in real life. Using the pre-made dice face that represents ‘one’, make the 
faces for ‘two’, ‘three’, ‘four’, ‘five’ and ‘six’. Now when the users clicks the 
dice on the screen the dice is expected to show one of the faces randomly.

event listeners, Math.random()

*/

// cache some DOM
const faces = document.querySelectorAll('.dice');
const currentFace = document.querySelector('.dice:not(.hide)');
const currentFaceNumDisplay = document.querySelector('#currentFaceNum');
// cache some other stuff
const faceList = [...faces];
const faceListLen = faceList.length;
const idxOfCurrentFace = faceList.indexOf(currentFace);
let currentFaceNum;

// build some helper functions
const setCurrentFaceNumDisplay = (value) => {
    currentFaceNum = value
    currentFaceNumDisplay.innerHTML = `${currentFaceNum}`
}

const getNextRandomFaceIndex = (arryLength, exclude) => {
    if (exclude === -1) {
        return Math.floor(Math.random() * arryLength);
    }
    
    let randomIdx = null;  //an integer
    while(randomIdx === null || randomIdx === exclude){
        randomIdx = Math.floor(Math.random() * arryLength);
    }
    return randomIdx;
}

const rollTheDice = () => {
    // re-cache some DOM
    const currentFace = document.querySelector('.dice:not(.hide)');
    const idxOfCurrentFace = faceList.indexOf(currentFace);
    // cache some other stuff
    console.log(currentFaceNum);
    const idx = getNextRandomFaceIndex(faceListLen, idxOfCurrentFace);
    const nextFace = faceList[idx];
    // do the work
    currentFace.classList.toggle('hide')
    nextFace.classList.toggle('hide');
    setCurrentFaceNumDisplay(idx + 1)
};

// handle the click
faceList.forEach((face)=> {
   face.onclick = () => rollTheDice();
});

//make sure current face num display is populated on load. 
setCurrentFaceNumDisplay(idxOfCurrentFace + 1)
/*

DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. Create other 5 dice faces in CSS
3. use eventlisteners on the appropriate div
4. Display dice faces randomly on click

STRETCH GOALS:
- Can you show the number you rolled as a integer along-side the dice face?
- Can you improve the overall design?
*/
