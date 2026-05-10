const { MOCK_ACTIVITIES } = require('../../data/constants')

Page({
  data: {
    activity: null as any,
    heroImg: '',
    progress: 0,
    emptySlots: [] as number[]
  },
  onLoad(options) {
    const id = options.activityId || '1'
    const activity = MOCK_ACTIVITIES.find(a => a.id === id) || MOCK_ACTIVITIES[0]
    const progress = (activity.joinedPlayersCount / activity.maxPlayersCount) * 100
    const emptyCnt = Math.min(4, activity.maxPlayersCount - activity.joinedPlayersCount)
    this.setData({
      activity,
      heroImg: activity.heroImage || 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200',
      progress,
      emptySlots: Array.from({ length: emptyCnt }, (_, i) => i)
    })
  },
  goBack() { wx.navigateBack() }
})
