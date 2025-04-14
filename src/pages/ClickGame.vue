<template>
  <div class="container-fluid min-vh-100 bg-dark text-white d-flex flex-column justify-content-center align-items-center">
    <h2 class="mb-4">🔥 Klik Bolanya Cepat!</h2>

    <div v-if="!gameStarted" class="text-center">
      <h4 class="mb-3">Pilih Level</h4>
      <div class="btn-group mb-4">
        <button class="btn btn-outline-success" @click="startGame(3000)">Easy</button>
        <button class="btn btn-outline-warning" @click="startGame(2000)">Medium</button>
        <button class="btn btn-outline-danger" @click="startGame(1000)">Hard</button>
      </div>
      <br />
      <router-link to="/" class="btn btn-outline-light mt-4">⬅ Kembali ke Menu</router-link>
    </div>

    <div v-else class="position-relative w-100 h-100">
      <h4>Score: {{ score }}</h4>
      <div
        v-if="ballVisible"
        class="ball"
        :style="{ top: ballY + 'px', left: ballX + 'px' }"
        @click="clickBall"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'

const score = ref(0)
const ballVisible = ref(false)
const ballX = ref(0)
const ballY = ref(0)
const gameStarted = ref(false)
let intervalId = null

function spawnBall() {
  const maxX = window.innerWidth - 100
  const maxY = window.innerHeight - 100
  ballX.value = Math.floor(Math.random() * maxX)
  ballY.value = Math.floor(Math.random() * maxY)
  ballVisible.value = true

  setTimeout(() => {
    ballVisible.value = false
  }, 1500)
}

function clickBall() {
  if (ballVisible.value) {
    score.value++
    ballVisible.value = false
  }
}

function startGame(speed) {
  gameStarted.value = true
  score.value = 0
  spawnBall()
  intervalId = setInterval(spawnBall, speed)
}

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
.ball {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ffdd57, #f39c12);
  box-shadow: 0 0 20px rgba(255, 223, 87, 0.8), inset -4px -4px 10px rgba(0,0,0,0.3);
  cursor: pointer;
  transition: transform 0.2s;
  z-index: 10;
}
.ball:hover {
  transform: scale(1.1);
}
</style>
