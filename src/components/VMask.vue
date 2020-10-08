<template>
  <div>
    <textarea
      v-mask="'######'"
      type="text"
      nubmer="123456"
      v-model="number"
    />
  </div>
</template>

<script>
import Vue from "vue";
import VueMask from "v-mask";

Vue.use(VueMask);

export default {
  data() {
    return {
      number: ''
    }
  },
};
</script>

<style lang="scss" scoped>
textarea {
  resize: none;
  height: 20px;
  border: 2px solid rgb(63, 143, 248);
  border-radius: 5px;
  padding-left: 10px;
}

textarea:focus {
    outline: 0;
    background: rgb(212, 253, 217);
}
</style>