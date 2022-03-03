
var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')

var app={
        questions:[
            {
                q:"Quels sont les élèments liés a la Morphologogie Mathématique ?",
                options: ["L'algèbre, la théorie des treillis, la topologie et les probabilités.", "La théorie des treillis, les fonctions et l'algèbre", "La topologie, Théorème de Thalès et les fonctions", "Théorème de l'image ouverte, la théorie des treillis et la topologie "],
                answer:1
            },
            {
                q:"Comment l'ouverture morphologique se défénit ?",
                options: ["comme une fermeture suivie d'une erosion.", "comme une dilatation suivie d'une érosion.", "comme une érosion suivie d'une dilatation.", 'Autre'],
                answer:3
            },   
            {
                q:"Quelle est la formule de la dilatation ?",
                options: ["DilBp(X) = {B | p X}", "DilBp(X) = {p | B X}", "DilB(X) = {Bp | p X}", "DilB(X) = {p | Bp X}"],
                answer:3
          }, 
          {
                q:'Le développement de la morphologie mathématique est inspiré des problèmes de ...',
                options: ['Pixels', "traitement d'images", 'traitement de signal', 'Autre'],
                answer:2
          },    
          {
                q:"Quel est l'effet de la dilatation ?",
                options: ['Dupliquer la figure', 'Rétrécir la figure', 'Arrondir les angles', 'Elargir la figure'],
                answer:4
          },                
        ],
        index:0,
        load:function(){
            if(this.index<=this.questions.length-1){
                quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
                opt1.innerHTML=this.questions[this.index].options[0];
                opt2.innerHTML=this.questions[this.index].options[1];
                opt3.innerHTML=this.questions[this.index].options[2];
                opt4.innerHTML=this.questions[this.index].options[3];
            }
            else {
                quizbox.innerHTML="Quiz Complet!";
                ul.style.display="none";
                nextButton.style.display="none";
            }
        },
        next: function(){
            this.index++;
            this.load();
        },
        check: function(ele){
            var id=ele.id.split('');
            if(id[id.length-1]==this.questions[this.index].answer){
                this.score++;
                ele.className="correct";
                this.scoreCard();
            }
            else{
                ele.className="wrong";
            }
        },
        preventClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="none";
            }
        },
        allowClick:function(){
            for(let i=0; i<ul.children.length; i++){
                ul.children[i].style.pointerEvents="auto";
                ul.children[i].className=''
            }
        },
        score:0,
        scoreCard:function(){
            scoreCard.innerHTML=this.questions.length + "/" + this.score;
        }
}

window.load=app.load();

function button(ele){
    app.check(ele);
    app.preventClick();
}

function next(){
    app.next();
    app.allowClick();
}