// function play(){
//      const homeSection = document.getElementById('home-screen');
//      homeSection.classList.add('hidden');

//      const playgroundSection = document.getElementById('play-ground');
//      playgroundSection.classList.remove('hidden');

// }
 function continiueGame(){
   const alphabet =getRandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setbackGroundColorbyId(alphabet);
 }
function play(){
     hideelmentbyId('home-screen');
     showElementbyId('play-ground');
     continiueGame()
}