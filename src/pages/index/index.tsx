import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useState } from 'react'
import Header from '../../components/Header'
import ActivityCard from '../../components/ActivityCard'
import { MOCK_ACTIVITIES } from '../../constants'
import { Activity } from '../../types'
import './index.scss'

export default function Index() {
  const [activeTab, setActiveTab] = useState<'all' | 'mine'>('all')

  const handleActivityClick = (activity: Activity) => {
    if (activity.status === 'ended') {
      Taro.navigateTo({ url: `/pages/match-detail/index?activityId=${activity.id}` })
    } else {
      Taro.navigateTo({ url: `/pages/signup/index?activityId=${activity.id}` })
    }
  }

  const filteredActivities = MOCK_ACTIVITIES.filter(
    a => activeTab === 'all' || a.id === '4'
  )

  return (
    <View className='index-page'>
      <Header />

      <View className='index-content'>
        {/* Filter Tabs */}
        <View className='filter-tabs'>
          <View
            className={`filter-tab ${activeTab === 'all' ? 'active' : ''}`}
            onClick={() => setActiveTab('all')}
          >
            <Text className='filter-tab-text'>全部活动</Text>
            {activeTab === 'all' && <View className='filter-tab-indicator' />}
          </View>
          <View
            className={`filter-tab ${activeTab === 'mine' ? 'active' : ''}`}
            onClick={() => setActiveTab('mine')}
          >
            <Text className='filter-tab-text'>我的报名</Text>
            {activeTab === 'mine' && <View className='filter-tab-indicator' />}
          </View>
        </View>

        {/* Activity List */}
        <View className='activity-list'>
          {filteredActivities.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              onClick={() => handleActivityClick(activity)}
            />
          ))}
        </View>
      </View>
    </View>
  )
}
