import { Redirect, Slot } from 'expo-router';
import React from 'react';



// const TabRoot = () => {
//     return (
//         <Tabs>
//             <Tabs.Screen name="index" options={{ title: "Home", tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> }} />
            // <Tabs.Screen name="profile" options={{ title: "Profile", tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} /> }} />
//             <Tabs.Screen name="saved" options={{ title: "Saved", tabBarIcon: ({ color }) => <FontAwesome size={28} name="save" color={color} /> }} />
//             <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} /> }} />
//         </Tabs>
//     )
// }   

// export default TabRoot

export default function _layout() {
    const isAuthenticated = true;

    if(!isAuthenticated) return <Redirect href='/sign-in' />;

    return <Slot />;
}
