import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React, { Component } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { WebView } from "react-native-webview";

export default class App extends Component {
	render() {
		const INJECTEDJAVASCRIPT = "document.body.style.userSelect = ‘none'";

		return (
			<View style={styles.container}>
				<TouchableWithoutFeedback
					accessible={false}
					onLongPress={() =>
						alert(
							"Clique do usuário para abrir menu de configuração"
						)
					}
				>
					<WebView
						injectedJavaScript={INJECTEDJAVASCRIPT}
						source={{
							uri: "http://unidata.unidataautomacao.com.br",
						}}
					/>
				</TouchableWithoutFeedback>
				<StatusBar style="inverted" />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Constants.statusBarHeight,
		backgroundColor: "#3f51b5",
		justifyContent: "center",
	},
});
