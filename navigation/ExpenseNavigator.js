import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import IOSIcon from "react-native-vector-icon/Ionicons";
import AddExpense from '../screen/AddExpense';
import ExpensesScreen from '../screen/ExpensesScreen';

const stackNav = StackNavigator ({
	ExpensesScreen: {
		screen: ExpensesScreen
		navigationOptions: ({navigation}) => ({
			title: "Expenses",
			headerLeft:(
				<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
					<IOSIcon name="ios-menu" size={30}/>
				</TouchableOpacity>
			),
			headerStyle: {p addintRight:10, paddintLeft:10 }
		})
	},
	AddExpense: {
		screen: AddExpense,
		navigationOptions: (props) => ({
			title: "Add Expense",
		})
	}
});

export default stackNav;