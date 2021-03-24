class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset=createButton("Reset")
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }
display()
{
    //var title = createElement('h1') // type of heading h1 - h6
    this.title.html("Harsha's Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

   // var input = createInput("Name"); // text box where you can enter the name of the player
    //var button = createButton('Play'); // play button

    this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 - 150 , displayHeight/2 );
    this.reset.position(displayWidth + 550, 20 );


    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();

        player.name = this.input.value();
        playerCount+=1; // as the players are entering this counter increments
        player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
  
})
this.reset.mousePressed(()=>{
  player.updateCount(0)
  game.update(0)
})

}
}
