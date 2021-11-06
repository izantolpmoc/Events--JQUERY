"use strict";

//evenement mouseover
$('.zone1').on('mouseover', function(){
    $(this).css('background-color','IndianRed');
    $('#info').text('Jour');
});

//evenement mouseout
//Pour rétablir la couleur d'origine de ma zone il faut prévoir l'effet au mouseout quand je quitte la zone1
$('.zone1').on('mouseout', function(){
    $(this).css('background-color','lightskyblue');
    $('#info').text('Nuit');
});

//evenement mousemove
$('.zone2').on('mousemove', function(e){
    $('.zone2').text('Axe KEEN V: '+ e.pageX + ' Axe VERTICAL: ' + e.pageY);
    $('#info').text('Ensemble on danse à l\'horizontale');
});

//evenement mouseout
$('.zone3').on('mouseout', function(){
    $(this).css('background-color','IndianRed');
    $('#info').text('Je sors de la zone 3');
});

//evenements mouseenter / mouseleave
$('.zone4').on('mouseenter', function(){
    $(this).css('background-color','IndianRed');
    $('#info').text('Jour');
});

$('.zone4').on('mouseleave', function(){
    $(this).css('background-color','lightskyblue');
    $('#info').text('Nuit');
});

//evenement mouseup
$('.zone5').on('mouseup', function(){
    $(this).css('background-color', 'gold');
    $('#info').text("J'ai cliqué sur la zone 5");
});

//evenement mousedown
$('.zone6').on('mousedown', function(){
    $(this).css('background-color', 'gold');
    $('#info').text('J\'ai cliqué sur la zone 6');
});

//evenemnt clic
$('.zone7').on('click', function(){
    $(this).css('background-color', 'gold');
    $('#info').text('J\'ai cliqué sur la zone 7');
});

//evenement dblclick
$('.zone8').on('dblclick', function(){
    $(this).css('background-color', 'gold');
    $('#info').text('J\'ai double-cliqué sur la zone 8');
});

//evenement blur
$('.zone9').on('blur', function(){
    $(this).css('filter', 'blur(2px)');
    $('#info').text('J\'ai cliqué hors de la zone 9');
});


//evenement change
$('.zone10').on('change', function(){
    $(this).css('background-color', 'IndianRed');
    $('#info').text('Je suis dans la zone 10');
});

