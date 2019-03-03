// User interactions -------------------------------------

$('#home-btn').on('click', function() {
    console.log('dede');
    
    $('#home-box').fadeOut(500, function() {
        $('#question-answer-box').fadeIn(500);
    });
});

// Begin of MadLibsOne --------------------------------------------------------------

// MadLibsOne Object 1

var madLibsOneVals = {
    madLibsOne1: {
        title: 'Noun',
        value: '-not written-'
    },
    madLibsOne2: {
        title: 'Number',
        value: '-not written-'
    },
    madLibsOne3: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsOne4: {
        title: 'Object',
        value: '-not written-'
    },
    madLibsOne5: {
        title: '-ing- verb',
        value: '-not written-'
    },
    madLibsOne6: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsOne7: {
        title: 'Adverb',
        value: '-not written-'
    },
    madLibsOne8: {
        title: 'Number',
        value: '-not written-'
    },
    madLibsOne9: {
        title: 'Color',
        value: '-not written-'
    },
    madLibsOne10: {
        title: 'Nonsense Word',
        value: '-not written-'
    },
    madLibsOne11: {
        title: 'Verb',
        value: '-not written-'
    },
    madLibsOne12: {
        title: 'Verb',
        value: '-not written-'
    },
    madLibsOne13: {
        title: 'Body Part',
        value: '-not written-'
    },
    madLibsOne14: {
        title: 'Exclamation',
        value: '-not written-'
    }
}

// Deconstruction of the Object Properties MadLibs 1

var {
    madLibsOne1,
    madLibsOne2,
    madLibsOne3,
    madLibsOne4,
    madLibsOne5,
    madLibsOne6,
    madLibsOne7,
    madLibsOne8,
    madLibsOne9,
    madLibsOne10,
    madLibsOne11,
    madLibsOne12,
    madLibsOne13,
    madLibsOne14
} = madLibsOneVals;

// Base of the Mad Libs Script

var madLibsOneTitle = 'Quick Flight';
var madLibsOne;
var madLibsOneStr = 'madLibsOne';

// End of MadLibsOne --------------------------------------------------------------

// Begin of MadLibsTwo --------------------------------------------------------------

// MadLibsOne Object 2

var madLibsTwoVals = {
    madLibsTwo1: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo2: {
        title: 'Number',
        value: '-not written-'
    },
    madLibsTwo3: {
        title: 'Color',
        value: '-not written-'
    },
    madLibsTwo4: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo5: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo6: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo7: {
        title: 'Number',
        value: '-not written-'
    },
    madLibsTwo8: {
        title: 'Number',
        value: '-not written-'
    },
    madLibsTwo9: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo10: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo11: {
        title: 'Object',
        value: '-not written-'
    },
    madLibsTwo12: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo13: {
        title: 'Color',
        value: '-not written-'
    },
    madLibsTwo14: {
        title: 'Verb',
        value: '-not written-'
    },
    madLibsTwo15: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo16: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo17: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsTwo18: {
        title: 'Verb',
        value: '-not written-'
    }
}

// Deconstruction of the Object Properties MadLibs 2

var {
    madLibsTwo1,
    madLibsTwo2,
    madLibsTwo3,
    madLibsTwo4,
    madLibsTwo5,
    madLibsTwo6,
    madLibsTwo7,
    madLibsTwo8,
    madLibsTwo9,
    madLibsTwo10,
    madLibsTwo11,
    madLibsTwo12,
    madLibsTwo13,
    madLibsTwo14,
    madLibsTwo15,
    madLibsTwo16,
    madLibsTwo17,
    madLibsTwo18
} = madLibsTwoVals;

// Base of the Mad Libs Script

var madLibsTwoTitle = 'Jedi Training';
var madLibsTwo;
var madLibsTwoStr = 'madLibsTwo';

// End of MadLibsTwo --------------------------------------------------------------

// Begin of MadLibsThree --------------------------------------------------------------

// MadLibsOne Object 3

var madLibsThreeVals = {
    madLibsThree1: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsThree2: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsThree3: {
        title: 'Noun',
        value: '-not written-'
    },
    madLibsThree4: {
        title: 'Noun',
        value: '-not written-'
    },
    madLibsThree5: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsThree6: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsThree7: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsThree8: {
        title: 'Verb',
        value: '-not written-'
    },
    madLibsThree9: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsThree10: {
        title: 'Body Part',
        value: '-not written-'
    },
    madLibsThree11: {
        title: 'Body Part',
        value: '-not written-'
    },
    madLibsThree12: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsThree13: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsThree14: {
        title: 'Object',
        value: '-not written-'
    }
}

// Deconstruction of the Object Properties MadLibs 3

var {
    madLibsThree1,
    madLibsThree2,
    madLibsThree3,
    madLibsThree4,
    madLibsThree5,
    madLibsThree6,
    madLibsThree7,
    madLibsThree8,
    madLibsThree9,
    madLibsThree10,
    madLibsThree11,
    madLibsThree12,
    madLibsThree13,
    madLibsThree14
} = madLibsThreeVals;

// Base of the Mad Libs Script

var madLibsThreeTitle = 'The Mighty Force';
var madLibsThree;
var madLibsThreeStr = 'madLibsThree';

// End of MadLibsThree --------------------------------------------------------------

// Begin of MadLibsFour --------------------------------------------------------------

// MadLibsOne Object 4

var madLibsFourVals = {
    madLibsFour1: {
        title: 'Object',
        value: '-not written-'
    },
    madLibsFour2: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsFour3: {
        title: 'Verb',
        value: '-not written-'
    },
    madLibsFour4: {
        title: 'Number',
        value: '-not written-'
    },
    madLibsFour5: {
        title: 'Color',
        value: '-not written-'
    },
    madLibsFour6: {
        title: 'Object',
        value: '-not written-'
    },
    madLibsFour7: {
        title: 'Verb',
        value: '-not written-'
    },
    madLibsFour8: {
        title: 'Verb',
        value: '-not written-'
    },
    madLibsFour9: {
        title: 'Object',
        value: '-not written-'
    },
    madLibsFour10: {
        title: 'Adjective',
        value: '-not written-'
    },
    madLibsFour11: {
        title: 'Verb',
        value: '-not written-'
    },
    madLibsFour12: {
        title: 'Adjective',
        value: '-not written-'
    }
}

// Deconstruction of the Object Properties MadLibs 4

var {
    madLibsFour1,
    madLibsFour2,
    madLibsFour3,
    madLibsFour4,
    madLibsFour5,
    madLibsFour6,
    madLibsFour7,
    madLibsFour8,
    madLibsFour9,
    madLibsFour10,
    madLibsFour11,
    madLibsFour12
} = madLibsFourVals;

// Base of the Mad Libs Script

var madLibsFourTitle = 'Rebel Princess';
var madLibsFour;
var madLibsFourStr = 'madLibsFour';

// End of MadLibsFour --------------------------------------------------------------

// Execution Alternatively the MadLibs Filler

var randomMadLibs = Math.floor(Math.random() * 4) + 1;
// console.log(randomMadLibs);

// madLibsExec(madLibsOne, madLibsOneStr, madLibsOneVals, madLibsOneTitle, 1);
// madLibsExec(madLibsTwo, madLibsTwoStr, madLibsTwoVals, madLibsTwoTitle, 2);
// madLibsExec(madLibsThree, madLibsThreeStr, madLibsThreeVals, madLibsThreeTitle, 3);
// madLibsExec(madLibsFour, madLibsFourStr, madLibsFourVals, madLibsFourTitle, 4);

if (randomMadLibs === 1){
    madLibsExec(madLibsOne, madLibsOneStr, madLibsOneVals, madLibsOneTitle, randomMadLibs);
} else if (randomMadLibs === 2) {
    madLibsExec(madLibsTwo, madLibsTwoStr, madLibsTwoVals, madLibsTwoTitle, randomMadLibs);
} else if (randomMadLibs === 3) {
    madLibsExec(madLibsThree, madLibsThreeStr, madLibsThreeVals, madLibsThreeTitle, randomMadLibs);
} else if (randomMadLibs === 4) {
    madLibsExec(madLibsFour, madLibsFourStr, madLibsFourVals, madLibsFourTitle, randomMadLibs);
}

function madLibsExec(madLibsNum, madLibsStr, madLibsObj, madLibsTitle, madLibsRandomNum) {
    
    $('#madlibs-title-question').html("\"" + madLibsTitle + "\"");

    // Conditional to fill the Answer Pattern

    if (madLibsRandomNum === 1) {
        // console.log(madLibsObj);

        madLibsNum = 'It was time to fly! Chewbacca, a Wookie Warrior, was the \
copilot for the famous <span> ' + eval(madLibsStr + '1.title') + ' </span>, the Millennium Falcon. It could fly \
a through space at warp speeds of <span> ' + eval(madLibsStr + '2.title') + '</span> miles per minute. \
At those <span>' + eval(madLibsStr + '3.title') + '</span> speeds, it is smart to wear a <span>' + eval(madLibsStr + '4.title') + '</span> to \
keep you strapped into your chair. Especially in a battle, like today! Chewy and \
Han Solo are <span>' + eval(madLibsStr + '5.title') + ' </span> to escape a Star Destroyer that is hot on their tail. \
The Destroyer launches a <span>' + eval(madLibsStr + '6.title') + ' </span> blaster at them. \
But, <span> ' + eval(madLibsStr + '7.title') + ' </span> it misses them by <span>' + eval(madLibsStr + '8.title') + '</span> inches. Chewbacca, pushes \
the <span>' + eval(madLibsStr + '9.title') + '</span> button on the control panel that says, "<span>' + eval(madLibsStr + '10.title') + '!</span>" \
The spacecraft suddenly <span>' + eval(madLibsStr + '11.title') + '</span> to the left and <span>' + eval(madLibsStr + '12.title') + '</span> to \
the right before it blasts through hyperspace. Chewy and Han Solo are safe! They clap \
their <span>' + eval(madLibsStr + '13.title') + '</span> and shout, "<span>' + eval(madLibsStr + '14.title') + '!</span>"';

        $('#question-text-block').html(madLibsNum);
        console.log(madLibsNum);
    } else if (madLibsRandomNum === 2) {
        // console.log(madLibsObj);

        madLibsNum = 'It was a <span>' + eval(madLibsStr + '1.title') + '</span> day for Luke Skywalker. \
He was learning how to be a real Jedi from his teacher, Master Yoda. Yoda is \
only <span>' + eval(madLibsStr + '2.title') + '</span> feet tall and his skin is <span>' + eval(madLibsStr + '3.title') + '</span>. \
He is very wise and <span>' + eval(madLibsStr + '4.title') + '</span>. He teaches Luke some <span>' + eval(madLibsStr + '5.title') + '</span> lessons: \
To be a Jedi you must first be <span>' + eval(madLibsStr + '6.title') + '</span>. You must also be strong. To build strength, balance \
on your hands for <span>' + eval(madLibsStr + '7.title') + '</span> minutes and do <span>' + eval(madLibsStr + '8.title') + '</span> pushups. \
This will make your muscles <span>' + eval(madLibsStr + '9.title') + '</span>. Do not think <span>' + eval(madLibsStr + '10.title') + '</span> thoughts \
and believe in yourself. A Jedi uses a <span>' + eval(madLibsStr + '11.title') + '</span> of great <span>' + eval(madLibsStr + '12.title') + '</span> called \
a lightsaber. Luke\'s lightsaber is <span>' + eval(madLibsStr + '13.title') + '</span>. He learns how to strike, block, \
and <span>' + eval(madLibsStr + '14.title') + '</span> in a fight. He has to jump <span>' + eval(madLibsStr + '15.title') + '</span> and \
run <span>' + eval(madLibsStr + '16.title') + '</span>. Being a Jedi is not <span>' + eval(madLibsStr + '17.title') + '</span>. It takes a lot of \
practice. But, Luke us ready! He wants to <span>' + eval(madLibsStr + '18.title') + '</span> with the Dark Side and win!';

        $('#question-text-block').html(madLibsNum);
        console.log(madLibsNum);
    } else if (madLibsRandomNum === 3) {
        // console.log(madLibsObj);

        madLibsNum = 'There is no power in the universe quite like the Force. The Force is what gives a \
Jedi his <span>' + eval(madLibsStr + '1.title') + '</span> power. It\'s an energy field created by all \
<span>' + eval(madLibsStr + '2.title') + '</span> <span>' + eval(madLibsStr + '3.title') + '</span>. It binds the <span>' + eval(madLibsStr + '4.title') + '</span> together. \
The Force can be used for good or <span>' + eval(madLibsStr + '5.title') + '</span>. The Dark Side is <span>' + eval(madLibsStr + '6.title') + '</span> and \
the Side <span>' + eval(madLibsStr + '7.title') + '</span> is good! The Force <span>' + eval(madLibsStr + '8.title') + '</span> a Jedi strong. To use the Force \
requires willpower, discipline and <span>' + eval(madLibsStr + '9.title') + '</span>. A person who is strong with the Force can move objects through \
the air with an outstretched <span>' + eval(madLibsStr + '10.title') + '</span> or, read the thoughts in another person\'s <span>' + eval(madLibsStr + '11.title') + '</span>. \
It takes a lot of energy to do this. Some people are born with a <span>' + eval(madLibsStr + '12.title') + '</span> connection with the Force. It\'s \
a <span>' + eval(madLibsStr + '13.title') + '</span> compliment to say, "May the <span>' + eval(madLibsStr + '14.title') + '</span> be with you."';

        $('#question-text-block').html(madLibsNum);
        console.log(madLibsNum);
    } else if (madLibsRandomNum === 4) {
        // console.log(madLibsObj);

        madLibsNum = 'It\'s not easy being a princess! Especially, when you are a rebel. Princess Leia has a lot to do! \
First, she puts on her make up, <span>' + eval(madLibsStr + '1.title') + '</span>, and wraps her hair into a bun. She doesn\'t \
wear a <span>' + eval(madLibsStr + '2.title') + '</span> dress! She has to be able to run and <span>' + eval(madLibsStr + '3.title') + '</span>. Then, \
she straps on <span>' + eval(madLibsStr + '4.title') + '</span> weapons. Her favourite one is a <span>' + eval(madLibsStr + '5.title') + '</span> blaster \
pistol. It is like a gun, but instead of bullets, it shoots bright <span>' + eval(madLibsStr + '6.title') + '</span>. In her training, she \
doesn\'t learn to dance, paint, and <span>' + eval(madLibsStr + '7.title') + '</span> like most pricesses. Instead, she is taught how \
to fight and <span>' + eval(madLibsStr + '8.title') + '</span>. Leia is very brave. She knows how to swing a <span>' + eval(madLibsStr + '9.title') + '</span> and \
dodge a strike. She can protect herself from <span>' + eval(madLibsStr + '10. title ') + '</span> villains. When her friends need help, she is \
willing to <span>' + eval(madLibsStr + '11. title ') + '</span> to the rescue. She is a <span>' + eval(madLibsStr + '12.title') + '</span> princess.';

        $('#question-text-block').html(madLibsNum);
        console.log(madLibsNum);
    }

    // Function to fill the Question Answer with all the inputs 

    // Loop for create the fields

    var madObjLength = Object.keys(madLibsObj).length;
    // console.log(madObjLength);

    var fillHtml = '';

    // console.log(eval(madLibsStr + 1 + '.title'));

    for (let questionIndex = 1; questionIndex <= madObjLength; questionIndex++) {
        // fillHtml += '<div class = "question-field" >';
        // fillHtml += '<div class = "inputTitle" > ' + eval(madLibsStr + questionIndex + '.title') + '</div>';
        // fillHtml += '<input type = "text" id = "' + madLibsStr + questionIndex + '" />';
        // fillHtml += '<div id = "' + madLibsStr + questionIndex + 'Save" class = "save-btn" > Save </div>';
        // fillHtml += '</div>';

        // Fill and made only the First question Visible
        if (questionIndex === 1) {
            fillHtml += '<div id="questionBox' + questionIndex + '" class = "question-field" >';
            fillHtml += '<div class = "inputTitle" > ' + eval(madLibsStr + questionIndex + '.title') + '</div>';
            fillHtml += '<input type = "text" id = "' + madLibsStr + questionIndex + '" />';
            fillHtml += '<div id = "' + madLibsStr + questionIndex + 'Save" class = "save-btn" > Save </div>';
            fillHtml += '</div>';
        } else {
            fillHtml += '<div id="questionBox' + questionIndex + '" class = "question-field" style="display:none">';
            fillHtml += '<div class = "inputTitle" > ' + eval(madLibsStr + questionIndex + '.title') + '</div>';
            fillHtml += '<input type = "text" id = "' + madLibsStr + questionIndex + '" />';
            fillHtml += '<div id = "' + madLibsStr + questionIndex + 'Save" class = "save-btn" > Save </div>';
            fillHtml += '</div>';
        }
    }

    $('#question-answers').html(fillHtml);

    var saveBtnNum = madObjLength;
    var i = 0;

    $('.question-field .save-btn').on('click', function() {
        // console.log('clicked save.btn');
        // console.log(this.id);        
        
        if (i < saveBtnNum) {
            i++;
            // console.log(i);            
            // console.log(this.id.includes(Number(i)));    // Used to test if the id Includes the value
            
            // Things pending for do test a grab the id and Fade In Here and SHow the Nect One
            // Just addi +1 to the Number of the id
            // For example madLibsOne1Save to madLibsOne2Save
            var currentQuestionBox = '#questionBox' + i;
            var nextQuestionBox = '#questionBox' + (i + 1);
            // console.log(currentQuestionBox);
            // console.log(nextQuestionBox);

            if (i !== saveBtnNum){
                $(currentQuestionBox).fadeOut(500, function () {
                    $(nextQuestionBox).fadeIn(500);
                });
            }
            
        }
    });

    // $('.question-field .save-btn').on('click', function() {
    //     console.log(this.id.includes(Number(1)));        // Used to test if the id Includes the value
    // });

    // Function for detect and grab the answer

    $('.question-field .save-btn').on('click', function () {
        console.log(this);
        console.log(this.id);

        var thisStr = this.id; // Grab id of the Button
        var splitSave = thisStr.split("Save").shift(); // retire the Save word to use as Input Id

        console.log(splitSave);

        var newId = '#' + splitSave; // add to the Input Id the # to use as CSS Id

        console.log(newId);

        var getVal = $(newId).val(); // grab the value introduced by the user

        // console.log(madLibsOne1);

        var finalObj = eval(splitSave); //eval the Input Id to convert it into an Object Property

        console.log(getVal);

        if(getVal == '') {
            return finalObj.value = '-not written-'; // return -not written- if the imput is empty and not filled by the user
        } else {
            return finalObj.value = getVal; // set the new value introduced by the user as the new Object Property
        }

        // Old return version
        // return finalObj.value = getVal; // set the new value introduced by the user as the new Object Property

        // var getVal = $('#madLibsOne1').val();
        // console.log(madLibsOne1);
        // return madLibsOne1.value = getVal;
    })

    // Print the Final Result with the Values Introduced in the Inputs
    if (madLibsRandomNum === 1) {
        $('#madLibsOne14Save').on('click', function () {
            // console.log(madLibsObj);

            $('#answer-pic').addClass('chewy');
            $('#madlibs-title-answer').html("\"" + madLibsTitle + "\"");

            madLibsNum = 'It was time to fly! Chewbacca, a Wookie Warrior, was the \
copilot for the famous <span> ' + eval(madLibsStr + '1.value') + ' </span>, the Millennium Falcon. It could fly \
a through space at warp speeds of <span> ' + eval(madLibsStr + '2.value') + '</span> miles per minute. \
At those <span>' + eval(madLibsStr + '3.value') + '</span> speeds, it is smart to wear a <span>' + eval(madLibsStr + '4.value') + '</span> to \
keep you strapped into your chair. Especially in a battle, like today! Chewy and \
Han Solo are <span>' + eval(madLibsStr + '5.value') + ' </span> to escape a Star Destroyer that is hot on their tail. \
The Destroyer launches a <span>' + eval(madLibsStr + '6.value') + ' </span> blaster at them. \
But, <span> ' + eval(madLibsStr + '7.value') + ' </span> it misses them by <span>' + eval(madLibsStr + '8.value') + '</span> inches. Chewbacca, pushes \
the <span>' + eval(madLibsStr + '9.value') + '</span> button on the control panel that says, "<span>' + eval(madLibsStr + '10.value') + '!</span>" \
The spacecraft suddenly <span>' + eval(madLibsStr + '11.value') + '</span> to the left and <span>' + eval(madLibsStr + '12.value') + '</span> to \
the right before it blasts through hyperspace. Chewy and Han Solo are safe! They clap \
their <span>' + eval(madLibsStr + '13.value') + '</span> and shout, "<span>' + eval(madLibsStr + '14.value') + '!</span>"';

            $('#answer-text-block').html(madLibsNum);
            console.log(madLibsNum);

            $('#question').fadeOut(500, function() {
                $('#answer').fadeIn(500);
            });
        });
    } else if (madLibsRandomNum === 2) {
        $('#madLibsTwo18Save').on('click', function () {
            // console.log(madLibsObj);

            $('#answer-pic').addClass('jedi');
            $('#madlibs-title-answer').html("\"" + madLibsTitle + "\"");

            madLibsNum = 'It was a <span>' + eval(madLibsStr + '1.value') + '</span> day for Luke Skywalker. \
He was learning how to be a real Jedi from his teacher, Master Yoda. Yoda is \
only <span>' + eval(madLibsStr + '2.value') + '</span> feet tall and his skin is <span>' + eval(madLibsStr + '3.value') + '</span>. \
He is very wise and <span>' + eval(madLibsStr + '4.value') + '</span>. He teaches Luke some <span>' + eval(madLibsStr + '5.value') + '</span> lessons: \
To be a Jedi you must first be <span>' + eval(madLibsStr + '6.value') + '</span>. You must also be strong. To build strength, balance \
on your hands for <span>' + eval(madLibsStr + '7.value') + '</span> minutes and do <span>' + eval(madLibsStr + '8.value') + '</span> pushups. \
This will make your muscles <span>' + eval(madLibsStr + '9.value') + '</span>. Do not think <span>' + eval(madLibsStr + '10.value') + '</span> thoughts \
and believe in yourself. A Jedi uses a <span>' + eval(madLibsStr + '11.value') + '</span> of great <span>' + eval(madLibsStr + '12.value') + '</span> called \
a lightsaber. Luke\'s lightsaber is <span>' + eval(madLibsStr + '13.value') + '</span>. He learns how to strike, block, \
and <span>' + eval(madLibsStr + '14.value') + '</span> in a fight. He has to jump <span>' + eval(madLibsStr + '15.value') + '</span> and \
run <span>' + eval(madLibsStr + '16.value') + '</span>. Being a Jedi is not <span>' + eval(madLibsStr + '17.value') + '</span>. It takes a lot of \
practice. But, Luke us ready! He wants to <span>' + eval(madLibsStr + '18.value') + '</span> with the Dark Side and win!';

            $('#answer-text-block').html(madLibsNum);
            console.log(madLibsNum);

            $('#question').fadeOut(500, function () {
                $('#answer').fadeIn(500);
            });
        });
    } else if (madLibsRandomNum === 3) {
        $('#madLibsThree14Save').on('click', function () {
            // console.log(madLibsObj);

            $('#answer-pic').addClass('the-force');
            $('#madlibs-title-answer').html("\"" + madLibsTitle + "\"");

            madLibsNum = 'There is no power in the universe quite like the Force. The Force is what gives a \
Jedi his <span>' + eval(madLibsStr + '1.value') + '</span> power. It\'s an energy field created by all \
<span>' + eval(madLibsStr + '2.value') + '</span> <span>' + eval(madLibsStr + '3.value') + '</span>. It binds the <span>' + eval(madLibsStr + '4.value') + '</span> together. \
The Force can be used for good or <span>' + eval(madLibsStr + '5.value') + '</span>. The Dark Side is <span>' + eval(madLibsStr + '6.value') + '</span> and \
the Side <span>' + eval(madLibsStr + '7.value') + '</span> is good! The Force <span>' + eval(madLibsStr + '8.value') + '</span> a Jedi strong. To use the Force \
requires willpower, discipline and <span>' + eval(madLibsStr + '9.value') + '</span>. A person who is strong with the Force can move objects through \
the air with an outstretched <span>' + eval(madLibsStr + '10.value') + '</span> or, read the thoughts in another person\'s <span>' + eval(madLibsStr + '11.value') + '</span>. \
It takes a lot of energy to do this. Some people are born with a <span>' + eval(madLibsStr + '12.value') + '</span> connection with the Force. It\'s \
a <span>' + eval(madLibsStr + '13.value') + '</span> compliment to say, "May the <span>' + eval(madLibsStr + '14.value') + '</span> be with you."';

            $('#answer-text-block').html(madLibsNum);
            console.log(madLibsNum);

            $('#question').fadeOut(500, function () {
                $('#answer').fadeIn(500);
            });
        });
    } else if (madLibsRandomNum === 4) {
        $('#madLibsFour12Save').on('click', function () {
            // console.log(madLibsObj);

            $('#answer-pic').addClass('rebel-princess');
            $('#madlibs-title-answer').html("\"" + madLibsTitle + "\"");

            madLibsNum = 'It\'s not easy being a princess! Especially, when you are a rebel. Princess Leia has a lot to do! \
First, she puts on her make up, <span>' + eval(madLibsStr + '1.value') + '</span>, and wraps her hair into a bun. She doesn\'t \
wear a <span>' + eval(madLibsStr + '2.value') + '</span> dress! She has to be able to run and <span>' + eval(madLibsStr + '3.value') + '</span>. Then, \
she straps on <span>' + eval(madLibsStr + '4.value') + '</span> weapons. Her favourite one is a <span>' + eval(madLibsStr + '5.value') + '</span> blaster \
pistol. It is like a gun, but instead of bullets, it shoots bright <span>' + eval(madLibsStr + '6.value') + '</span>. In her training, she \
doesn\'t learn to dance, paint, and <span>' + eval(madLibsStr + '7.value') + '</span> like most pricesses. Instead, she is taught how \
to fight and <span>' + eval(madLibsStr + '8.value') + '</span>. Leia is very brave. She knows how to swing a <span>' + eval(madLibsStr + '9.value') + '</span> and \
dodge a strike. She can protect herself from <span>' + eval(madLibsStr + '10. value ') + '</span> villains. When her friends need help, she is \
willing to <span>' + eval(madLibsStr + '11. value ') + '</span> to the rescue. She is a <span>' + eval(madLibsStr + '12.value') + '</span> princess.';

            $('#answer-text-block').html(madLibsNum);
            console.log(madLibsNum);

            $('#question').fadeOut(500, function () {
                $('#answer').fadeIn(500);
            });
        });
    }

    // Reload Btn 

    $('#restart-btn').on('click', function() {
        location.reload();
    });

    // Save as pdf btn

    function print() {
        const filename = 'ThisIsYourPDFFilename.pdf';

        html2canvas(document.querySelector('#question-answer-box')).then(canvas => {
            let pdf = new jsPDF('p', 'mm', 'a4');
            // var width = pdf.internal.pageSize.getWidth();
            // var height = pdf.internal.pageSize.getHeight();
            
            // console.log(width);            

            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 10, 10, 180, 150);
            pdf.save(filename);
        });
    }

    $('#save-pdf').click(function () {
        print();
    });


}
