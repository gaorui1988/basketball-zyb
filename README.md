# 组一波 - 篮球约战小程序

本分支为原生微信小程序版（WXML + TypeScript + WXSS），无需编译，可直接在微信开发者工具中打开预览。

## 上手

1. 修改 `project.config.json` 中的 `appid` 为你的小程序 AppID
2. 微信开发者工具 → 导入项目 → 选择本项目目录
3. 点击"编译"查看效果

## 项目结构

```
├── app.ts / app.json / app.wxss  # 应用入口与配置
├── components/                    # 可复用组件
│   ├── header/                    # 顶部导航
│   └── activity-card/             # 活动卡片
├── pages/                         # 页面
│   ├── index/                     # 首页 - 活动列表
│   ├── signup/                    # 报名详情
│   ├── match-detail/              # 比赛详情 & MVP投票
│   ├── leaderboard/               # 积分排行榜
│   └── profile/                   # 个人中心
├── data/                          # Mock 数据
│   └── constants.ts
└── images/                        # TabBar 图标
```

## 注意

- 数据全部为 Mock，无后端接口
- TypeScript 支持需要在 `project.config.json` 中启用 `"useCompilerPlugins": ["typescript"]`
- 如需真机调试，替换图片链接为本地资源
