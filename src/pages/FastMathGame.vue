<template>
  <div class="container-fluid min-vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center text-center">
    <!-- Belum Mulai -->
    <div v-if="!gameStarted && !gameOver">
      <h2 class="mb-4">🧠 Hitung Cepat</h2>
      <p>Pilih level kesulitan dan jawab sebanyak mungkin sebelum nyawa habis!</p>

      <div class="btn-group my-3">
        <button class="btn btn-outline-success" @click="startGame(5000)">Easy</button>
        <button class="btn btn-outline-warning" @click="startGame(3000)">Medium</button>
        <button class="btn btn-outline-danger" @click="startGame(2000)">Hard</button>
      </div>

      <router-link to="/" class="btn btn-outline-light mt-4">⬅ Kembali ke Menu</router-link>
    </div>

    <!-- Sedang Main -->
    <div v-else-if="gameStarted && !gameOver">
      <div class="d-flex justify-content-between align-items-center w-100 mb-3 px-3">
        <div>❤️: {{ lives }}</div>
        <div>⏱️: {{ timer / 1000 }}s</div>
        <div>🎯 Skor: {{ score }}</div>
      </div>

      <h3 class="mb-4">{{ currentQuestion }}</h3>

      <input
        type="number"
        class="form-control form-control-lg w-50 mx-auto text-center"
        v-model.number="userAnswer"
        @keyup.enter="checkAnswer"
        placeholder="Jawaban kamu"
        autofocus
      />

      <div class="mt-3">
        <button class="btn btn-primary" @click="checkAnswer">Jawab</button>
      </div>
    </div>

    <!-- Game Over -->
    <div v-else>
      <h2 class="text-danger mb-3">😵 Game Over</h2>
      <p>Skor kamu: {{ score }}</p>
      <button class="btn btn-light mt-3" @click="resetGame">Main Lagi</button>
      <router-link to="/" class="btn btn-outline-light mt-2 d-block">⬅ Kembali ke Menu</router-link>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue'

const gameStarted = ref(false)
const score = ref(0)
const lives = ref(3)
const currentQuestion = ref('')
const correctAnswer = ref(0)
const userAnswer = ref('')
const timer = ref(5000)
const countdown = ref(null)
const gameOver = ref(false)

function startGame(speed) {
  score.value = 0
  lives.value = 3
  timer.value = speed
  gameOver.value = false
  gameStarted.value = true
  generateQuestion()
  startCountdown()
}

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10 + 1)
  const num2 = Math.floor(Math.random() * 10 + 1)
  const op = Math.random() > 0.5 ? '+' : '×'

  currentQuestion.value = `${num1} ${op} ${num2}`
  correctAnswer.value = op === '+' ? num1 + num2 : num1 * num2
  userAnswer.value = ''
}

function checkAnswer() {
  if (parseInt(userAnswer.value) === correctAnswer.value) {
    score.value++
  } else {
    lives.value--
  }

  if (lives.value <= 0) {
    endGame()
  } else {
    generateQuestion()
    resetCountdown()
  }
}

function startCountdown() {
  countdown.value = setTimeout(() => {
    lives.value--
    if (lives.value <= 0) {
      endGame()
    } else {
      generateQuestion()
      startCountdown()
    }
  }, timer.value)
}

function resetCountdown() {
  clearTimeout(countdown.value)
  startCountdown()
}

function endGame() {
  gameOver.value = true
  gameStarted.value = false
  clearTimeout(countdown.value)
}

function resetGame() {
  startGame(timer.value)
}
</script>

<style scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
