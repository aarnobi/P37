class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    fill("blue")

    //write code to show a heading for showing the result of Quiz
    textSize(20)
    text("Result Of The Quiz")
    //call getContestantInfo( ) here
    getContestantInfo();

    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined){
      fill("Blue");

      //write code to add a note here
      textSize(20);
      text("*NOTE: Contestant who answerd correct are highlighted in green color!",130,230);
    }
    
      
    } 
      
    }

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns===allContestants[plr].answer)
          fill("Green");
        else
          fill("red");  
     }
      
    
  


