import VueRouter,{Route} from 'vue-router'
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module 'vue/type/vue' {
  interface Vue {
    $router: VueRouter;
    $route: Route;
  }
}