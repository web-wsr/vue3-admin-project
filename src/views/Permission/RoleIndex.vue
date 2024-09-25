<script setup>
</script>

<template>
    <div class="container">
        <div class="app-container">
            <!-- 角色管理内容 -->
            <div class="role-operate">
                <el-button size="small" type="primary">添加角色</el-button>
                 <!-- 放置table表格 -->
             <el-table style="width: 100%">
                <el-table-column align='center' label="id"></el-table-column>
                <el-table-column align='center' label="角色名称"></el-table-column>
                <el-table-column align='center' label="角色描述"></el-table-column>
                <el-table-column align='center' label="操作"></el-table-column>
             </el-table>
            <!-- 放置分页组件 -->
            <!-- <el-row type="flex" style="height: 60px" align="middle" justify="end">
                <el-pagination layout="prev, pager, next" :total="50" />
            </el-row> -->
            </div>
           
        </div>
    </div>
</template>

<style lang="less" scoped>

   .app-container {
    width: calc(100% - 5px);
    padding: 5px;
    }
    .role-operate{
        padding: 10px;
        background-color: #fff;
    }
</style>