<template>
  <div class="page-wrapper">
    <Table :columnsBy="columnsBy" :month="month" :rows="rows" />
  </div>
</template>

<script>
import Table from "@/components/Table";
export default {
  name: "FirstPage",
  data() {
    return {
      columnsBy: "hour",
      month: "october",
      rows: [
        "User 1",
        "User 2",
        "User 3",
        "User 4",
        "User 5",
        "User 6",
        "User 7",
        "User 8",
        "User 9",
      ],
    };
  },
  components: {
    Table,
  },
};
</script>

<style lang="scss" scoped>
</style>