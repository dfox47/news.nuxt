<template>
  <el-dialog
    v-model="showModal"
    :before-close="onClickClose"
    class="news-subscribe"
    title="Subscribe"
  >
    <el-form
      ref="subscribeFormRef"
      :model="subscribeForm"
      :rules="subscribeRules"
    >
      <el-form-item label="Email" prop="email">
        <Input v-model="subscribeForm.email" placeholder="Enter your email" />
      </el-form-item>
    </el-form>

    <template #footer>
      <span class="dialog-footer">
        <Button size="large" type="outline" @click="onClickClose">Close</Button>
        <Button size="large" type="primary" @click="onClickSubscribe(subscribeFormRef)">Send</Button>
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

<style lang="scss">
.news-subscribe {
  max-width: 400px;
  width: 90%;
}
</style>