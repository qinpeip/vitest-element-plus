<script setup lang="ts">
import { ref } from 'vue';
import { FormContance } from 'element-plus';

const formData = ref({
  name: '',
  password: '',
});

const formRef = ref<FormContance>();
const handleLogin = async () => {
  console.log('trigger login click');
  formRef.value.validate((valid) => {
    console.log('valid', valid);
  });
};
</script>

<template>
  <el-form :model="formData" ref="formRef">
    <el-form-item
      label="账号"
      prop="name"
      :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]"
    >
      <el-input v-model="formData.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="formData.password" type="password"></el-input>
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="handleLogin">登录</el-button>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

