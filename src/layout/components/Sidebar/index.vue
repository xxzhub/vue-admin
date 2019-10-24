<template>
  <div :class="{'has-logo':showlogo}">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu :default-active="activeMenu"
               :collapse="isCollapse"
               :background-color="variables.menuBg"
               :unique-opened="false"
               :active-text-color="variables.menuActiveText"
               :text-color="variables.menuText"
               :coolapse-transtion="false"
               mode="vertical">
        <sidebar-item v-for="route in permission_route"
                      :key="route.path"
                      :item="route"
                      :base-path="route.path">
        </sidebar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables'
export default {
  components: {
    SidebarItem
  },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu () {
      const route = this.$route
      const { meta, path } = route

      return path
    },
    variables () {
      return variables
    }
  }
}
</script>