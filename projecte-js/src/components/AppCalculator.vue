<template>
  <div class="calculator">
    <h2>Calculadora</h2>

    <!-- Pantalla de la calculadora -->
    <div class="screen">
      <input v-model="currentExpression" readonly />
    </div>

    <!-- Botons de la calculadora organitzats en disseny clàssic -->
    <div class="buttons">
      <button @click="clearDisplay" class="wide-button">C</button>
      <button @click="toggleSign">±</button>
      <button @click="chooseOperation('/')">÷</button>
      <button @click="appendNumber(7)">7</button>
      <button @click="appendNumber(8)">8</button>
      <button @click="appendNumber(9)">9</button>
      <button @click="chooseOperation('*')">×</button>
      <button @click="appendNumber(4)">4</button>
      <button @click="appendNumber(5)">5</button>
      <button @click="appendNumber(6)">6</button>
      <button @click="chooseOperation('-')">−</button>
      <button @click="appendNumber(1)">1</button>
      <button @click="appendNumber(2)">2</button>
      <button @click="appendNumber(3)">3</button>
      <button @click="chooseOperation('+')">+</button>
      <button @click="appendNumber(0)" class="wide-button">0</button>
      <button @click="appendDecimal">.</button>
      <button @click="calculate">=</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCalculator',
  data() {
    return {
      currentExpression: '',  // Emmagatzema tota l'operació visible a la pantalla
      isDecimalAdded: false,
    };
  },
  methods: {
    appendNumber(num) {
      if (this.currentExpression === '0' && num === 0) return;
      this.currentExpression += `${num}`;
    },
    chooseOperation(op) {
      if (this.currentExpression && !isNaN(this.currentExpression.slice(-1))) {
        this.currentExpression += ` ${op} `;
        this.isDecimalAdded = false;
      }
    },
    clearDisplay() {
      this.currentExpression = '';
      this.isDecimalAdded = false;
    },
    calculate() {
      try {
        this.currentExpression = eval(this.currentExpression.replace(/ /g, '')).toString();
      } catch (error) {
        this.currentExpression = 'Error';
      }
    },
    toggleSign() {
      if (this.currentExpression) {
        const expressionArray = this.currentExpression.trim().split(' ');
        const lastNumber = expressionArray.pop();
        if (!isNaN(lastNumber)) {
          const toggledNumber = (parseFloat(lastNumber) * -1).toString();
          expressionArray.push(toggledNumber);
          this.currentExpression = expressionArray.join(' ');
        }
      }
    },
    appendDecimal() {
      if (!this.isDecimalAdded) {
        this.currentExpression += '.';
        this.isDecimalAdded = true;
      }
    },
  },
};
</script>

<style scoped>
.calculator {
  width: 300px;
  margin: auto;
  padding: 20px;
  background-color: #2c3e50;
  border-radius: 10px;
  color: white;
  font-family: Arial, sans-serif;
}

.screen {
  text-align: right;
  margin-bottom: 20px;
}

.screen input {
  width: 100%;
  height: 50px;
  font-size: 24px;
  padding: 10px;
  text-align: right;
  background-color: #34495e;
  border: none;
  color: white;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  padding: 15px;
  font-size: 18px;
  background-color: #16a085;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1abc9c;
}

.wide-button {
  grid-column: span 2; /* Amplia el botó per ocupar dues columnes */
}
</style>