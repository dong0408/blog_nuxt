<template>
<!--  login-->
  <div class="bg-blue full-screen grid parent-box ">
<!-- 左侧   -->
    <div class="left-column"></div>
<!--  右侧  -->
    <div class="right-column flex items-center">
      <!-- 姓名-->
      <el-form :model="form" label-width="auto" style="max-width: 600px">
        <el-form-item label="Name">
          <el-input v-model="form.username" />
        </el-form-item>
        <!--    邮箱-->
        <el-form-item label="password">
          <el-input v-model="form.password" />
        </el-form-item>
        <div class="tip">没有账号，前去注册</div>
        <el-form-item >
          <el-button  type="primary" @click="onSubmit">login</el-button>
<!--          <el-button>register</el-button>-->
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import {Buffer} from "unenv/runtime/node/buffer/_buffer";
import  {login} from "~/api/auth";
import from = Buffer.from;
import type {LoginUser} from "~/types/register";

// do not use same name with ref
const form = reactive<LoginUser>({
  username: '',
  password: '',
})

const onSubmit = async() => {
const res=  await login(form)
  console.log(res)

  localStorage.setItem("access_token", res.data.accessToken);
  localStorage.setItem("refresh_token", res.data.refreshToken);
  localStorage.setItem("user_info", JSON.stringify(res.data.userInfo));


  return navigateTo('list')
}
</script>

<style scoped  >
.parent-box {
  grid-template-columns: repeat(10, auto); /* 划分成5份等宽 */
}
.left-column {
  grid-column: span 7; /* 占用3列 */
  background-color: lightblue;
}

.right-column {
  grid-column: span 3; /* 占用2列 */
  background-color: lightblue;
}
.tip{
  font-size: 12px;
  margin-top: -16px;
  margin-left: 100px;
  margin-bottom: 20px;
  color: red;
}
</style>