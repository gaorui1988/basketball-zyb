import { View, Text } from '@tarojs/components'
import './index.scss'

export type NavTab = 'activities' | 'leaderboard' | 'profile'

interface BottomNavProps {
  activeTab: NavTab
  onTabChange: (tab: NavTab) => void
}

export default function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <View className='bottom-nav'>
      <View
        className={`bottom-nav-item ${activeTab === 'activities' ? 'active' : ''}`}
        onClick={() => onTabChange('activities')}
      >
        <Text className='bottom-nav-icon'>🏀</Text>
        <Text className='bottom-nav-label'>活动</Text>
      </View>
      <View
        className={`bottom-nav-item ${activeTab === 'leaderboard' ? 'active' : ''}`}
        onClick={() => onTabChange('leaderboard')}
      >
        <Text className='bottom-nav-icon'>🏆</Text>
        <Text className='bottom-nav-label'>排行榜</Text>
      </View>
      <View
        className={`bottom-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
        onClick={() => onTabChange('profile')}
      >
        <Text className='bottom-nav-icon'>👤</Text>
        <Text className='bottom-nav-label'>我的</Text>
      </View>
    </View>
  )
}
