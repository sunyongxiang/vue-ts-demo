import {Route} from 'vue-router'
export function validatenull(val: any): boolean {
    if (typeof val == 'boolean') {
        return false;
    }
    if (val instanceof Array) {
        if (val.length == 0) return true;
    } else if (val instanceof Object) {
        if (JSON.stringify(val) === '{}') return true;
    } else {
        if (val === 'null' || val === null || val === 'undefined' || val === undefined || val === '') return true;
        return false;
    }
    return false;
}
export const resolveUrlPath = (url: string, name?: string): string => {

    let reqUrl = url;
    if (url.indexOf("http") != -1 || url.indexOf("https") != -1) {
        reqUrl = `/myiframe/urlPath?src=${reqUrl}&name=${name}`;
    } else {
        reqUrl = `${reqUrl}`;
    }
    return reqUrl;
};
export const setUrlPath = ($route: Route): string => {
    let value: any;
    if ($route.query.src) {
        value = $route.query.src;
    } else {
        value = $route.path;
    }
    return value;
}
// export const fullscreenToggel = () => {
//     console.log(fullscreenEnable())
//     if (fullscreenEnable()) {
//         exitFullScreen();
//     } else {
//         reqFullScreen();
//     }
// };
/**
 * esc监听全屏
 */
// export const listenfullscreen = (callback) => {
//     function listen() {
//         callback()
//     }
//     document.addEventListener("fullscreenchange", function() {
//         listen();
//     });
//     document.addEventListener("mozfullscreenchange", function() {
//         listen();
//     });
//     document.addEventListener("webkitfullscreenchange", function() {
//         listen();
//     });
//     document.addEventListener("msfullscreenchange", function() {
//         listen();
//     });
// };
// /**
//  * 浏览器判断是否全屏
//  */
// export const fullscreenEnable = () => {
//     var isFullscreen = document.fullscreenEnabled ||
//         window.fullScreen ||
//         document.mozFullscreenEnabled ||
//         document.webkitIsFullScreen;
//     return isFullscreen;
// }

// /**
//  * 浏览器全屏
//  */
// export const reqFullScreen = () => {
//     if (document.documentElement.requestFullScreen) {
//         document.documentElement.requestFullScreen();
//     } else if (document.documentElement.webkitRequestFullScreen) {
//         document.documentElement.webkitRequestFullScreen();
//     } else if (document.documentElement.mozRequestFullScreen) {
//         document.documentElement.mozRequestFullScreen();
//     }
// };
// /**
//  * 浏览器退出全屏
//  */
// export const exitFullScreen = () => {
//     if (document.documentElement.requestFullScreen) {
//         document.exitFullScreen();
//     } else if (document.documentElement.webkitRequestFullScreen) {
//         document.webkitCancelFullScreen();
//     } else if (document.documentElement.mozRequestFullScreen) {
//         document.mozCancelFullScreen();
//     }
// };
export const setTheme = function(name: string){
    (document.body as HTMLElement).className = name;
}