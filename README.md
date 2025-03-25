[![ColorMagic banner](./.github/assets/banner.png)](https://colormagic.app)

# 🎨 [ColorMagic](https://colormagic.app)

ColorMagic是一款流行的免费开源色彩调色板生成器，提供多种颜色相关的实用工具。项目使用[Nuxt](https://nuxt.com)、[NuxtUI](https://ui.nuxt.com)和TypeScript构建。

ColorMagic每月约有~500k的页面浏览量，每天生成12K个调色板。您可以在[这里查看我们的实时网站分析](https://plausible.io/colormagic.app)。

大多数工具在[OpenAI](https://openai.com)的AI辅助下运行。

网站使用[nuxtjs/i18n](https://i18n.nuxtjs.org/)提供[英文](https://colormagic.app)、[日文](https://colormagic.app/ja)和[意大利文](https://colormagic.app/it)的翻译。

## <a name="layers">🏗️ 层级结构</a>

ColorMagic利用Nuxt的内置层级系统来分离应用的不同领域。

每个层级创建自己独立的模块（[示例](/layers/palette/server/palette.module.ts)），然后在[setup工具](/layers/setup/server/utils/setup.util.ts)中声明。这些模块随后可以全局使用。

项目主要包含以下层级：
- 🎨 palette - 调色板生成和管理
- 🔄 random-color - 随机颜色生成器
- 🖼️ image-color-picker - 图像颜色提取器
- ☀️ contrast-checker - 对比度检查工具
- 🧠 ai - AI辅助功能
- 🔐 auth - 用户认证
- 🌐 common - 通用组件和功能
- 📊 mongo - 数据库交互
- 🤖 openai - OpenAI集成

## <a name="getting-started">🚀 快速开始</a>

所有ColorMagic的调色板都使用MongoDB存储。通过以下命令设置本地MongoDB实例：

```bash
docker compose up
```
更多详情请查看[mongo层](/layers/mongo/server/mongo.module.ts)。

在项目根目录创建.env文件并添加以下值：
```env
OPENAI_API_KEY=[sk_srf4s...]
```

安装依赖
```bash
npm install
```

本地运行
```bash
npm run dev
```

## <a name="color-tools">🔧 颜色工具</a>

- 🎨 [调色板生成器](https://colormagic.app/)
- ❓ [随机颜色生成器](https://colormagic.app/random-color)
- 🖼️ [图像颜色提取器](https://colormagic.app/image-color-picker)
- ☀️ [对比度检查器](https://colormagic.app/contrast-checker)

这是一个正在进行中的项目，更多工具即将推出！

## <a name="features">✨ 主要功能</a>

- 🧠 AI辅助的调色板生成
- 🔄 颜色转换和调整（亮度、饱和度、暖度）
- 🔍 颜色命名和识别
- 📱 响应式设计，适配移动设备
- 🌐 多语言支持
- 👥 社交分享功能
- 📊 用户分析和跟踪

## <a name="api">🖥️ API</a>

ColorMagic提供公共API，任何人都可以免费使用。

我们使用出色的[@tanstack/vue-query](https://github.com/TanStack/query)处理所有API调用，并使用[@sinclair/typebox](https://github.com/sinclairzx81/typebox)在服务器端进行验证。

您可以在[这里](https://colormagic.app/api)找到可用的公共API端点。

请注意：此API可能随时被移除或更改，恕不另行通知。使用风险自负。

## <a name="contribute">❤️ 贡献</a>

欢迎提出修复建议或帮助开发新功能！
