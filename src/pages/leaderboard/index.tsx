import { View, Text, Image } from '@tarojs/components'
import { MOCK_LEADERBOARD } from '../../constants'
import './index.scss'

export default function Leaderboard() {
  const topThree = MOCK_LEADERBOARD.slice(0, 3)
  const rest = MOCK_LEADERBOARD.slice(3)

  return (
    <View className='leaderboard-page'>
      {/* Header */}
      <View className='leaderboard-header'>
        <View className='leaderboard-header-left'>
          <View className='leaderboard-avatar'>
            <Image
              className='leaderboard-avatar-img'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuCZsANlmkDCqQIhgjzRdnR1isRPuU6B33edMCWJE8tDG3eJWfQN4NqEfj5kgLC7vHfM5XE9vJCrmeItahbhnk1ibAJXho54ttO-7bYGjkzY0j9WKeXDF-IFhTzQSv8sY4WDw7DalFmqNLvXR1z2DsezmSz9NH2AH9ea99gdXnPkGoPXzqwYsEItvz19353rwit9Q0De935Npu2EHhzAhElAi1VWnImldh9Pv0dpX-ImPdsoFG0CayO5uEUVNd0qGWh74wrDNskgURv8'
            />
          </View>
          <Text className='leaderboard-title'>积分排行榜</Text>
        </View>
        <View className='leaderboard-points'>
          <Text className='leaderboard-star'>⭐</Text>
          <Text className='leaderboard-points-text'>1250 PTS</Text>
        </View>
      </View>

      {/* Podium */}
      <View className='leaderboard-podium'>
        {/* 2nd */}
        <View className='podium-item'>
          <View className='podium-avatar-wrap silver'>
            <Image className='podium-avatar' src={topThree[1].avatar} />
          </View>
          <View className='podium-rank silver-badge'>2</View>
          <Text className='podium-name'>{topThree[1].name}</Text>
          <Text className='podium-pts'>{topThree[1].pts} PTS</Text>
        </View>

        {/* 1st */}
        <View className='podium-item first'>
          <View className='podium-trophy'>🏆</View>
          <View className='podium-avatar-wrap gold'>
            <Image className='podium-avatar' src={topThree[0].avatar} />
          </View>
          <View className='podium-rank gold-badge'>1</View>
          <Text className='podium-name gold-name'>{topThree[0].name}</Text>
          <Text className='podium-pts gold-pts'>{topThree[0].pts} PTS</Text>
        </View>

        {/* 3rd */}
        <View className='podium-item'>
          <View className='podium-avatar-wrap bronze'>
            <Image className='podium-avatar' src={topThree[2].avatar} />
          </View>
          <View className='podium-rank bronze-badge'>3</View>
          <Text className='podium-name'>{topThree[2].name}</Text>
          <Text className='podium-pts'>{topThree[2].pts} PTS</Text>
        </View>
      </View>

      {/* Ranking List */}
      <View className='leaderboard-list'>
        {rest.map((entry) => (
          <View
            key={entry.id}
            className={`leaderboard-item ${entry.isCurrentUser ? 'current-user' : ''}`}
          >
            <Text className='leaderboard-rank'>{entry.rank}</Text>
            <View className={`leaderboard-avatar-sm ${entry.isCurrentUser ? 'highlight' : ''}`}>
              <Image className='leaderboard-avatar-img-sm' src={entry.avatar} />
            </View>
            <View className='leaderboard-info'>
              <View className='leaderboard-name-row'>
                <Text className='leaderboard-name'>{entry.name}</Text>
                {entry.isCurrentUser && (
                  <View className='leaderboard-you-badge'><Text>你</Text></View>
                )}
              </View>
              <Text className='leaderboard-mvp'>MVP x{entry.mvpCount}</Text>
            </View>
            <View className='leaderboard-pts'>
              <Text className='leaderboard-pts-num'>{entry.pts}</Text>
              <Text className='leaderboard-pts-label'>积分</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}
