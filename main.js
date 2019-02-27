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

// Deconstruction of the Object Properties

var {madLibsOne1,
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
    madLibsOne14} = madLibsOneVals;

// // Base of the Mad Libs Script

// var madLibsOneTitle = 'Quick Flight';

// var madLibsOne = 'It was time to fly! Chewbacca, a Wookie Warrior, was the \
// copilot for the famous ' + madLibsOne1.value + ', the Millennium Falcon. It could fly \
// a through space at warp speeds of ' + madLibsOne2.value + ' miles per minute. \
// At those ' + madLibsOne3.value + ' speeds, it is smart to wear a ' + madLibsOne4.value + ' to \
// keep you strapped into your chair. Especially in a battle, like today! Chewy and \
// Han Solo are ' + madLibsOne5.value + ' to escape a Star Destroyer that is hot on their tail. \
// The Destroyer launches a ' + madLibsOne6.value + ' blaster at them. \
// But, ' + madLibsOne7.value + ' it misses them by ' + madLibsOne8.value + ' inches. Chewbacca, pushes \
// the ' + madLibsOne9.value + ' button on the control panel that says, "' + madLibsOne10.value + '!" \
// The spacecraft suddenly ' + madLibsOne11.value + ' to the left and ' + madLibsOne12.value + ' to \
// the right before it blasts through hyperspace. Chewy and Han Solo are safe! They clap \
// their ' + madLibsOne13.value + ' and shout, "' + madLibsOne14.value + '!"';

// Base of the Mad Libs Script

var madLibsOneTitle = 'Quick Flight';

var madLibsOne;

// var madLibsOne = 'It was time to fly! Chewbacca, a Wookie Warrior, was the \
// copilot for the famous ' + madLibsOne1.value + ', the Millennium Falcon. It could fly \
// a through space at warp speeds of ' + madLibsOne2.value + ' miles per minute. \
// At those ' + madLibsOne3.value + ' speeds, it is smart to wear a ' + madLibsOne4.value + ' to \
// keep you strapped into your chair. Especially in a battle, like today! Chewy and \
// Han Solo are ' + madLibsOne5.value + ' to escape a Star Destroyer that is hot on their tail. \
// The Destroyer launches a ' + madLibsOne6.value + ' blaster at them. \
// But, ' + madLibsOne7.value + ' it misses them by ' + madLibsOne8.value + ' inches. Chewbacca, pushes \
// the ' + madLibsOne9.value + ' button on the control panel that says, "' + madLibsOne10.value + '!" \
// The spacecraft suddenly ' + madLibsOne11.value + ' to the left and ' + madLibsOne12.value + ' to \
// the right before it blasts through hyperspace. Chewy and Han Solo are safe! They clap \
// their ' + madLibsOne13.value + ' and shout, "' + madLibsOne14.value + '!"';

// $('#madLibsOne1Save').on('click', function () {
//     var getVal = $('#madLibsOne1').val();
//     console.log(madLibsOne1);
//     return madLibsOne1.value = getVal;    
// })

// Function to fill the Question Answer with all the inputs 

// Field One
var fillHtml = '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" > ' + madLibsOne1.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne1" />';
fillHtml += '<div id = "madLibsOne1Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Two
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne2.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne2" />';
fillHtml += '<div id = "madLibsOne2Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Three
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne3.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne3" />';
fillHtml += '<div id = "madLibsOne3Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Four
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne4.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne4" />';
fillHtml += '<div id = "madLibsOne4Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Five
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne5.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne5" />';
fillHtml += '<div id = "madLibsOne5Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Six
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne6.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne6" />';
fillHtml += '<div id = "madLibsOne6Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Seven
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne7.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne7" />';
fillHtml += '<div id = "madLibsOne7Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Eight
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne8.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne8" />';
fillHtml += '<div id = "madLibsOne8Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Nine
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne9.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne9" />';
fillHtml += '<div id = "madLibsOne9Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Ten
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne10.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne10" />';
fillHtml += '<div id = "madLibsOne10Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Eleven
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne11.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne11" />';
fillHtml += '<div id = "madLibsOne11Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Twelve
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne12.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne12" />';
fillHtml += '<div id = "madLibsOne12Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Thirdteen
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne13.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne13" />';
fillHtml += '<div id = "madLibsOne13Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

// Field Fourteen
fillHtml += '<div class = "question-field" >';
fillHtml += '<div class = "inputTitle" >' + madLibsOne14.title + '</div>';
fillHtml += '<input type = "text" id = "madLibsOne14" />';
fillHtml += '<div id = "madLibsOne14Save" class = "save-btn" > Save </div>';
fillHtml += '</div>';

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


$('#madLibsOne14Save').on('click', function () {
    console.log(madLibsOneVals);
    
    madLibsOne = 'It was time to fly! Chewbacca, a Wookie Warrior, was the \
copilot for the famous ' + madLibsOne1.value + ', the Millennium Falcon. It could fly \
a through space at warp speeds of ' + madLibsOne2.value + ' miles per minute. \
At those ' + madLibsOne3.value + ' speeds, it is smart to wear a ' + madLibsOne4.value + ' to \
keep you strapped into your chair. Especially in a battle, like today! Chewy and \
Han Solo are ' + madLibsOne5.value + ' to escape a Star Destroyer that is hot on their tail. \
The Destroyer launches a ' + madLibsOne6.value + ' blaster at them. \
But, ' + madLibsOne7.value + ' it misses them by ' + madLibsOne8.value + ' inches. Chewbacca, pushes \
the ' + madLibsOne9.value + ' button on the control panel that says, "' + madLibsOne10.value + '!" \
The spacecraft suddenly ' + madLibsOne11.value + ' to the left and ' + madLibsOne12.value + ' to \
the right before it blasts through hyperspace. Chewy and Han Solo are safe! They clap \
their ' + madLibsOne13.value + ' and shout, "' + madLibsOne14.value + '!"';
    
    console.log(madLibsOne);
});



// console.log(madLibsOne);
