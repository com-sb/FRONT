const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  outputDir: "../src/main/resources/static", //빌드타켓 디렉토리
  // outputDir: "../src/main/java/com", //빌드타켓 디렉토리
  devServer:{
    // port: 8081,
    proxy: {
      '/api': { // 'api'로 들어오면 포트 8081(spring server)로 보냄
        target: 'http://localhost:8081',
        changeOrigin: true // cross origin 허용(서로 다른 출처의 리소스를 공유한다)
      }
    }
    // disableHostCheck: true
  },
  transpileDependencies: true
})
