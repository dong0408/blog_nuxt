<template>
<!--  login-->
  <div class="bg-blue full-screen grid parent-box ">
<!-- 左侧   -->
    <div class="left-column"></div>
<!--  右侧  -->
    <div class="right-column flex items-center">
      <!-- 姓名-->
      <el-form :model="form" label-width="auto" style="max-width: 600px" ref="ruleFormRef" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="昵称" prop="nickName">
          <el-input v-model="form.nickName" />
        </el-form-item>
        <!--    密码-->
        <el-form-item label="密码" prop="password">
          <el-input v-model.trim="form.password" type="password" />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input v-model="form.confirmPassword" type="password"/>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" />
        </el-form-item>
        <el-form-item label="验证码" prop="captcha">
          <div class="flex">
          <el-input v-model="form.captcha" class="mr-2" /> <el-button type="primary" @click="sendCaptcha">发送验证码</el-button>
          </div>
        </el-form-item>
        <el-form-item class="grid justify-center">
          <el-button  type="primary" @click="onSubmit(ruleFormRef)">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import {getCaptcha, register} from "~/api/auth";
import type {RegisterUser} from "~/types/register";
import type { FormInstance, FormRules } from 'element-plus'

// do not use same name with ref
const form = reactive<RegisterUser>({
  username: '',
  nickName: '',
  password: '',
  confirmPassword: '',
  email: '',
  captcha: '',
})

const ruleFormRef = ref<FormInstance>()
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请填写密码'))
  } else {
    if (form.password !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validateConfirmPass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== form.password) {
    callback(new Error("两个输入不匹配!"))
  } else {
    callback()
  }
}
const rules=reactive<FormRules<RegisterUser>>({
  username:[
    {required:true,message:'请填写用户名',trigger:'blur'},
    {min:1,max:20,message:'我知道你很有想法，但是用户名请控制在1-20个',trigger:'blur'}
  ],
  nickName:[
    // {required:true,message:'请填写用户名',trigger:'blur'},
    {min:1,max:20,message:'我知道你很有想法，但是用户名请控制在1-20个',trigger:'blur'}
  ],
  password:[
    { required:true,validator: validatePass, trigger: 'blur' }
  ],
  confirmPassword:[
    {required:true,validator:validateConfirmPass,trigger:'blur'}
  ],
  email:[
    {required:true,message:'请输入正确的邮箱，',trigger:'blur'},
    {type:'email',message:'请输入正确的电子邮件地址',trigger:['blur','change']},
  ],
  captcha:[
    {required:true,message:'请前往邮箱拿到验证码，',trigger:'blur'},
  ],
})

const onSubmit = async(formEl:FormInstance | undefined) => {
 if(!formEl)return
  await  formEl.validate((valid,fields)=>{
    if(valid){
       register(form)
      ElMessage({
        message: '注册成功',
        type: 'success',
      })
     return navigateTo('login')
    }else{
      console.log('error submit!', fields)
    }
  })

}

const sendCaptcha=async ()=>{
   await getCaptcha(form.email)
    ElMessage({
      message: '验证码发送成功',
      type: 'success',
    })
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
.grid{
  display: grid !important;
}
</style>