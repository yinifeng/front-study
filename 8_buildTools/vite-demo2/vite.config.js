import { defineConfig } from "vite"
import legacy from "@vitejs/plugin-legacy"

export default defineConfig({
    plugins: [
        //安装插件：yarn add -D @vitejs/plugin-legacy
        // yarn add -D terser
        legacy({
            //打包编译成 兼容的浏览器配置
            targets: ["defaults","ie 11"]
        })
    ]
})