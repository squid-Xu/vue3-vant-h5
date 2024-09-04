import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
// 按需引入、导入 vant
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';

// 引入path模块
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            imports: ['vue', 'vue-router'],
            eslintrc: {
                enabled: false // 是否自动生成 eslint 规则，建议生成之后设置 false，避免重复生成消耗
            },
            resolvers: [VantResolver()]
        }),
        Components({
            resolvers: [VantResolver()]
        })
    ],
    //路径别名
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    }
});
