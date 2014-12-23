var pos = 0;
var q1 = {"question":"Do you like the color blue?", "answer":"Yooo1", "chA":"A1", "chB":"B1", "chC":"C1"}
var q2 = {"question":"Do you like the color red?", "answer":"Yooo2", "chA":"A2", "chB":"B2", "chC":"C2"}
var q3 = {"question":"Do you like the color green?", "answer":"Yooo3", "chA":"A3", "chB":"B3", "chC":"C3"}
var q4 = {"question":"Do you like the color yellow?", "answer":"Yooo4", "chA":"A4", "chB":"B4", "chC":"C4"}
var qBank = [q1,q2,q3,q4];
var correctAnswer;
var correctResponses = 0;

var askQ = function () {
    $("#test").html(qBank[0]["question"]);
};


    

$(document).ready(function(){

askLoop = function() {
    for(i=0; i<qBank.length; i++) { 
        $("#test").html(qBank[i]["question"]+"<br><br>"+qBank[i]["answer"]+"<br><br>"+qBank[i]["chA"]+"<br><br>"+qBank[i]["chB"]+"<br><br>"+qBank[i]["chC"]);
    }
    
};

    

    
});


//var askQuestion = function() {
//$(".test").innerHTML = questions[0]+"<br>"+choicesA[0]+"<br>"+choicesB[0]+"<br>"+choicesC[0];
//};    
    
    
//askQuestion();
   
    



