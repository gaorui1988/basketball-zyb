import { View, Text, Image, Button } from '@tarojs/components'
import Taro, { useRouter } from '@tarojs/taro'
import { MOCK_ACTIVITIES } from '../../constants'
import './index.scss'

export default function MatchDetail() {
  const router = useRouter()
  const activityId = router.params.activityId || '4'
  const activity = MOCK_ACTIVITIES.find(a => a.id === activityId)
  if (!activity || !activity.matchResult) return null

  const result = activity.matchResult
  const participants = activity.participants || []

  return (
    <View className='match-page'>
      {/* Header */}
      <View className='match-header'>
        <View className='match-header-left'>
          <View className='match-back' onClick={() => Taro.navigateBack()}>
            <Text className='match-back-icon'>⬅️</Text>
          </View>
          <Text className='match-header-title'>组一波</Text>
        </View>
        <View className='match-points'>
          <Text className='match-points-text'>1250 PTS</Text>
        </View>
      </View>

      {/* Match Summary */}
      <View className='match-summary'>
        <View className='match-summary-header'>
          <View className='match-summary-badge'>
            <Text>比赛结束</Text>
          </View>
          <View className='match-summary-meta'>
            <Text className='match-summary-court'>{result.courtNo}</Text>
            <Text className='match-summary-title'>{activity.title}</Text>
          </View>
        </View>

        <View className='match-scoreboard'>
          <View className='match-team'>
            <View className='match-team-avatar-wrap'>
              <Image className='match-team-avatar' src={result.teamAAvatar} />
            </View>
            <Text className='match-team-label'>A 队</Text>
          </View>

          <View className='match-score-center'>
            <Text className='match-score'>{result.teamAScore} - {result.teamBScore}</Text>
            <Text className='match-score-label'>完赛比分</Text>
          </View>

          <View className='match-team'>
            <View className='match-team-avatar-wrap'>
              <Image className='match-team-avatar' src={result.teamBAvatar} />
            </View>
            <Text className='match-team-label'>B 队</Text>
          </View>
        </View>

        <View className='match-points-notice'>
          <Text className='match-points-notice-icon'>🏅</Text>
          <Text className='match-points-notice-text'>
            好球！你因为参加本次活动获得了 <Text className='match-points-notice-highlight'>+5 积分</Text>。
          </Text>
        </View>
      </View>

      {/* MVP Voting */}
      <View className='match-vote-section'>
        <View className='match-vote-header'>
          <View>
            <Text className='match-vote-title'>投票选出 MVP</Text>
            <Text className='match-vote-subtitle'>谁统治了今天的球场？</Text>
          </View>
          <Text className='match-vote-star-icon'>⭐</Text>
        </View>

        <View className='match-vote-list'>
          {participants.map((player, idx) => (
            <View
              key={player.id}
              className={`match-vote-item ${player.isCurrentUser ? 'disabled' : ''}`}
            >
              <View className='match-vote-player'>
                <View className='match-vote-avatar-wrap'>
                  <Image className='match-vote-avatar' src={player.avatar} />
                  {player.position && (
                    <View className='match-vote-position'>
                      <Text>{player.position}</Text>
                    </View>
                  )}
                </View>
                <View>
                  <Text className='match-vote-name'>{player.name}</Text>
                  <Text className='match-vote-stats'>
                    {player.stats.pts} 得分 • {player.stats.ast} 助攻 • {player.stats.reb} 篮板
                  </Text>
                </View>
              </View>
              {player.isCurrentUser ? (
                <Text className='match-vote-self'>自己</Text>
              ) : (
                <Button className='match-vote-btn'>投票</Button>
              )}
            </View>
          ))}
        </View>

        <View className='match-vote-info'>
          <Text className='match-vote-info-icon'>📋</Text>
          <Text className='match-vote-info-text'>
            如果没有人投票，本次比赛将不会选出 MVP。每一票对排行榜都很重要！
          </Text>
        </View>
      </View>
    </View>
  )
}
