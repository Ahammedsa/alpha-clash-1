function hideelmentbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
};
function setbackGroundColorbyId(elementid){
    const element =  document.getElementById(elementid);
    element.classList.add('bg-orange-400');
}
function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'; 
    const alphabets = alphabetString.split('');


    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;

    
}
