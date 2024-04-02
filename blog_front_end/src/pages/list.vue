<script setup lang="ts">

import {useUserStore} from "~/stores/useUserStore";
const userInfo=useUserStore().userInfo
console.log(userInfo)
</script>

<template>
<div>
<h1>list页面</h1>
  <ListItem></ListItem>
  <strong>
    姓名：{{userInfo.userName}}
    性别：{{userInfo.sex}}
  </strong>
</div>
</template>

<style scoped>

</style>