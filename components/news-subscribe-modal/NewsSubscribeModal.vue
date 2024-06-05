<template>
  <el-dialog
    v-model="showModal"
    title="Подпишитесь на рассылку"
    :before-close="onClickClose"
    width="30%"
  >
    <el-form
      ref="subscribeFormRef"
      :model="subscribeForm"
      :rules="subscribeRules"
      label-width="100px"
    >
      <el-form-item label="Email" prop="email">
        <Input v-model="subscribeForm.email" placeholder="Введите email" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <Button size="large" type="outline" @click="onClickClose">Закрыть</Button>
        <Button size="large" type="primary" @click="onClickSubscribe(subscribeFormRef)">Отправить</Button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref, defineModel } from 'vue'
import { Button, Input } from "~/shared";

const showModal = defineModel(false)
const subscribeFormRef = ref(null)
const subscribeForm = reactive({
  email: ''
})
const subscribeRules = reactive({
  email: [
    {
      required: true,
      message: 'Please enter your email',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: 'Please enter a valid email address',
      trigger: 'blur'
    }
  ]
})

const onClickSubscribe = (formEl) => {
  if (!formEl) return

  formEl.validate((valid) => {
    if (valid) {
      console.log('success')
      onClickClose()
    } else {
      console.log('error')
    }
  })
}

const onClickClose = () => {
  showModal.value = false
}
</script>