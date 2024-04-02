<script setup lang="ts">

</script>

<template>
  <ul>
    <li>
      <el-button @click="ElMessage('hello')">button</el-button>
      <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
      <LazyElButton type="warning">lazy button</LazyElButton>
      <NuxtLink to="/111">111</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/222">222</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/333">333</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/444">444</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/555">555</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/666">666</NuxtLink>
    </li>
  </ul>
</template>

<style scoped>

</style>