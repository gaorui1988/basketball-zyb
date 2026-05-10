const { MOCK_ACTIVITIES } = require('../../data/constants')

Page({
  data: {
    activity: null as any,
    result: null as any,
    participants: [] as any[]
  },
  onLoad(options: { activityId?: string }) {
    const id = options.activityId || '4'
    const activity = MOCK_ACTIVITIES.find(a => a.id === id)
    if (activity && activity.matchResult) {
      this.setData({
        activity,
        result: activity.matchResult,
        participants: activity.participants || []
      })
    }
  },
  goBack() { wx.navigateBack() }
})
