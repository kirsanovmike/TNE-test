<template>
  <div>
    <h3 class="table-name">Характеристики различных товаров</h3>
    <div class="overflow-table">
      <table class="table">
        <thead>
          <tr class="table__row">
            <th class="table__item-label-empty"></th>
            <th class="table__column-name">Характеристика 1</th>
            <th class="table__column-name">Характеристика 2</th>
            <th class="table__column-name">Характеристика 3</th>
            <th class="table__column-name">Характеристика 4</th>
            <th class="table__column-name">Характеристика 5</th>
            <th class="table__column-name">Характеристика 6</th>
            <th class="table__column-name">Характеристика 7</th>
            <th class="table__column-name">Характеристика 8</th>
            <th class="table__column-name">Характеристика 9</th>
            <th class="table__column-name">Характеристика 10</th>
          </tr>
        </thead>
        <tr
          class="table__row"
          v-for="(product, index) in products"
          :key="index"
        >
          <td class="table__row-name">{{ product.type }}</td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.name }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.price }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.name }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.price }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.price }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.price }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.price }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.price }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.price }}
            </div>
          </td>
          <td class="table__row-item">
            <div class="table__item-scroll">
              {{ product.price }}
            </div>
          </td>
        </tr>
      </table>
    </div>
    <button @click="showMoment">btn</button>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    products: {
      type: Array,
      required: true,
      default() {
        return [];
      },
    },
  },
  methods: {
    showMoment() {
      console.log(String(moment().format("DD MM YYYY HH:mm")));
    },
  },
};
</script>

<style lang="scss" scoped>
.overflow-table {
  height: 500px;
  width: 1000px;
  overflow: auto;
}
.table-name {
  margin: 30px 0 30px 0;
}

.overflow-table::-webkit-scrollbar {
  width: 10px;
  background: #959dad6c;
  border-radius: 8px 8px;
}
.overflow-table::-webkit-scrollbar-thumb {
  background: #59606d91;
  border-radius: 8px 8px;
}
.overflow-table::-webkit-scrollbar-thumb:hover {
  background: #455c83c9;
}
.table {
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
  border-radius: 0px 0px 8px 8px;
  padding: 10px;
  border-spacing: 20px 10px;

  &__row-item {
    padding: 12px 5px 12px 5px;
    box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.07);
    border-radius: 0px 0px 8px 8px;
  }

  &__item-label-empty {
    border: none;
    background-color: white;
  }

  &__column-name {
    position: sticky;
    top: 0;
    text-align: center;
  }

  &__row-name {
    font-weight: 700;
    position: sticky;
    left: 0;
  }

  &__item-scroll {
    max-height: 90px;
    display: flex;
    text-align: center;
    align-content: center;
    justify-content: center;
    overflow: auto;
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