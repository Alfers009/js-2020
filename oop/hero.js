class baseHero {
    health
    mana
    constructor(healt, mana){
        this.health = health 
        this.mana = mana 
    }
    isAlive() {
        return this.health > 0
    }
    getmana() {
        return this.mana
    }
    setMana(newMana) {
        if(newMana < 0) throw 'Invalid value for mana'
        this.mana = newMana
    }
    firePrimary() {}
    
    fireSecondary() {}
    
    reciveHit() { }

}
class Superman extends baseHero {
    firePrimary() {
        this.mana--
    }
    fireSecondary() {
        this.mana -= 2
    }
    reciveHit() {
        this.health -= 0.5
    }
}

class Batman extends baseHero {
    firePrimary() {
        this.mana--
    }
    fireSecondary() {
        this.mana -= 1.5
    }
    reciveHit() {
        if(this.mana < 50){
            this.health -= 1
        }else{
            this.health -= 0.5
        }
    }
}