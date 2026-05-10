import { View, Text, Image, Button } from '@tarojs/components'
import './index.scss'

const MOCK_HISTORY = [
  { id: 'h1', matchName: '东海岸经典赛', reason: '全场 MVP', points: 5, type: 'plus' },
  { id: 'h2', matchName: '周六灌篮之夜', reason: '迟到扣分', points: 5, type: 'minus' }
]

export default function Profile() {
  return (
    <View className='profile-page'>
      {/* Header */}
      <View className='profile-header'>
        <View className='profile-header-left'>
          <View className='profile-header-avatar'>
            <Image
              className='profile-header-avatar-img'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuDgizM9toDHYAxBiM6x7ADROoKITXpnrYrw4NPElYG7l8Gx-giaAhvwlBoN1K4Bvw_PbzpqYF0JtebstrdpnYVsuwq6bPaP-UoQ90reCI4l35tbJ0rWnpnNfZbDDS9Y6XXy9bF16U0C1TBkpMTNd6xNJNo1t5EnzLID-dHFuLqFcORloGuVv0yE8ZC5OGZn6gHUlyzhKLXX1LYl5mtywy1ASaIxEQtD3vYVweDt88kGh_hz8v2FY2X6ACyID6JuQIJEJYbRsRqiHfX0'
            />
          </View>
          <Text className='profile-header-title'>组一波</Text>
        </View>
        <View className='profile-header-points'>
          <Text className='profile-star'>⭐</Text>
          <Text className='profile-points-text'>1250 PTS</Text>
        </View>
      </View>

      {/* User Info */}
      <View className='profile-content'>
        <View className='profile-user'>
          <View className='profile-user-info'>
            <Text className='profile-user-name'>科比铁粉24</Text>
            <Text className='profile-user-meta'>2023年7月加入 • 前锋</Text>
          </View>
          <View className='profile-user-pts'>
            <Text className='profile-user-pts-label'>本场积分</Text>
            <Text className='profile-user-pts-num'>20</Text>
          </View>
        </View>

        {/* Flaking Stats */}
        <View className='profile-card'>
          <View className='profile-card-header'>
            <Text className='profile-card-title'>缺席统计</Text>
            <Text className='profile-warning-icon'>⚠️</Text>
          </View>
          <View className='profile-flaking'>
            <View className='profile-flaking-top'>
              <Text className='profile-flaking-status'>当前状态: 1/3 次</Text>
              <Text className='profile-flaking-warning'>警告</Text>
            </View>
            <View className='profile-flaking-bar'>
              <View className='profile-flaking-fill' style={{ width: '33.33%' }} />
            </View>
            <View className='profile-flaking-quote'>
              <Text className='profile-flaking-quote-text'>
                "再缺席 2 次，下次活动你就要请全队喝水了！"
              </Text>
            </View>
          </View>
        </View>

        {/* Points History */}
        <View className='profile-card'>
          <Text className='profile-card-title'>🕐 积分历史</Text>
          <View className='profile-history'>
            {MOCK_HISTORY.map((action, idx) => (
              <View
                key={action.id}
                className={`profile-history-item ${idx !== MOCK_HISTORY.length - 1 ? 'with-border' : ''}`}
              >
                <View className='profile-history-info'>
                  <Text className='profile-history-match'>{action.matchName}</Text>
                  <Text className='profile-history-reason'>{action.reason}</Text>
                </View>
                <Text className={`profile-history-pts ${action.type === 'plus' ? 'plus' : 'minus'}`}>
                  {action.type === 'plus' ? '+' : '-'}{action.points}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Quick Links */}
        <View className='profile-links'>
          <View className='profile-link'>
            <View className='profile-link-icon profile-link-icon-orange'>🏀</View>
            <Text className='profile-link-label'>我的活动</Text>
            <Text className='profile-link-arrow'>➡️</Text>
          </View>
          <View className='profile-link'>
            <View className='profile-link-icon profile-link-icon-dark'>🎖️</View>
            <Text className='profile-link-label'>我的 MVP</Text>
            <Text className='profile-link-arrow'>➡️</Text>
          </View>
          <View className='profile-link'>
            <View className='profile-link-icon profile-link-icon-gray'>⚙️</View>
            <Text className='profile-link-label'>设置</Text>
            <Text className='profile-link-arrow'>➡️</Text>
          </View>
        </View>

        {/* Logout */}
        <Button className='profile-logout'>退出登录</Button>
      </View>
    </View>
  )
}
