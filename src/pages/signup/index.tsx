import { View, Text, Image, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useRouter } from '@tarojs/taro'
import { MOCK_ACTIVITIES } from '../../constants'
import './index.scss'

export default function Signup() {
  const router = useRouter()
  const activityId = router.params.activityId || '1'
  const activity = MOCK_ACTIVITIES.find(a => a.id === activityId) || MOCK_ACTIVITIES[0]

  return (
    <View className='signup-page'>
      {/* Header */}
      <View className='signup-header'>
        <View className='signup-header-left'>
          <View className='signup-back' onClick={() => Taro.navigateBack()}>
            <Text className='signup-back-icon'>⬅️</Text>
          </View>
          <Text className='signup-header-title'>组一波</Text>
        </View>
        <View className='signup-points'>
          <Text className='signup-points-text'>1250 PTS</Text>
        </View>
      </View>

      {/* Hero */}
      <View className='signup-hero'>
        <Image
          className='signup-hero-img'
          src={activity.heroImage || 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1200&auto=format&fit=crop&q=60'}
          mode='aspectFill'
        />
        <View className='signup-hero-overlay' />
        <View className='signup-hero-content'>
          <View className='signup-hero-badge'>
            <Text>即将开始</Text>
          </View>
          <Text className='signup-hero-title'>
            洛克公园 - <Text className='signup-hero-title-highlight'>旗舰馆</Text>
          </Text>
          <Text className='signup-hero-time'>{activity.time}</Text>
        </View>
      </View>

      {/* Content */}
      <View className='signup-content'>
        {/* Location */}
        <View className='signup-card'>
          <View className='signup-card-header'>
            <Text className='signup-card-title'>📍 地点详情</Text>
            <Text className='signup-card-distance'>{activity.distance || '2.4KM'}</Text>
          </View>
          <View className='signup-map'>
            <Image
              className='signup-map-img'
              src='https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&auto=format&fit=crop&q=60'
              mode='aspectFill'
            />
          </View>
          <Text className='signup-address'>
            {activity.address || '静安区汶水路210号, 3号场地 (室内全场)'}
          </Text>
        </View>

        {/* Organizer */}
        {activity.organizer && (
          <View className='signup-card'>
            <Text className='signup-card-title'>🏃 组织者</Text>
            <View className='signup-organizer'>
              <Image className='signup-organizer-avatar' src={activity.organizer.avatar} />
              <View className='signup-organizer-info'>
                <Text className='signup-organizer-name'>{activity.organizer.name}</Text>
                <View className='signup-organizer-tags'>
                  <View className='signup-tag signup-tag-pos'>
                    <Text>{activity.organizer.position}</Text>
                  </View>
                  <View className='signup-tag signup-tag-mvp'>
                    <Text>MVP x{activity.organizer.mvpCount}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View className='signup-rules'>
              <Text className='signup-rules-label'>本场规则</Text>
              <Text className='signup-rules-text'>
                {activity.rules || '"半场 4V4, 先到11分换人。尊重裁判，杜绝脏动作。"'}
              </Text>
            </View>
          </View>
        )}

        {/* Players */}
        <View className='signup-card'>
          <View className='signup-card-header'>
            <Text className='signup-card-title'>👥 已报名人员 ({activity.joinedPlayersCount}/{activity.maxPlayersCount})</Text>
            <View className='signup-progress-outer'>
              <View
                className='signup-progress-inner'
                style={{ width: `${(activity.joinedPlayersCount / activity.maxPlayersCount) * 100}%` }}
              />
            </View>
          </View>
          <View className='signup-players'>
            {activity.players.map((player) => (
              <View key={player.id} className='signup-player'>
                <Image className='signup-player-avatar' src={player.avatar} />
                <Text className='signup-player-name'>{player.name}</Text>
              </View>
            ))}
            {Array.from({ length: Math.min(4, activity.maxPlayersCount - activity.joinedPlayersCount) }).map((_, i) => (
              <View key={`empty-${i}`} className='signup-player signup-player-empty'>
                <View className='signup-player-placeholder'>
                  <Text>➕</Text>
                </View>
                <Text className='signup-player-name'>待定</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Penalty Notice */}
        <View className='signup-penalty'>
          <Text className='signup-penalty-icon'>⚠️</Text>
          <View className='signup-penalty-content'>
            <Text className='signup-penalty-title'>诚信提示</Text>
            <Text className='signup-penalty-desc'>
              严禁放鸽子。缺席将扣除 <Text className='signup-penalty-highlight'>-5 PTS</Text>，累计 3 次将限制参加后续活动。
            </Text>
          </View>
        </View>
      </View>

      {/* Bottom Action */}
      <View className='signup-action'>
        <Button className='signup-action-btn'>立即报名</Button>
      </View>
    </View>
  )
}
