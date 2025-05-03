function getRandomValue(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currRound: 0,
      winner: null,
      logMessages:[],
    };
  },

  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
        this.monsterHealth = 0
        this.playerHealth = 0
      } else if (value <= 0) {
        this.winner = "monster";
        this.playerHealth = 0;
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
        this.monsterHealth = 0
        this.playerHealth = 0
      } else if (value <= 0) {
        this.winner = "you";
        this.monsterHealth = 0
      }
    },
  },
  computed: {
    monsterHealthStyles() {
      return { width: `${this.monsterHealth}%` };
    },
    playerHealthStyles() {
      return { width: `${this.playerHealth}%` };
    },
  },
  methods: {
    startNewGame(){
        this.winner = null;
        this.monsterHealth = 100;
        this.playerHealth = 100;
        this.currRound = 0;
        this.logMessages = []
    },
    surrender(){
        this.winner = "monster"
    },
    attackMonster() {
      const attackValue = getRandomValue(12, 5);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attack", attackValue)
      this.attackPlayer();
      this.currRound += 1;
    },
    attackPlayer() {
      const attackValue = getRandomValue(15, 8);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attack", attackValue)
    },
    specialAttack() {
      if (this.currRound >= 3) {
        const attackValue = getRandomValue(25, 10);
        this.monsterHealth -= attackValue;
        this.addLogMessage("player", "special attack", attackValue)
        this.attackPlayer();
        this.currRound = 1;
      }
    },
    healPlayer() {
      this.currRound++;
      const healValue = getRandomValue(20, 8);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.addLogMessage("player", "heal", healValue)
      this.attackPlayer();
    },

    addLogMessage(who, what, damage){
        this.logMessages.unshift({
            who,
            what,
            damage,
        })
    }
  },
});

app.mount("#game");
