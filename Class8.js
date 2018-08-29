function getCORSCompliantURL(URL){
    return "https://cors-anywhere.herokuapp.com/" + URL;
}

var animalLinks = ["https://random.dog/woof.json", "https://aws.random.cat/meow", "https://randomfox.ca/floof"];

function getRandom3(){
    return Math.round(Math.random() * 2);
}
var i = getRandom3();   
var c = 1;
var w = 1;

//Animal button for loading random images
var loadAnimal = 
    function(){
     
    if(i == 0){ 
    var ajax = $.ajax(animalLinks[0]);
    ajax.done(
        function dog(msg){
            console.log("Success!Dog" + msg.url);
            $("#animals").attr("src", msg.url);

        })}
     else if(i == 1){
         var ajax = $.ajax(getCORSCompliantURL(animalLinks[1]));
     ajax.done(
        function cat(msg1){
            console.log("Success!Cat" + msg1["file"]);
            $("#animals").attr("src", msg1["file"]);
        })}
     else{
     var ajax = $.ajax(getCORSCompliantURL(animalLinks[2]));
     ajax.done(
     function fox(msg2){
           console.log("Success!Fox" + msg2["image"]);
           $("#animals").attr("src", msg2["image"]);
       })}
};

//$("#load_animal").click(loadAnimal);

var score = document.getElementById("correctCount").innerHTML;
var scoreIn = document.getElementById("incorrectCount").innerHTML;
//Buttons for Guessing  
$("#dog_guess").click(function(){
       i = getRandom3();
    if(i==0){ 
           var newScore = score + c;
          document.getElementById("correctCount").innerHTML = newScore;       
          c++;
       }else{
           var newScoreIn = scoreIn + w;
           document.getElementById("incorrectCount").innerHTML = newScoreIn;    
           w++;
       }                            
     loadAnimal();
 });
                      
$("#cat_guess").click(function(){
      i = getRandom3();
    if(i==1){
           var newScore = score + c;
           document.getElementById("correctCount").innerHTML = newScore;     
           c++;
     
       }else{
           var newScoreIn = scoreIn + w;
          document.getElementById("incorrectCount").innerHTML = newScoreIn;    
           w++;
       }        
     loadAnimal();
 });
                      
$("#fox_guess").click(function(){
      i = getRandom3();
       if(i==2){
           var newScore = score + c;
           document.getElementById("correctCount").innerHTML = newScore;  
           c++;
       }else{
           var newScoreIn = scoreIn + w;
           document.getElementById("incorrectCount").innerHTML = newScoreIn;    
           w++;
       }                                
     loadAnimal();
 });

