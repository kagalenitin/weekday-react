// Import some code we need
var React = require('react-native');
var DayItem = require('./src/day-item');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;


var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Create a react component
var Weekdays = React.createClass({
  render: function(){//render returns what to be shown on the screen.
    return <View style = { styles.container }>
      <Text>
        Days of the week:
      </Text>
    </View>
  }
});

// Style the React component
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Moves stuff height wise
    alignItems: 'center' // Moves stuff width wise
  }
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays
});
