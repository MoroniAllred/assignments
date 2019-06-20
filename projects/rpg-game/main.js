const readline = require("readline-sync")

///////////////
//global variables

let endGame = false

/////////////////
//player stats
const player = {
    name: "",
    health: 100,
    attack: function(){
        return Math.floor(Math.random() * 6)
    },
    invitory: [],
    radioPices: [],
}

walkChoice = ["walk", "stats"]

////////////////
// walk functions
function walk(){
    if(player.radioPices.length === 6){
        console.log(`
With this radio pice you are able to make a working radio! 

With the radio working you are able to pick up a radio wave from a fort.

The fort is offering a save haven from the Zombies.

With your experance aganst the Zombes you were able to make it to the fort easy.

Thank you ${player.name} for playing survival!`)
    return endGame = true
    }
    const option = readline.keyInSelect(walkChoice, "whould you like to walk or cheack your stats? ")
     
    if(option === 0){
        console.clear()
       const randomize = Math.floor(Math.random() * 3) 
        if(randomize === 0){
           const currentEnemy = enemyMaker()
           console.clear()
           console.log(`While walking you have stumbled into a ${currentEnemy.name}!`)
           battleUp(currentEnemy)
       }else if(randomize === 1){
            loot()
       }else if(randomize === 2){
            clearPath()
       }
    } else if(option === 1){
        console.clear()
        console.log(`Your health is ${player.health}`)
        console.log(`You have found ${player.invitory} 
and ${player.radioPices.length} radio pices.`)
        
    } else {
        console.clear()
        console.log("please select 1 or 2 to continue with the game.")
    }
} 

////////////
//eney stats
function Enemy(name, health, attack){
    this.name = name
    this.health = health
    this.attack = attack
}

/////////////
//enemy creatore
function enemyMaker(){
    const randomize = Math.floor(Math.random() * 3)
    if(randomize === 0){
        return new Enemy("Febal zombie", 10, Math.floor(Math.random() * 3))
    }else if(randomize === 1){
        return new Enemy("Zombie", 25, Math.floor(Math.random() * 6))
    }else{
        return new Enemy("Soldier zombie", 50, Math.floor(Math.random() * 11))
    }
}

////////////
//batting function
function battleUp(enemy){
     while(enemy.health > -7){
        if(player.health <= 0){
            console.clear()
            console.log(`That attack really hurt! your head starts to spin and you vison narrows.
You fall to your knees. the ${enemy.name} takes this opurtunity to finish you off!`) 
        return endGame = true
    }else if(enemy.health<=0){
        console.clear()
         console.log(`Congradulations! ${player.name} you have killed the ${enemy.name}! 
On the Zombie you find a pice of a radio and regained 10 health.`)
                player.health += 10
                player.radioPices.push("radio pice")
                return
            }  
        console.log(`The ${enemy.name} health is  health: ${enemy.health}`)
        console.log(`your health is health: ${player.health}`)
        const doYouFight = readline.keyInSelect(["fight", "run"], "Do You wish to fight it or run away?")
        
        if(doYouFight === 0){
            const playerAttack = player.attack()
            enemy.health -= playerAttack
            player.health -= enemy.attack
        }else if(doYouFight === 1){
            const runAway = Math.floor(Math.random() * 2)
            if(runAway === 0){
                console.clear()
                console.log(`you were able to slip away from the ${enemy.name}`)
                return
            }else{
                player.health -= enemy.attack
                console.clear()
                console.log(`You turn to run but the ${enemy.name} atacked and you took ${enemy.attack} points of your health while your back was turned!`)
            }
        }
    }
}

///////////
//loot function
function loot(){
    const randomize = Math.floor(Math.random() * 3)
    if(randomize === 0){
        console.clear()
        console.log(`In the middle of a alley you find dollar... 
You are gready so you pocket it!`)
        player.invitory.push("dollar")
    }else if(randomize === 1){
        console.clear()
        console.log(`In the street you find a bandage... 
Who cares if it was in the street it is clean enough for you!`)
        player.invitory.push("bandage")
    }else{
        console.clear()
        console.log(`You find a newspaper that says
"THE ZOMBIE APOCOLIPSE HAS HAPPENED!!!"...
Who knew!`)
    }
}

////////////
//clear path
function clearPath(){
    console.clear()
    console.log("The path is clear. so now what?")
}
    


///////////////
//welcome text
player.name = readline.question("Hello! What is your name player? ")
console.clear()
console.log(`
Welcome ${player.name} to The Survival!

Well ${player.name} it has happend. The Zombies have over riden the world.`)



//////////////
// game play
while(!endGame){
    walk()
}
