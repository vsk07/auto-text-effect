const containerEl = document.querySelector(".container");

const careers = ["Youtuber", "Web Developer", "Freelancer", "Instructor", "Editor"];

let careerIndex = 1;

let characterIndex = 0;
updateText();

function updateText(){
    characterIndex++;
 containerEl.innerHTML = `<h1>I am ${["A", "E", "I", "O", "U"].includes(careers[careerIndex].slice(0,1).toUpperCase()) ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)} </h1>`;   

    if(characterIndex ===careers[careerIndex].length){
        careerIndex++;
        characterIndex=0;
    }

    if(careerIndex === careers.length){
        careerIndex = 0;
    }
    setTimeout(updateText, 200);
}


