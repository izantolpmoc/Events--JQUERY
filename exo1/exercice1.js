"use strict";

//EXERCICE 1
$('.zone1').on('click', function(){
    $('h1').css('color', 'green');
    $('h1').css('text-align', 'center');
    $('h1').css('font-size', '80px');
});

//EXERCICE 2
$('.zone2').on('click', function(){
    $('body').css('background-color', 'gray');
});

//EXERCICE 3
$('form').on('submit', function(e){
    e.preventDefault();
});

$('.zone3').on('click', function(){
    $('body').css('background-color', 'pink');
});

// //EXERCICE 4
// $('.zone4').on('blur', function(){
//     let color= $('.zone4').val();
//     console.log(color);
//     // $('body').css('background-color', color);
// });

$('.zone5').on('click', function(){
    let color= $('.zone4').val();
    $('body').css('background-color', color);
});


//EXERCICE 5
$('.zone7').on('click', function(){
    let choiceColor = $('.zone6').val();
    $('body').css('background-color', choiceColor);
    console.log(choiceColor);
    console.info('exercice 5 valide!');
});

//EXERCICE 6
$('.zone8').on('click', function(){
    $('.zone8').css('background-color', 'gold');
});

//EXERCICE 7
$('.zone9').on('click', function(){
    $('.zone9').css('background-color', 'gold');
    $(this).css('background-color', 'green');
});

