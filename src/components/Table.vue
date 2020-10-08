<template>
  <div>
    <div class="overflow-table">
      <table class="table">
        <thead>
          <tr class="table__row">
            <th class="table__item-label-empty" />
            <th
              class="table__column-name"
              v-for="(count, index) in coutnOfColumns"
              :key="index"
            >
              {{ takeColumnName(index, columnsBy) }}
            </th>
          </tr>
        </thead>
        <tr class="table__row" v-for="(row, index) in rows" :key="index">
          <td class="table__row-name">{{ row }}</td>
          <td
            class="table__row-item"
            v-for="(count, i) in coutnOfColumns"
            :key="i"
          >
            <VHour v-if="columnsBy == 'hour'" />
            <VDay v-else-if="columnsBy == 'day'" />
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import VHour from "@/components/VHour";
import VDay from "@/components/VDay";

export default {
  components: {
    VHour,
    VDay,
  },
  props: {
    columnsBy: {
      type: String,
      required: true,
      default() {
        return "day";
      },
    },
    rows: {
      type: Array,
      required: true,
      deault() {
        return [];
      },
    },
    year: {
      type: Number,
      required: true,
      default() {
        return moment().format("YYYY");
      },
    },
    month: {
      type: String,
      required: true,
      default() {
        return "January";
      },
    },
  },
  computed: {
    coutnOfColumns() {
      let count;
      switch (this.columnsBy) {
        case "hour":
          count = 24;
          break;
        case "day":
          switch (this.month) {
            case "Апрель":
            case "Июнь":
            case "Сентябрь":
            case "Ноябрь":
              count = 31;
              break;
            case "Февраль":
              if (
                !(+this.year % 4 || (!(+this.year % 100) && +this.year % 400))
              )
                count = 29;
              else count = 28;
              break;
            default:
              count = 30;
              break;
          }
      }
      return count;
    },
  },
  methods: {
    takeColumnName(index, columnsBy) {
      if (columnsBy == "hour") return moment(`${index}`, "H").format("HH:mm");
      if (columnsBy == "day") return moment(`${index + 1}`, "D").format("DD");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style.scss";

.overflow-table {
  height: 500px;
  width: 1000px;
  overflow: auto;
  margin-top: 30px;
}

.overflow-table::-webkit-scrollbar {
  width: 10px;
  background: #959dad6c;
  border-radius: 5px 5px;
}
.overflow-table::-webkit-scrollbar-thumb {
  background: #59606d91;
  border-radius: 5px 5px;
}
.overflow-table::-webkit-scrollbar-thumb:hover {
  background: #455c83c9;
}
.table {
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  border-spacing: 20px 10px;
  border-collapse: collapse;

  &__row-item {
    padding: 12px 5px 12px 5px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.025);
    border-radius: 0px 0px 8px 8px;
  }

  &__column-name {
    padding: 10px 40px 10px 40px;
    position: sticky;
    top: 0;
    text-align: center;
    background: $base-color;
    color: white;
    border-radius: 5px;
    border: 1px solid white;
    z-index: 1;
  }

  &__row-name {
    padding: 10px 40px 10px 40px;
    font-weight: 700;
    position: sticky;
    left: 0;
    background: $base-color;
    color: white;
    z-index: 2;
    border-radius: 5px;
    border: 1px solid white;
  }

  &__item-label-empty {
    position: sticky;
    left: 0;
    top: 0;
    background-color: $base-color;
    border-radius: 5px;
    z-index: 3;
  }

  &__item-scroll::-webkit-scrollbar {
    width: 10px;
    background: #959dad6c;
    border-radius: 8px 8px;
  }
  &__item-scroll::-webkit-scrollbar-thumb {
    background: #59606d91;
    border-radius: 8px 8px;
  }
  &__item-scroll::-webkit-scrollbar-thumb:hover {
    background: #455c83c9;
  }
}
</style>