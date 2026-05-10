import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default function Header() {
  return (
    <View className='header'>
      <View className='header-left'>
        <View className='header-avatar'>
          <Image
            className='header-avatar-img'
            src='https://lh3.googleusercontent.com/aida-public/AB6AXuBqvdmRV64H3MT45rcs0f5jyseIpyPtkg8grbzShk9BeWeboEVVACX8D4XwR_emEqtBU13QOMY0muC1RQoI49ixsWRULmzy5ENckkmasp1IXjgGPzVdn3QqM5NIVkKzMcdBXyExMe5D6Rim9t9d3Q2hcvn7WksgFLQp_Nv81-cvR6ay57H_MiM2oF8AsiGoRUs8ZBytCEbmqPeYR1xODbgfj6fyJU-McnpvPn0oINIGsrhYzVCmyxqEC0Onu4m6NpRFj6a7SZHG-sHk'
          />
        </View>
        <Text className='header-title'>组一波</Text>
      </View>
      <View className='header-points'>
        <Text className='header-points-icon'>⭐</Text>
        <Text className='header-points-text'>1250 积分</Text>
      </View>
    </View>
  )
}
