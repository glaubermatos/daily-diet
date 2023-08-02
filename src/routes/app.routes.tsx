import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Feedback } from "@screens/Feedback";

import { Home } from "@screens/Home";
import { MealDetails } from "@screens/MealDetails";
import { NewMeal } from "@screens/NewMeal";
import { Statistics } from "@screens/Statistics";

export function AppRoutes() {
    const {Navigator, Screen} = createNativeStackNavigator()

    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="home" component={Home} />
            <Screen name="statistics" component={Statistics} />
            <Screen name="new" component={NewMeal} />
            <Screen name="meal" component={MealDetails} />
            <Screen name="feedback" component={Feedback} />
        </Navigator>
    );
}