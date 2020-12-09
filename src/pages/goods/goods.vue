<template>
  <div>
    <!-- 添加按钮 -->
    <el-button type="primary">添加</el-button>
    <!-- 添加组件 -->
    <v-add :info='info'></v-add>
    <!-- 列表组件 -->
    <v-list></v-list>
  </div>
</template>
<script>
import vAdd from "./components/add";
import vList from "./components/list";
export default {
  components: {
    vAdd,
    vList,
  },
  data() {
    return {
        info: {
            isShow: true,
            title:'商品添加',
            isAdd:true,
        }
    };
  },
  methods: {},
  mounted() {},
};
</script>
<style scoped>
</style>