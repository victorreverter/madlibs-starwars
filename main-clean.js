// Begin of MadLibsOne --------------------------------------------------------------

// MadLibsOne Object 1

var madLibsOneVals = {
    madLibsOne1: {
        title: 'Noun',
        value: ''
    },
    madLibsOne2: {
        title: 'Number',
        value: ''
    },
    madLibsOne3: {
        title: 'Adjective',
        value: ''
    },
    madLibsOne4: {
        title: 'Object',
        value: ''
    },
    madLibsOne5: {
        title: '-ing- verb',
        value: ''
    },
    madLibsOne6: {
        title: 'Adjective',
        value: ''
    },
    madLibsOne7: {
        title: 'Adverb',
        value: ''
    },
    madLibsOne8: {
        title: 'Number',
        value: ''
    },
    madLibsOne9: {
        title: 'Color',
        value: ''
    },
    madLibsOne10: {
        title: 'Nonsense Word',
        value: ''
    },
    madLibsOne11: {
        title: 'Verb',
        value: ''
    },
    madLibsOne12: {
        title: 'Verb',
        value: ''
    },
    madLibsOne13: {
        title: 'Body Part',
        value: ''
    },
    madLibsOne14: {
        title: 'Exclamation',
        value: ''
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

var randomMadLibs = Math.floor(Math.random() * 4) + 1;
console.log(randomMadLibs);

madLibsExec(madLibsOne, madLibsOneStr, madLibsOneVals, madLibsOneTitle, 1);

function madLibsExec(madLibsNum, madLibsStr, madLibsObj, madLibsTitle, madLibsRandomNum) {
    

    // Function to fill the Question Answer with all the inputs 

    // Loop for create the fields

    var caca = Object.keys(madLibsObj).length;
    console.log(caca);

    var fillHtml = '';

    console.log(eval(madLibsStr + 1 + '.title'));

    for (let questionIndex = 1; questionIndex <= caca; questionIndex++) {
        fillHtml += '<div class = "question-field" >';
        fillHtml += '<div class = "inputTitle" > ' + eval(madLibsStr + questionIndex + '.title') + '</div>';
        fillHtml += '<input type = "text" id = "' + madLibsStr + questionIndex + '" />';
        fillHtml += '<div id = "' + madLibsStr + questionIndex + 'Save" class = "save-btn" > Save </div>';
        fillHtml += '</div>';
    }

    $('#question-answers').html(fillHtml);

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
        return finalObj.value = getVal; // set the new value introduced by the user as the new Object Property

        // var getVal = $('#madLibsOne1').val();
        // console.log(madLibsOne1);
        // return madLibsOne1.value = getVal;
    })

    if (madLibsRandomNum === 1) {
        $('#madLibsOne14Save').on('click', function () {
            console.log(madLibsObj);

            madLibsNum = 'It was time to fly! Chewbacca, a Wookie Warrior, was the \
copilot for the famous ' + eval(madLibsStr + '1.value') + ', the Millennium Falcon. It could fly \
a through space at warp speeds of ' + eval(madLibsStr + '2.value') + ' miles per minute. \
At those ' + eval(madLibsStr + '3.value') + ' speeds, it is smart to wear a ' + eval(madLibsStr + '4.value') + ' to \
keep you strapped into your chair. Especially in a battle, like today! Chewy and \
Han Solo are ' + eval(madLibsStr + '5.value') + ' to escape a Star Destroyer that is hot on their tail. \
The Destroyer launches a ' + eval(madLibsStr + '6.value') + ' blaster at them. \
But, ' + eval(madLibsStr + '7.value') + ' it misses them by ' + eval(madLibsStr + '8.value') + ' inches. Chewbacca, pushes \
the ' + eval(madLibsStr + '9.value') + ' button on the control panel that says, "' + eval(madLibsStr + '10.value') + '!" \
The spacecraft suddenly ' + eval(madLibsStr + '11.value') + ' to the left and ' + eval(madLibsStr + '12.value') + ' to \
the right before it blasts through hyperspace. Chewy and Han Solo are safe! They clap \
their ' + eval(madLibsStr + '13.value') + ' and shout, "' + eval(madLibsStr + '14.value') + '!"';

            console.log(madLibsNum);
        });
    }

    

}
