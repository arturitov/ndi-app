import React, { Component }  from 'react';
import { Button, View, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';


class ExpensesScreen extends Component {
  render() {
    return (
      <View>
              <Button
		        onPress={() => this.props.navigation.navigate("AddExpense")}
		        title="Add Expense"/>
      </View>
    );
  }
}

export default ExpensesScreen;