<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/1ee8b324-1ae2-4a22-8a85-f4ce497867c2

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

---

## 微信小程序版 (Taro)

已迁移到 Taro 框架，支持编译为微信小程序。

### 本地开发

```bash
npm install
npm run dev:weapp    # 开发模式
npm run build:weapp  # 生产构建
```

构建产物在 `dist/` 目录，用微信开发者工具打开即可预览。
