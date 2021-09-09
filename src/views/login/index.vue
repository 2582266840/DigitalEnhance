
<template>
  <div class="app-container">
      <el-row>
          <el-col :span='8' :offset="8">
              <!-- <el-upload
                ref="upload"
                :auto-upload="false"
                limit=1
                class="picture-card"
                action="10.22.28.84:8000/photo"
                name="headPortrait"
                :file-list="show_img"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload> -->
                <el-upload
                  imit=1 
                  class="upload-demo"
                  ref="upload"
                  drag
                  name="headPortrait"
                  action="http://10.22.28.84:8000/photo"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  multiple>
                  <i class="el-icon-upload"></i>
                  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
                  <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                  </el-dialog>
                  </el-col>
                  
      </el-row>
      <div class="demo-image">
        <div class="block" v-for="fit in fits" :key="fit">
          <span class="demonstration">{{ fit }}</span>
          <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :fit="fit"></el-image>
        </div>
      </div>
      <el-row>
          <el-col :span='0' :offset="9">
              <el-button type="primary" @click="submitUpload">上传<i class="el-icon-upload el-icon--right"></i></el-button>
          </el-col>
      </el-row>
        <h3>处理列表</h3>
        <el-col :span="5" v-for="o in photoList" :key="o" :offset="index > 0 ? 2 : 0" >
           <el-image style="width: 300px; height: 300px"  :src="require('E://图片清晰化//ESRGAN//ESRGAN//inputs//'+o)"></el-image>
        </el-col>
      <el-row>
        
      </el-row>
        <h3>已处理列表</h3>
        <el-col :span="5" v-for="o in photoedList" :key="o" :offset="index > 0 ? 2 : 0" >
           <el-image style="width: 300px; height: 300px"   :src="require('E://图片清晰化//ESRGAN//ESRGAN//results//'+o)"></el-image>
        </el-col>
  </div>
</template>

<script>
import{input,output}from '@/api/photo'
import {
    getList,
    saveUserdata,
    banUser,
  } from '@/api/userManager'
export default {
  data() {
      return {
        photoList:[],
        photoedList:[],
        show_img:[],
      }
  },
  created() {
      this.fetchData()
    },
  methods:{
    fetchData() {
       input().then(response => {
          console.log("response.data")
          this.photoList=response.data
        })
      output().then(response =>{
        console.log("response.data")
        console.log(response.data)
        this.photoedList=response.data
      })
    },
      submitUpload() {
        this.$refs.upload.submit();
      }
  }
}
</script>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 178px;
    height: 178px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
    width: 178px;
    height: 178px;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>