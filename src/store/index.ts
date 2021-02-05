import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
function setFistTag(list: any[]) {
  if (list.length == 1) {
      list[0].close = false;
  } else {
      list.some(a => {
          a.close = true
      })
  }
  return list;

}
const tagObj = {
  label: '',
  value: '',
  query: '',
  // num: '',
  close: true,
  // isLock:false
}
export default new Vuex.Store({
  state: {
    isCollapse:false,
    themeName:'theme-gradual',
    lockPasswd:'',
    isLock:true,
    tagList:[{
      label: "首页",
      value: "/home/index",
      query: "",
      close: false
    }],
    tagWel: {
      label: "首页",
      value: "/home/index",
      query: "",
      close: false
    },
    tag: tagObj,
    tagCurrent: []
  },
  mutations: {
    SET_COLLAPSE: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    SET_LOCK: (state) => {
      state.isLock = true;
    },
    SET_LOCK_PASSWD: (state, lockPasswd) => {
      state.lockPasswd = lockPasswd;
      console.log(state)
    },
    ADD_TAG: (state, action) => {
      state.tag = action;
      if (state.tagList.some(a => a.value === action.value)) return
      state.tagList.push({
          label: action.label,
          value: action.value,
          query: action.query,
          close: false
      })
      state.tagList = setFistTag(state.tagList);
    },
    DEL_TAG: (state, action) => {
      state.tagList.forEach((ele, num) => {
          if (ele.value === action.value) {
              state.tagList.splice(num, 1)
              state.tagList = setFistTag(state.tagList)
          }
      })
  },
    SET_TAG: (state, value) => {
      state.tagList.forEach((ele, num) => {
          if (ele.value === value) {
              state.tag = state.tagList[num];
          }
      });
    },
    SET_TAG_CURRENT: (state, tagCurrent) => {
      state.tagCurrent = tagCurrent;
    },
    DEL_TAG_OTHER: (state) => {
      state.tagList.forEach((ele, num) => {
          if (ele.value === state.tag.value) {
            state.tagList = state.tagList.slice(num, num + 1)
            state.tag = state.tagList[0];
            state.tagList[0].close = false;
          }
      })
    },
    DEL_ALL_TAG: (state) => {
      state.tag = tagObj;
      state.tagList = [];
      state.tagList.push(state.tagWel);
      state.tagList[0].close = false;
    },
    SET_THEME_NAME: (state,theme)=>{
      state.themeName = theme
    }
  },
  actions: {
  },
  modules: {
  }
})
