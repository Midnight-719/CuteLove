<div align="right">
  <a href="README.html" target="_blank">📖 交互式版本 (Interactive Version)</a> | 
  <a href="#中文">中文</a> | 
  <a href="#english">English</a>
</div>

> 💡 **提示**: 想要更好的阅读体验？点击上方的"交互式版本"链接，在浏览器中打开支持实时语言切换的 HTML 版本！  
> 💡 **Tip**: Want a better reading experience? Click the "Interactive Version" link above to open an HTML version with real-time language switching in your browser!

---

<div id="中文"></div>

# ThaiLand GL CPS

一个展示泰国 GL（Girls' Love）CP 相关电视剧和节目的现代化 Web 应用。

## ✨ 特性

- 🎨 **现代化 UI** - 基于 Chakra UI v3 构建的美观界面
- 🌙 **暗色模式** - 支持明暗主题切换
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🎬 **电视剧展示** - 精美的卡片式布局展示电视剧信息
- ➕ **动态添加** - 支持添加新的电视剧到列表
- 💾 **本地存储** - 使用 localStorage 保存数据
- ⚡ **快速路由** - 基于 TanStack Router 的高性能路由系统

## 🛠️ 技术栈

- **React 19** - 最新的 React 框架
- **TypeScript** - 类型安全的 JavaScript
- **Chakra UI v3** - 现代化的 UI 组件库
- **TanStack Router** - 类型安全的路由解决方案
- **TanStack Query** - 强大的数据同步库
- **Vite** - 极速的前端构建工具
- **React Icons** - 丰富的图标库

## 📦 安装

确保你的系统已安装 Node.js (推荐 v18 或更高版本) 和 npm。

```bash
# 克隆项目
git clone <repository-url>
cd my_ui_demo

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

开发服务器将在 `http://localhost:3000` 启动。

## 🚀 使用

### 开发模式

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist/` 目录。

## 📁 项目结构

```
my_ui_demo/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── layout/         # 布局组件（Header, Sidebar, Layout）
│   │   └── ui/             # UI 组件（ColorMode, Toaster, Tooltip）
│   ├── routes/             # 路由页面
│   │   ├── index.tsx       # 首页（电视剧列表）
│   │   ├── about.tsx       # 关于页面
│   │   ├── work.tsx        # 作品页面
│   │   ├── schedule.tsx    # 日程页面
│   │   └── details.$id.tsx # 详情页面
│   ├── data/               # 数据文件
│   │   └── shows.ts        # 电视剧数据
│   ├── theme/              # 主题配置
│   └── main.tsx            # 应用入口
├── public/                 # 静态资源
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎯 主要功能

### 首页
- 展示所有电视剧的卡片网格
- 每个卡片显示标题、描述、价格和封面图
- 点击卡片可查看详情
- 支持添加新电视剧

### 添加电视剧
- 点击 "+" 卡片打开添加对话框
- 填写标题、描述、价格和图片 URL
- 新添加的电视剧会保存到 localStorage

### 路由页面
- **首页** (`/`) - 电视剧列表
- **日程** (`/schedule`) - 日程安排
- **作品** (`/work`) - 作品列表
- **关于** (`/about`) - 关于信息
- **详情** (`/details/:id`) - 电视剧详情

## 🎨 主题定制

项目使用 Chakra UI v3 的主题系统，可以在 `src/theme/` 目录下自定义主题配置。

## 📝 开发规范

本项目遵循 Chakra UI v3 的最佳实践：

- 使用 `@chakra-ui/react` 导入核心组件
- 使用 `components/ui` 导入自定义 UI 组件
- 使用 `toaster.create()` 替代 `useToast()`
- 使用 `Dialog` 替代 `Modal`
- 使用 `colorPalette` 替代 `colorScheme`
- 使用 `VStack`/`HStack` 替代 `Stack`

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC

## 👤 作者

创建于 2024

---

<div id="english"></div>

# ThaiLand GL CPS

A modern web application showcasing Thai GL (Girls' Love) CP-related TV dramas and shows.

## ✨ Features

- 🎨 **Modern UI** - Beautiful interface built with Chakra UI v3
- 🌙 **Dark Mode** - Support for light/dark theme switching
- 📱 **Responsive Design** - Perfect adaptation for desktop and mobile devices
- 🎬 **TV Drama Showcase** - Beautiful card-based layout for displaying drama information
- ➕ **Dynamic Addition** - Support for adding new dramas to the list
- 💾 **Local Storage** - Data persistence using localStorage
- ⚡ **Fast Routing** - High-performance routing system based on TanStack Router

## 🛠️ Tech Stack

- **React 19** - Latest React framework
- **TypeScript** - Type-safe JavaScript
- **Chakra UI v3** - Modern UI component library
- **TanStack Router** - Type-safe routing solution
- **TanStack Query** - Powerful data synchronization library
- **Vite** - Lightning-fast frontend build tool
- **React Icons** - Rich icon library

## 📦 Installation

Make sure you have Node.js (v18 or higher recommended) and npm installed on your system.

```bash
# Clone the repository
git clone <repository-url>
cd my_ui_demo

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:3000`.

## 🚀 Usage

### Development Mode

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` 目录.

## 📁 Project Structure

```
my_ui_demo/
├── src/
│   ├── components/          # Reusable components
│   │   ├── layout/         # Layout components (Header, Sidebar, Layout)
│   │   └── ui/             # UI components (ColorMode, Toaster, Tooltip)
│   ├── routes/             # Route pages
│   │   ├── index.tsx       # Home page (drama list)
│   │   ├── about.tsx       # About page
│   │   ├── work.tsx        # Work page
│   │   ├── schedule.tsx    # Schedule page
│   │   └── details.$id.tsx # Details page
│   ├── data/               # Data files
│   │   └── shows.ts        # TV drama data
│   ├── theme/              # Theme configuration
│   └── main.tsx            # Application entry point
├── public/                 # Static assets
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## 🎯 Main Features

### Home Page
- Display all dramas in a card grid
- Each card shows title, description, price, and cover image
- Click on a card to view details
- Support for adding new dramas

### Add Drama
- Click the "+" card to open the add dialog
- Fill in title, description, price, and image URL
- Newly added dramas are saved to localStorage

### Route Pages
- **Home** (`/`) - Drama list
- **Schedule** (`/schedule`) - Schedule
- **Work** (`/work`) - Work list
- **About** (`/about`) - About information
- **Details** (`/details/:id`) - Drama details

## 🎨 Theme Customization

The project uses Chakra UI v3's theme system. You can customize the theme configuration in the `src/theme/` directory.

## 📝 Development Guidelines

This project follows Chakra UI v3 best practices:

- Import core components from `@chakra-ui/react`
- Import custom UI components from `components/ui`
- Use `toaster.create()` instead of `useToast()`
- Use `Dialog` instead of `Modal`
- Use `colorPalette` instead of `colorScheme`
- Use `VStack`/`HStack` instead of `Stack`

## 🤝 Contributing

Issues and Pull Requests are welcome!

## 📄 License

ISC

## 👤 Author

Created in 2024

---

**Note**: This is a demo project showcasing best practices in modern React development.
