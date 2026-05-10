import { View, Text, Image } from '@tarojs/components'
import { Activity } from '../../types'
import './index.scss'

interface ActivityCardProps {
  activity: Activity
  onClick: () => void
}

export default function ActivityCard({ activity, onClick }: ActivityCardProps) {
  const isFull = activity.joinedPlayersCount >= activity.maxPlayersCount
  const isEnded = activity.status === 'ended'
  const progress = (activity.joinedPlayersCount / activity.maxPlayersCount) * 100

  const statusLabel = activity.status === 'registering' ? '报名中'
    : activity.status === 'upcoming' ? '即将开始'
    : '已结束'

  const statusClass = activity.status === 'registering' ? 'badge-registering'
    : activity.status === 'upcoming' ? 'badge-upcoming'
    : 'badge-ended'

  return (
    <View className='activity-card' onClick={onClick}>
      <View className={`activity-left-bar ${activity.status === 'registering' ? 'active' : ''}`} />

      <View className='activity-card-inner'>
        <View className='activity-top'>
          <View className='activity-info'>
            <Text className='activity-title'>{activity.title}</Text>
            <View className='activity-location'>
              <Text className='activity-location-icon'>📍</Text>
              <Text className='activity-location-text'>{activity.location}</Text>
            </View>
          </View>
          <View className={`activity-badge ${statusClass}`}>
            <Text>{statusLabel}</Text>
          </View>
        </View>

        {isEnded && activity.matchResult ? (
          <View className='match-result'>
            <View className='match-result-inner'>
              <Image className='match-result-avatar' src={activity.matchResult.teamAAvatar} />
              <Text className='match-result-score'>{activity.matchResult.teamAScore} - {activity.matchResult.teamBScore}</Text>
              <Image className='match-result-avatar' src={activity.matchResult.teamBAvatar} />
            </View>
            <View className='match-result-label'>
              <Text>完赛</Text>
              <Text>分数</Text>
            </View>
          </View>
        ) : (
          <View className='activity-details'>
            <View className='detail-item'>
              <Text className='detail-icon'>📅</Text>
              <View className='detail-text-wrap'>
                <Text className='detail-label'>时间</Text>
                <Text className='detail-value'>{activity.time}</Text>
              </View>
            </View>
            <View className='detail-item'>
              <Text className='detail-icon'>💳</Text>
              <View className='detail-text-wrap'>
                <Text className='detail-label'>费用</Text>
                <Text className='detail-value'>{activity.cost}</Text>
              </View>
            </View>
          </View>
        )}

        <View className='activity-footer'>
          <View className='player-avatars'>
            {activity.players.slice(0, 3).map((player) => (
              <Image key={player.id} className='player-avatar' src={player.avatar} />
            ))}
            {activity.joinedPlayersCount > activity.players.length && (
              <View className='player-avatar-more'>
                <Text>+{activity.joinedPlayersCount - activity.players.length}</Text>
              </View>
            )}
          </View>

          <View className='player-count'>
            <Text className='player-count-num'>{activity.joinedPlayersCount}</Text>
            <Text className='player-count-total'> / {activity.maxPlayersCount}</Text>
          </View>
        </View>

        <View className='progress-bar'>
          <View
            className={`progress-fill ${isFull ? 'fill-full' : ''}`}
            style={{ width: `${progress}%` }}
          />
        </View>
      </View>
    </View>
  )
}
