<template>
  <textarea
    v-mask="'######'"
    type="text"
    nubmer="123456"
    v-model="number"
    placeholder="..."
  />
</template>

<script>
import Vue from "vue";
import VueMask from "v-mask";

Vue.use(VueMask);

export default {
  name: "VHour",
  data() {
    return {
      number: "",
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

textarea {
  resize: none;
  height: 20px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
  border-radius: 4px 4px 4px 4px;
  padding-left: 10px;
}

textarea:focus {
  outline: 0;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.4);
  border: 1px solid $base-color;
}
</style>