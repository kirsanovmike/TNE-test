<template>
  <div class="header-nav">
    <div class="page-wrapper">
      <div class="header-nav__nav-row">
        <div class="header-nav__elem">
          <router-link to="/" 
            ><img src="@/img/tneImage.jpg" alt="logo" title="Домой"
          /></router-link>
        </div>
        <div class="header-nav__elem">
          <router-link
            active-class="header-nav__link-active"
            class="header-nav__link"
            tag="a"
            to="/page1"
            v-html="'Страница 1'"
            title="Страница 1"
          />
        </div>
        <div class="header-nav__elem">
          <router-link
            active-class="header-nav__link-active"
            class="header-nav__link"
            tag="a"
            to="/page2"
            v-html="'Страница 2'"
            title="Страница 2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style lang="scss">
@import "@/assets/style.scss";
.header-nav {
  width: 100%;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
  border-radius: 0px 0px 8px 8px;
  // .header-nav__nav-row
  &__nav-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  // .header-nav__elem
  &__elem {
    margin: 10px 100px 10px 0;
  }
  &__elem:last-child {
    margin-right: 0;
  }
  // .header-nav__link
  &__link {
    text-decoration: none;
    color: $base-color;
    font-weight: 700;
  }
  &__link:hover {
    color: rgb(0, 61, 105);
  }
  &__link-active {
    text-decoration: underline;
    color: rgb(0, 61, 105);
  }
}
</style>