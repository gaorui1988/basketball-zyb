const { MOCK_LEADERBOARD } = require('../../data/constants')

Page({
  data: {
    topThree: MOCK_LEADERBOARD.slice(0, 3),
    rest: MOCK_LEADERBOARD.slice(3)
  }
})
