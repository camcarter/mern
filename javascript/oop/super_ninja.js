class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName = () => console.log(this.name);
    showStats = () => console.log(this.name, this.health, this.speed, this.strength);
    drinkSake = () => this.health += 10;
}

class Sensei extends Ninja {
    constructor(name, wisdom = 10) {
        super(name, 200, 10, 10,);
        this.wisdom = wisdom;
        this.quote = [
            "Who knows the ways of the universe? Accident? Or destiny? That is the secret. - Master Oogway."
        ]
    }
    speakWisdom = () => {
        super.drinkSake();
        console.log(this.quote);
    }
}

const superSensei = new Sensei("Master Oogway");
superSensei.speakWisdom();
superSensei.showStats();

const ninja = new Ninja("Cam");
ninja.sayName();
ninja.showStats();