import https from "./https"

let httpPlugin = {
    install(Vue) {
        Vue.prototype.$https = https
    }
}
export default httpPlugin;