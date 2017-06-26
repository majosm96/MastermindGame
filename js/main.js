function FactoryPattern() {
    this.createPattern = function (type) {
        var pattern;
        //Chosee level of the game
        if (type === "beginner") {
            pattern = new Beginner();
        } else if (type === "intermediate") {
            pattern  = new Intermediate();
        } else if (type === "advanced") {
            pattern = new Advanced();
        }

        // //create new pattern based on level
        // pattern.create = function () {
        //   //new array for storage data
        //   var newPattern = [];
        //   //Array from constructor
        //   var arrayColors = this.arrayColors;
        //
        //   for ( var i = 0; i < arrayColors-1; i++ ) {
        //     // The following line removes one random element from arr
        //     // and pushes it onto new pattern
        //     newPattern.push(arrayColors.splice(Math.floor(Math.random()*arrayColors.length),1)[0]);
        //   }
        //   // Push the remaining item onto new pattern
        //   newPattern.push(arrayColors[0]);
        //   return newPattern;
        //   console.log(newPattern);
        // }

        return newPattern;
        console.log(pattern);
    }
}

var Beginner = function () {
    this.level = 1;
    this.arrayColors =  ['red', 'blue', 'white', 'green'];
};

var Intermediate = function () {
    this.level = 2;
    this.arrayColors = ['red', 'blue', 'white', 'green', 'black', 'yellow'];
};

var Advanced = function () {
    this.level = 3;
    this.arrayColors = ['red', 'blue', 'white', 'green', 'black', 'yellow', 'orange', 'purple'];
};

var factory = new FactoryPattern();

factory.createPattern("begginer");
