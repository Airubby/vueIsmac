<template>
    <div>
        <div class="meun-left" onclick="displeymenun(this)"><i class="icon-chevron-left"></i></div>
            <div class="conf-nav controls">
                <div class="w-tabbox-contents" id="menu" style="height: 100%;">
                    <el-tabs v-model="activeName"  >
                        <el-tab-pane label="设备目录" name="first" ></el-tab-pane>
                        <el-tab-pane label="设备地图" name="second" style="height:100%;" >
                            <div class="addr-penl" @dblclick="LoadJson(item.id)" v-for="(item,index) in addrdata">
                                <div class="addr-title">{{item.name}}</div>
                                <div class="addr-img" :style="'background:url(../template/'+item.id+'/'+item.thumbnailname+') 50% 50% / contain no-repeat'"></div>
                                <div class="addr-setting">
                                    <i class="icon-edit" @click="addrupdate(item)"></i>
                                    <i class="icon-pencil" @click="design(item.id)"></i>
                                    <i class="icon-trash" @click="addrdelete(item)"></i>
                                </div>
                            </div>

                            <div class="addr-penl add-addr" @click="add" >
                            <i class="icon-plus" ></i>
                            </div>

                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
            <!--画布-->

            <div id="canvas" :style="style" class="conf-work"    >
            </div>
            <div id="dialog">
                <el-dialog
                        title="电子地图"
                        :visible.sync="dialogVisible"
                        width="400px"
                        height="400px"
                        :before-close="handleClose">
                    <span>
                        <el-form ref="form" :model="form" label-width="80px">
                            <el-form-item label="地图名称">
                                <el-input v-model="form.name"></el-input>
                            </el-form-item>

                            <el-form-item label="站点">
                                <el-select v-model="form.addr_id" placeholder="请选择站点">
                                    <el-option v-for="item in addrall" :key="item.name" :label="item.name" :value="item.id">
                                    </el-option>
                                    <!--  <el-option label="机房" value="1"></el-option>
                                    <el-option label="机房" value="2"></el-option> -->
                                </el-select>
                            </el-form-item>
                            <el-form-item label="详情">
                                <el-input
                                        type="textarea"
                                        :rows="2"
                                        placeholder="请输入内容"
                                        v-model="form.content">
                                </el-input>
                            </el-form-item>

                        </el-form>

                    </span>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible=false">取 消</el-button>
                        <el-button type="primary" @click="handleAdd()">确 定</el-button>
                    </span>
                </el-dialog>

            </div>
    </div>
</template>

<script>
export default {
  
 data(){
  
  	return {
        
  	}
  },
  methods:{
      
  }
}
</script>