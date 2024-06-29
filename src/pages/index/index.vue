<script setup>
import { useCounterStore } from "@/store/counter"
const counter = useCounterStore()
counter.count++
counter.$patch({ count: counter.count + 1 })
counter.increment()
</script>

<template>
  <div class="color">Current Counts: {{ counter.count }}</div>
</template>

<style scoped lang="scss">
.color {
  color: red;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
