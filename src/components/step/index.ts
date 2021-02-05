import { PluginObject } from 'vue/types/plugin';
import { VueConstructor } from 'vue/types/vue';
import steps from './steps.vue';
import step from './step.vue';
const vueStep: PluginObject<VueConstructor> = {
    install : function(Vue: VueConstructor) {
        Vue.component('steps',steps)
        Vue.component('step',step)
    }
}
export default vueStep