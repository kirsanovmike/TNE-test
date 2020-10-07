<template>
  <div class="main">
    <div class="main__err">
      <h1 class="main__err-text">404</h1>
    </div>
    <div class="main__message">Упс... Ошибка</div>
    <router-link class="main__link-home" title="Домой" tag="p" to="/" v-html="'Домой'" />
  </div>
</template>

<script>
export default {
  name: "Error404",
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;

  &__err-text {
    font-size: 100px;
    color: red;
    margin-bottom: 40px;
    opacity: 0.8;
  }

  &__message {
    font-size: 70px;
    color: $base-color;
    opacity: 0.5;
    margin-bottom: 70px;
  }

  &__link-home {
    cursor: pointer;
    width: 120px;
    height: 60px;
    background-color: $base-color;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-size: 17px;
  }

  &__link-home:hover {
    color: rgb(196, 196, 196);
  }
}
</style>
