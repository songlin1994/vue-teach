<template>
  <div class="app-container">
    <el-form :model="skuForm" status-icon label-width="100px" >
      <el-form-item label="商品编码" prop="skuCode">
        <el-input v-model="skuForm.skuCode"/>
      </el-form-item>
      <el-form-item label="商品名称" prop="skuName">
        <el-input v-model="skuForm.skuName"/>
      </el-form-item>
      <el-form-item label="价格" prop="skuPrice">
        <el-input v-model="skuForm.skuPrice" type="number"/>
      </el-form-item>
      <el-form-item label="颜色" prop="color">
        <el-input v-model="skuForm.color" />
      </el-form-item>
      <el-form-item label="尺寸" prop="size">
        <el-input v-model="skuForm.size" />
      </el-form-item>
      <el-form-item label="数量" prop="qty">
        <el-input v-model="skuForm.qty" type="number"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(skuForm)">提交</el-button>
        <el-button @click="resetForm(skuForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { addSku } from '@/api/sku'

export default {
  name: 'Index',
  data() {
    return {
      skuForm: {
        skuCode: '',
        skuName: '',
        skuPrice: '',
        color: '',
        size: '',
        qty: ''
      }
    }
  },
  methods: {
    submitForm(skuForm) {
      addSku(skuForm).then(resp => {
        if (resp.code === 20000) {
          this.$notify({
            title: '成功',
            message: resp.msg,
            type: 'success'
          })
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
