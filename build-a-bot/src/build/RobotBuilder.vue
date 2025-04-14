<template>
<div>
  <diV class="add-to-cart-wrapper">
    <button class="add-to-cart" @click="addToCatt()">
      Add To Card
    </button>
    <div>
      cost:{{ toCurrency(cost) }}
    </div>
  </diV>
  <div class="top-row">
    <div class="top part">
      <!--  v-once  on;y render one time -->
        <!-- v-show == v-if show and hide element
        v-show:display none
        v-if:delete span
        -->
      <div class="robot-name">
        {{ selectedRobot.head.title }}
      <span v-if="selectedRobot.head.onSale" class="sale">sale</span>
      </div>
      <img :src="selectedRobot.head.imageUrl" alt="head" />
      <button @click="selectPrevHead" class="prev-selector">&#9668;</button>
      <button @click="selectNextHead" class="next-selector">&#9658;</button>
    </div>
  </div>
  <div class="middle-row">
    <div class="left part">
      <img  :src="selectedRobot.leftArm.imageUrl" alt="left arm" />
      <button @click="selectPrevlefttArm" class="prev-selector">&#9650;</button>
      <button @click="selectNexLeftArm" class="next-selector">&#9660;</button>
    </div>
    <div class="center part">
      <img  v-bind:src="selectedRobot.torsos.imageUrl" alt="torso" />
      <button  @click="selectPrevTorso" class="prev-selector">&#9668;</button>
      <button  @click="selectNextTorso"  class="next-selector">&#9658;</button>
    </div>
    <div class="right part">
      <img  v-bind:src="selectedRobot.rightArm.imageUrl" alt="right arm" />
      <button @click="selectPrevRightArm" class="prev-selector">&#9650;</button>
      <button @click="selectNextRightArm"  class="next-selector">&#9660;</button>
    </div>
  </div>
  <div class="bottom-row">
    <div class="bottom part">
      <img  v-bind:src="selectedRobot.bases.imageUrl" alt="base" />
      <button @click="selectPrevBase" class="prev-selector">&#9668;</button>
      <button @click="selectNextBase"  class="next-selector">&#9658;</button>
    </div>
  </div>
</div>
<div>
<h1>Cart</h1>
<table>
  <thead>
    <tr>
      <th>
        Robot
      </th>
      <th>
        cost
      </th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(robot,index) in cart"  :key="index">
      <td>{{ robot.head.title }}</td>
      <td>{{ toCurrency(robot.cost) }}</td>
    </tr>
  </tbody>
</table>
</div>
  </template>
<script setup>
import {
  computed, ref, reactive, onMounted,
} from 'vue';
import parts from '../data/part';
import { toCurrency } from '../shared/formatters';

onMounted(() => {
  console.log('created');
});
const availableParts = parts;
const partsIndex = ref({
  head: 0,
  leftArm: 0,
  rightArm: 0,
  bases: 0,
  torsos: 0,
});
const cart = reactive([]);
function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  debugger;
  const incrementedIndex = index + 1;
  return incrementedIndex > length + 1 ? 0 : incrementedIndex;
}
const selectedRobot = computed(() => {
  console.log('data method');
  return {
    head: availableParts.heads[partsIndex.value.head],
    leftArm: availableParts.arms[partsIndex.value.leftArm],
    rightArm: availableParts.arms[partsIndex.value.rightArm],
    torsos: availableParts.torsos[partsIndex.value.torsos],
    bases: availableParts.bases[partsIndex.value.bases],
  };
});

const addToCatt = () => {
  debugger;
  const robot = selectedRobot.value;
  const cost = robot.head.cost +
          robot.rightArm.cost +
          robot.leftArm.cost +
          robot.rightArm.cost +
          robot.torsos.cost +
          robot.bases.cost;
  cart.push({ ...robot, cost });
};
const selectNextHead = () => {
  partsIndex.value.head = getNextValidIndex(
    partsIndex.value.head,
    availableParts.heads.length,
  );
};
const selectPrevHead = () => {
  partsIndex.value.head = getPreviousValidIndex(
    partsIndex.value.head,
    availableParts.heads.length,
  );
};
const selectNexLeftArm = () => {
  partsIndex.value.leftArm =
       getNextValidIndex(partsIndex.value.leftArm, availableParts.arms.length);
};
const selectPrevlefttArm = () => {
  partsIndex.value.leftArm
      = getPreviousValidIndex(partsIndex.value.leftArm, availableParts.arms.length);
};
const selectNextTorso = () => {
  partsIndex.value.torsos =
       getNextValidIndex(partsIndex.value.torsos, availableParts.torsos.length);
};
const selectPrevTorso = () => {
  partsIndex.value.torsos =
      getPreviousValidIndex(partsIndex.value.torsos, availableParts.torsos.length);
};
const selectPrevRightArm = () => {
  partsIndex.value.rightArm =
      getPreviousValidIndex(partsIndex.value.rightArm, availableParts.arms.length);
};
const selectNextRightArm = () => {
  partsIndex.value.rightArm =
       getNextValidIndex(partsIndex.value.rightArm, availableParts.arms.length);
};
const selectNextBase = () => {
  partsIndex.value.bases =
      getNextValidIndex(partsIndex.value.bases, availableParts.bases.length);
};
const selectPrevBase = () => {
  partsIndex.value.bases =
      getPreviousValidIndex(partsIndex.value.bases, availableParts.bases.length);
};

</script>
<style scoped>
.part {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid #aaa;
}

.part img {
  width: 200px;
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.top {
  border-bottom: none;
}

.left {
  border-right: none;
}

.right {
  border-left: none;
}

.left img {
  transform: rotate(-90deg);
}

.right img {
  transform: rotate(90deg);
}

.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 206px;
}

.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 206px;
}

.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}

.robot-name{
  font-size: 15px;
  align-items: center;
  position: absolute;
  width: 100%;
  top: -25px;
  text-align: center;
}
.sale{
  color: red
}
.add-to-cart-wrapper{
  position: relative;

}
.add-to-cart{
  position: absolute;
  right: 30px;
  padding: 3px;

font-size: 16px;
width: 220px;
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
