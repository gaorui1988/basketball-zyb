export default {
  pages: [
    'pages/index/index',
    'pages/signup/index',
    'pages/match-detail/index',
    'pages/leaderboard/index',
    'pages/profile/index'
  ],
  window: {
    navigationStyle: 'custom',
    backgroundColor: '#f5f0eb'
  },
  tabBar: {
    color: '#8a8580',
    selectedColor: '#ff6b00',
    backgroundColor: '#f5f0eb',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '活动',
        iconPath: 'assets/icons/basketball.png',
        selectedIconPath: 'assets/icons/basketball-active.png'
      },
      {
        pagePath: 'pages/leaderboard/index',
        text: '排行榜',
        iconPath: 'assets/icons/trophy.png',
        selectedIconPath: 'assets/icons/trophy-active.png'
      },
      {
        pagePath: 'pages/profile/index',
        text: '我的',
        iconPath: 'assets/icons/user.png',
        selectedIconPath: 'assets/icons/user-active.png'
      }
    ]
  }
}
