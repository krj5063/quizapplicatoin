$(function(){
    var current = -1,
        questions = [{question: 'What two elements make up water?', 
                      correct: 3, 
                      choices: ['Hydrogen and Iron', 'Iron and Fat', 'Hydrogen and Oxygen', 'Oxygen and Nitrogen']},
                     {question: 'What percentage of the earth is covered by water?', 
                      correct: 1, 
                      choices: ['70%', '30%', '55%', '90%']},
                     {question: 'Which of the following is not a state of water?', 
                      correct: 4, 
                      choices: ['Liquid', 'Gas', 'Solid', 'Fluid']},
                     {question: 'Water in a gas state is known as...', 
                      correct: 2, 
                      choices: ['Ice', 'Steam', 'Mold', 'Salt']}];
    
    function askLoop() {
        var $test = $('#test'),i=0;
        current++;
        $test.empty();
        $test.append($('<p/>').html(questions[current].question+"<br>"));
        var $quizBottom = $('#quizBottom');
        $quizBottom.empty();
        $quizBottom.append($('<p/>').html("Question "+(current+1)+"/4"));
        
        for(i=0;i < questions[current].choices.length; i++){
            $test.append($('<input/>')
                         .attr('type', 'radio')
                         .attr('name', 'answer')
                         .val(questions[current].choices[i]),
                         $('<label/>').html(questions[current].choices[i]+"<br><br>"));
        
        }
    }
    
    $('#submit').on('click', askLoop)
    .on('click', function(){$(this).html('Submit')});
    
    });
    

    



    



