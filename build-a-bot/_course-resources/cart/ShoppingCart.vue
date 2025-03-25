<template>
  <div class="content">
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th class="robot-title">
            Robot
          </th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(robot, index) in cartStore.cart" :key="index">
          <td class="robot-title">
            <img :src="robot.head.imageUrl" /> {{ robot.head.title }}
          </td>
          <td class="cost">
            {{ toCurrency(robot.cost) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { toCurrency } from '../shared/formatters';
import { useCartStore } from '../stores/cartStore';

const cartStore = useCartStore();
</script>

<style scoped>
.content {
  font-size: 22px;
}
td,
th {
  padding: 5px;
}

.robot-title {
  text-align: left;
  padding-right: 200px;
}

.robot-title img {
  width: 50px;
  vertical-align: middle;
}
.cost {
  text-align: right;
}

td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 310px;
  height: 310px;
  padding: 5px;
}

.preview-content {
  border: 1px solid #999;
  padding: 10px;
}

.preview img {
  width: 70px;
  height: 70px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}
</style>
