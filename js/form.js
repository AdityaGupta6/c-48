class Form {
    constructor() {
        this.name = createInput("Name");
        this.age = createInput("äge");
        this.button = createButton("Play");
        this.reset = createButton("Reset");

        this.greeting = createElement("h2")
        this.title = createElement("h1")

    }
    hide() {
        this.greeting.hide();
        this.title.hide()
        this.age.hide();
        this.name.hide();
        this.button.hide();

    }
    display() {
        console.log("Hi")
        this.name.position(displayWidth / 2, displayHeight / 2);
        this.age.position(displayWidth / 2, displayHeight / 2 + 50);
        this.button.position(displayWidth / 2, displayHeight / 2 + 100);
        this.reset.position(displayWidth/2+200, displayHeight/2-300 );

        this.title.html("Plant vs Zombies");
        this.title.position(displayWidth / 2, displayHeight / 2 - 200)
        this.button.mousePressed(() => {

            this.button.hide()
            this.name.hide()
            this.age.hide()
            player1.name = this.name.value()
            player1.age = this.age.value();

            playerCount += 1;
            player1.index = playerCount;
            player1.updateCount(playerCount);
            player1.update()
            this.greeting.html("Hello " + player1.name + " . You are " + player1.age + " years old .");
            this.greeting.position(displayWidth / 2, displayHeight / 2);
        })
        this.reset.mousePressed(() => {
            game1.updateState(0)
            player1.updateCount(0);


        })

    
    }   
}