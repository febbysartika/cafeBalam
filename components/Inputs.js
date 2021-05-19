import React, { Component } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { FontAwesome as Icon } from "@expo/vector-icons";
import { Input } from "react-native-elements";

class Inputs extends Component {
  state = { isFocused: false };

  onFocusChange = () => {
    this.setState({ isFocused: true });
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          { borderColor: this.state.isFocused ? "#EBD4D4" : "#eee" },
        ]}
      >
        <Input
          placeholder={this.props.name}
          onFocus={this.onFocusChange}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          secureTextEntry={this.props.pass}
          //onChangeText={this.props.clidked}
          
          //onChangeText={this.props.name => this.setState({name})}
          leftIcon={
            <Icon
              name={this.props.icon}
              size={22}
              color={this.state.isFocused ? "#EBD4D4" : "grey"}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 50,
    borderRadius: 100,
    marginVertical: 10,
    borderWidth: 3.5,
  },
  inputContainer: {
    borderBottomWidth: 0,
  },
  inputText: {
    color: "#EBD4D4",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default Inputs;