<template>
  <div
    class="container-fluid min-vh-100 text-white py-5"
    style="background: linear-gradient(to bottom, #060f9c, #270164);"
  >
    <!-- Header -->
    <header class="d-flex align-items-center px-4 py-3">
      <img src="/game.png" alt="Logo" height="40" class="me-2" />
      <h4 class="m-0">Brainsonic</h4>
    </header>

    <!-- Content -->
    <main class="flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center px-3">
      <h1 class="fw-bold display-5 mb-3">Welcome to Brainsonic! Let’s have some fun</h1>
      <h4 class="mb-5">Choose 1 challenge</h4>

      <!-- Cards Section -->
      <div class="d-flex justify-content-center gap-4 flex-wrap">
        <!-- Catch the Ball -->
        <div class="text-center d-flex flex-column align-items-center">
          <img src="/ball.png" class="game-thumb mb-3" alt="Catch the Ball" />
          <h5 class="text-white">Catch the Ball!</h5>
          <p class="text-muted small">Click the ball as fast as you can</p>
          <router-link to="/click" class="btn btn-primary w-100 mt-2">Let's Play</router-link>
        </div>

        <!-- Math Game -->
        <div class="text-center d-flex flex-column align-items-center">
          <img src="/math.png" class="game-thumb mb-3" alt="Math Game" />
          <h5 class="text-white">MathGame</h5>
          <p class="text-muted small">Count as fast as you can!</p>
          <router-link to="/math" class="btn btn-primary w-100 mt-2">Let's Play</router-link>
        </div>

        <!-- Guess the Color -->
        <div class="text-center d-flex flex-column align-items-center">
          <img src="/color.png" class="game-thumb mb-3" alt="Guess the Color" />
          <h5 class="text-white">Guess the Color</h5>
          <p class="text-muted small">Train your color memory skills</p>
          <router-link to="/color" class="btn btn-primary w-100 mt-2">Let's Play</router-link>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="text-center py-3 small text-white-50">
      © 2025 Brainsonic. Rae's rights reserved
    </footer>
  </div>
</template>

<style scoped>
.btn-primary {
  background-color: #005eff;
  border: none;
  transition: 0.3s ease-in-out;
  box-shadow: 0 0 8px #007bff;
}

.btn-primary:hover {
  background-color: #007bff;
  transform: scale(1.05);
  box-shadow: 0 0 15px #00c3ff, 0 0 25px #00c3ff;
}
.game-thumb {
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1 / 1;
  object-fit: contain;
}

.d-flex > div {
  width: 220px;
}


</style>
