var diaBox = document.getElementById("diaBox");
var nameBox = document.getElementById("charaName");
var textBox = document.getElementById("textBox");
var moreButton = document.getElementById("more");

function addName(name) {
    nameBox.innerHTML = name;
}
function clearName() {
    nameBox.innerHTML = "";
}
function addText(text) {
    textBox.innerHTML = text;
}
function clearText() {
    textBox.innerHTML = "";
}


var text =[["Old Man", "Hey, kid. I see you over there."],
           ["Old Man", "Hello? Can you hear me?"],
          [1,2], 
          ["Yes", "No"], 
          ["Old Man", "Good. Kids your age have hearing problems, what with their fancy headpods or airphones or what have you."],
           ["Old Man", "Then how come you responded then? Kids these days, I swear..."]
          ];

function start() {
    addName(text[0][0]);
    addText(text[0][1]);
}

var i = 1;
function run(){
    console.log(i);
    if (text[i][0] !== 1) {
        clearText();
        addText(text[i][1]);
        i++;
    } else {
        console.log("here");
        i++;
        var option1 = document.createElement("BUTTON");
        option1.innerHTML = text[i][0];
        option1.addEventListener("click", function() {
            clearText();
            i++;
            addText(text[i][1]);
        })
        var option2 = document.createElement("BUTTON");
        option2.innerHTML = text[i][1];
        option2.addEventListener("click", function() {
            clearText();
            i+= 2;
            addText(text[i][1]);
        })
        
        document.getElementById("choicesPanel").appendChild(option1);
        document.getElementById("choicesPanel").appendChild(option2);
        document.getElementById("choicesPanel").style.display="inline-block";
        
    }
    
}

start();
moreButton.addEventListener("click", run);

function choiceDisable(){
    
}