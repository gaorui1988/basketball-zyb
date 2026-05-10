const { MOCK_ACTIVITIES } = require('../../data/constants')

Page({
  data: {
    activeTab: 'all',
    filteredActivities: MOCK_ACTIVITIES
  },
  onLoad() {
    this.filterActivities()
  },
  switchTab(e: WechatMiniprogram.TouchEvent) {
    const tab = e.currentTarget.dataset.tab
    this.setData({ activeTab: tab }, () => this.filterActivities())
  },
  filterActivities() {
    const tab = this.data.activeTab
    const list = MOCK_ACTIVITIES.filter(a => tab === 'all' || a.id === '4')
    this.setData({ filteredActivities: list })
  },
  onActivityClick(e: WechatMiniprogram.TouchEvent) {
    const activity = e.detail.activity
    if (activity.status === 'ended') {
      wx.navigateTo({ url: `/pages/match-detail/index?activityId=${activity.id}` })
    } else {
      wx.navigateTo({ url: `/pages/signup/index?activityId=${activity.id}` })
    }
  }
})
