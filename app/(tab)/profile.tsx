import React from 'react'
import { Text, View } from 'react-native'
import "../global.css"

const Profile = () => {
    return (
        <View className='flex-1 justify-center items-center bg-lavender border-10 border-white shadow-black shadow-offset-0-2 shadow-opacity-80 shadow-radius-2'>
            <Text className="text-blue-600 text-center">Profile</Text>
        </View>
    )
}

export default Profile