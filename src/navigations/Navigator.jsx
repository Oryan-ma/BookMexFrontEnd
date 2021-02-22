/* eslint-disable comma-dangle */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../screens/Login";
import Register from "../screens/Register";
import MainPage from "../screens/MainPage";
import RegisterBarber from "../screens/RegisterBarber";
import UserApp from "../screens/UserAppointments";
import UserHome from "../screens/UserHome";
import screen1 from "../screens/screen1";
const stackNavigatorOptions = {
    headerShown: false,
};
const AppNavigator = createStackNavigator(
    {
        Login: { screen: Login },
        Register: { screen: Register },
        MainPage: { screen: MainPage },
        RegisterBarber: { screen: RegisterBarber },
        UserHome: { screen: UserHome },
        UserApp: { screen: UserApp },
         screen1: { screen: screen1 },

    },
    {
        defaultNavigationOptions: stackNavigatorOptions,
    }
);
export default createAppContainer(AppNavigator);
