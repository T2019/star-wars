<template>
  <div class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__nav">
          <nav class="menu">
            <ul class="menu__list">
              <li class="menu__item">
                <router-link to="/" class="menu__link">Главная</router-link>
              </li>
              <li class="menu__item">
                <router-link to="/heroes" class="menu__link">Любимые герои</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="header__logo">
          <img src="../assets/logo.svg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
