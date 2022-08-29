import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen"
import SettingsScreen from "../screens/SettingsScreen"
import Faqs from "../screens/Faqs"
import ContactScreen from "../screens/ContactScreen"

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="FAQs" component={Faqs} />
            <Tab.Screen name="Contact" component={ContactScreen} />

        </Tab.Navigator>
    )
}

export default BottomTab