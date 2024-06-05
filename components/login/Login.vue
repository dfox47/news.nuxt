<template>
  <div class="login">
    <Section>
      <Heading>Авторизация</Heading>

      <div class="login__form">
        <el-form
          ref="ruleFormRef"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
          class="demo-ruleForm"
        >
          <el-form-item label="Email" prop="email">
            <Input v-model="ruleForm.email" size="large"/>
          </el-form-item>

          <el-form-item label="Password" prop="password">
            <Input v-model="ruleForm.password" type="password" size="large"/>
          </el-form-item>

          <el-form-item>
            <Button  type="primary" @click="onClicksubmitForm(ruleFormRef)" size="large">
              Отправить
            </Button>

            <Button type="outline" @click="onClickresetForm(ruleFormRef)" size="large">
              Сбросить
            </Button>
          </el-form-item>
        </el-form>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { Section, Input, Button, Heading } from "~/shared";

const ruleFormRef = ref()

const ruleForm = reactive({
  email: '',
  password: ''
})

const rules = reactive({
  email: [
    {
      required: true,
      message: 'Please input your email',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: 'Please input a valid email address',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input your password',
      trigger: 'blur'
    },
    {
      min: 6,
      message: 'Password must be at least 6 characters long',
      trigger: 'blur'
    }
  ]
})

const onClicksubmitForm = (formEl: any) => {
  if (!formEl) return

  formEl.validate((valid: any) => {
    if (valid) {
      console.log('success')
    } else {
      console.log('error')
      return false
    }
  })
}

const onClickresetForm = (formEl: any) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="scss">
.login {
  height: 100%;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  &__form {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    padding: 24px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
  }
}
</style>