const MOCK_HISTORY = [
  { id: 'h1', matchName: '东海岸经典赛', reason: '全场 MVP', points: 5, type: 'plus' },
  { id: 'h2', matchName: '周六灌篮之夜', reason: '迟到扣分', points: 5, type: 'minus' }
]

Page({
  data: { history: MOCK_HISTORY }
})
