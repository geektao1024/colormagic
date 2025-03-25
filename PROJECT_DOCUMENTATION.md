# ColorMagic 项目内部文档

## 项目概述

ColorMagic 是一个基于 Nuxt.js 构建的颜色调色板生成工具，提供多种颜色相关功能，包括调色板生成、随机颜色生成、图像颜色提取、对比度检查等。项目采用 MongoDB 作为数据存储，并利用 OpenAI 的 API 提供 AI 辅助功能。

## 项目结构

### 总体结构

项目采用 Nuxt.js 的层级（Layers）系统进行组织，将不同功能领域分离成独立的模块。

```
colormagic/
├── .nuxt/                  # Nuxt.js 构建生成的文件
├── .github/                # GitHub 相关配置和资源
├── assets/                 # 静态资源文件（图片、字体等）
├── layers/                 # 项目核心功能层级
├── layouts/                # 页面布局组件
├── pages/                  # 主要页面
├── plugins/                # 插件
├── public/                 # 公共资源文件
├── .env                    # 环境变量配置（需自行创建）
├── .gitignore              # Git 忽略文件
├── README.md               # 项目说明文档
├── app.config.ts           # 应用配置
├── compose.yml             # Docker Compose 配置
├── i18n.config.ts          # 国际化配置
├── nuxt.config.ts          # Nuxt.js 配置
├── package.json            # 项目依赖配置
├── tailwind.config.ts      # Tailwind CSS 配置
└── tsconfig.json           # TypeScript 配置
```

### 核心层级结构

项目使用 Nuxt.js 的层级系统，每个层级是一个独立的功能模块：

```
layers/
├── ai/                     # AI 辅助功能
├── auth/                   # 用户认证
├── common/                 # 通用组件和功能
├── contrast-checker/       # 对比度检查工具
├── google/                 # Google 集成
├── image-color-picker/     # 图像颜色提取器
├── log/                    # 日志功能
├── mongo/                  # MongoDB 数据库交互
├── og/                     # Open Graph 功能
├── openai/                 # OpenAI 集成
├── palette/                # 调色板生成和管理
├── plausible/              # Plausible 分析工具集成
├── random-color/           # 随机颜色生成器
├── rate-limit/             # 请求限制
├── setup/                  # 项目设置和初始化
└── user/                   # 用户管理
```

### 典型层级内部结构

以 `palette` 层为例，典型层级的内部结构如下：

```
palette/
├── components/             # Vue 组件
├── composables/            # Vue 组合式函数
├── models/                 # 数据模型
├── pages/                  # 页面组件
│   └── palette/            # 调色板相关页面
│       └── explore/        # 调色板浏览页面
├── server/                 # 服务器端代码
│   ├── api/                # API 端点
│   ├── dtos/               # 数据传输对象
│   ├── entities/           # 实体定义
│   ├── helpers/            # 辅助函数
│   ├── repositories/       # 数据仓库
│   ├── services/           # 服务
│   └── validations/        # 数据验证
└── utils/                  # 工具函数
```

## 环境配置

### 必需的环境变量

创建 `.env` 文件并添加以下环境变量：

```bash
# DeepSeek API配置（必需）
DEEPSEEK_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxx

# 或者使用 OpenAI API（可选，如果您仍希望保留此功能）
# OPENAI_API_KEY=sk_xxxxxxxxxxxxxxxxxxxxxxxx

# MongoDB配置（可选，有默认值）
MONGO_URL=mongodb://colormagic:secret@localhost:27018/admin

# 用户与调色板集合名称（可选，有默认值）
USERS_COLLECTION_NAME=users
PALETTE_COLLECTION_NAME=palettes
LIKES_COLLECTION_NAME=palette_likes

# 认证相关（可选，有默认值）
JWT_PRIVATE_KEY=your-secret-key
SITE_URL=https://your-site-url.com

# Google OAuth配置（如需使用Google登录）
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_OAUTH_EMAIL_SCOPE=https://www.googleapis.com/auth/userinfo.email
GOOGLE_OAUTH_ACCESS_TYPE=offline
GOOGLE_OAUTH_PROMPT=consent

# 日志配置（可选，有默认值）
LOG_LEVEL=debug
```

### Docker 配置

项目使用 Docker Compose 运行 MongoDB 数据库：

```yaml
services:
  database:
    container_name: colormagic_database
    image: mongo:7.0
    environment:
      MONGO_INITDB_ROOT_USERNAME: colormagic
      MONGO_INITDB_ROOT_PASSWORD: secret
    ports:
      - "27018:27017"
    restart: always
```

## 运行条件

### 系统要求

- Node.js 20.x 或更高版本
- npm 10.x 或更高版本
- Docker 和 Docker Compose（用于运行 MongoDB）
- 足够的内存用于 Nuxt.js 开发环境（推荐至少 4GB）

### 依赖项

项目的主要依赖：

- **框架**：
  - Nuxt 3.13.2
  - Vue (latest)
  
- **UI**：
  - @nuxt/ui 2.18.7
  - @nuxt/ui-pro 1.5.0
  - Tailwind CSS（内置于Nuxt UI）
  
- **数据库**：
  - MongoDB 6.9.0
  
- **API与数据处理**：
  - @tanstack/vue-query 5.56.2
  - @sinclair/typebox 0.33.12
  - Ajv 8.17.1
  
- **颜色处理**：
  - @ckpack/vue-color 1.6.0
  - color.js 1.2.0
  
- **AI集成**：
  - openai 4.65.0
  
- **国际化**：
  - @nuxtjs/i18n 8.5.5

### 项目设置和运行

1. **克隆项目**
   ```bash
   git clone https://github.com/your-username/colormagic.git
   cd colormagic
   ```

2. **创建环境变量文件**
   ```bash
   # 创建.env文件并添加必要的环境变量
   touch .env
   # 至少需要添加OPENAI_API_KEY
   echo "OPENAI_API_KEY=your-api-key" > .env
   ```

3. **启动MongoDB数据库**
   ```bash
   docker compose up -d
   ```

4. **安装依赖**
   ```bash
   npm install
   ```

5. **运行开发服务器**
   ```bash
   npm run dev
   ```

6. **生产环境构建**
   ```bash
   npm run build
   npm run start
   ```

## 功能模块

### 调色板生成 (palette)

- 生成色彩和谐的调色板
- 支持AI辅助创建调色板
- 保存和分享调色板
- 支持颜色调整（亮度、饱和度、暖度）

### 随机颜色生成器 (random-color)

- 生成随机颜色
- 显示颜色代码（HEX、RGB）
- 复制颜色代码到剪贴板

### 图像颜色提取器 (image-color-picker)

- 从上传图像中提取主要颜色
- 创建基于图像的调色板
- 支持调整提取的颜色数量

### 对比度检查器 (contrast-checker)

- 检查两种颜色之间的对比度
- 评估WCAG可访问性标准合规性
- 提供对比度改进建议

### 用户功能 (user, auth)

- 用户注册和登录
- Google OAuth集成
- 用户调色板收藏
- 用户调色板历史

### 辅助功能

- 颜色命名和识别
- 多语言支持（英语、日语、意大利语）
- 分析和追踪集成（使用Plausible）
- API访问限制（rate-limit）

## 常见问题与解决方案

1. **MongoDB连接问题**
   - 确保Docker容器正在运行：`docker ps`
   - 检查MongoDB连接URL是否正确
   - 尝试使用MongoDB Compass连接数据库进行测试

2. **OpenAI API连接问题**
   - 确保API密钥有效且有足够的额度
   - 检查网络连接和防火墙设置

3. **构建或开发服务器问题**
   - 清除Nuxt缓存：`rm -rf .nuxt`
   - 重新安装依赖：`rm -rf node_modules && npm install`
   - 确保Node.js版本兼容

## 扩展指南

### 添加新的颜色工具

1. 在`layers`目录下创建新的层级目录
2. 遵循典型层级结构添加必要的文件
3. 在`setup`层的`setup.util.ts`中注册新模块
4. 添加页面路由和组件
5. 更新导航栏和页脚链接

### 添加新语言

1. 在`i18n.config.ts`中添加新语言定义
2. 为新语言添加翻译字符串
3. 更新语言选择器组件

### 添加新的API端点

1. 在相应层级的`server/api`目录下创建新的API处理程序
2. 创建必要的DTO、实体和验证
3. 实现相应的服务和仓库方法
4. 在API文档页面添加新端点说明

## 联系与支持

- **项目维护者**: [维护者姓名]
- **GitHub仓库**: [仓库链接]
- **问题报告**: [Issues链接]
- **贡献指南**: 参见README.md中的贡献部分 

## 从 OpenAI 迁移到 DeepSeek

本项目已从 OpenAI API 迁移到 DeepSeek API。以下是迁移的主要变更：

### 结构变更

1. 新增 `layers/deepseek` 层替代原有的 `layers/openai` 层
2. `AIService` 现在使用 `DeepseekService` 而不是 `OpenAIService`
3. 环境变量从 `OPENAI_API_KEY` 更改为 `DEEPSEEK_API_KEY`

### 如何切换回 OpenAI（如需要）

如果需要切换回 OpenAI，可以修改以下文件：

1. `layers/setup/server/utils/setup.util.ts`
   - 将 `getDeepseekModule` 改回 `getOpenAIModule`
   - 更新依赖注入

2. `layers/ai/server/ai.module.ts` 和 `layers/ai/server/services/ai.service.ts`
   - 将 `DeepseekService` 改回 `OpenAIService`

3. 在 `.env` 文件中设置 `OPENAI_API_KEY` 而不是 `DEEPSEEK_API_KEY`

### DeepSeek API 注意事项

- DeepSeek API 的基本 URL 为 `https://api.deepseek.com/v1`
- 默认使用 `deepseek-chat` 模型，可以根据需要调整
- 审核功能是基于简单的敏感词过滤实现的，与 OpenAI 的审核 API 不完全相同 