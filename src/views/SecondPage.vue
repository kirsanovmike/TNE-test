<template>
  <div class="page-wrapper">
    <Table :columnsBy="columnsBy" :month="month" :rows="rows" />
  </div>
</template>

<script>
import Table from "@/components/Table";
export default {
  name: "SecondPage",
  data() {
    return {
      columnsBy: "day",
      month: "December",
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
        "User 10",
        "User 11",
        "User 12",
        "User 13",
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