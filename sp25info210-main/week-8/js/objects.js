const person = {
    //properties
    name: "Ada",
    hp: 5,
    def: 7,
    atk: 4,
    spd: 2,

    //method (functions that belong to this object)
    attack(enemyDef){
        const dmg = this.atk - enemyDef;
        if (dmg <= 0) {
            return 0;
        } else {
            return dmg;
        }

    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },
};

const enemy = {
    //properties
    name: "enemy",
    hp: 7,
    def: 9,
    atk: 5,
    spd: 3,

    //method (functions that belong to this object)
    attack(){
        return this.atk;
    },

    takeDamage(damageAmount) {
        this.hp -= damageAmount;
    },
};

//attacks slime


const AdDmg = person.attack(enemy.def);
console.log("Slime HP", enemy.hp);

enemy.takeDamage(AdDmg);
console.log("Slime HP:", enemy.hp);