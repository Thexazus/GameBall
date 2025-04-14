<template>
    <div class="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      <h1 class="mb-5 text-center">🎮 Welcome to FunGame Zone</h1>
  
      <div class="row w-100 justify-content-center">
        <div class="col-md-4 mb-4">
          <router-link to="/click" class="btn btn-lg btn-outline-warning w-100 shadow">🔥 Klik Bola</router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/math" class="btn btn-lg btn-outline-success w-100 shadow">🧠 Hitung Cepat</router-link>
        </div>
        <div class="col-md-4 mb-4">
          <router-link to="/color" class="btn btn-lg btn-outline-info w-100 shadow">🎨 Tebak Warna</router-link>
        </div>
      </div>
    </div>
  </template>
  