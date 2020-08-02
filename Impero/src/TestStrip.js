import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
	mainView: {
		flexDirection: 'row'
	},
	leftContainer: {
		borderWidth: 1,
		width: 20,
		margin: 5,
		justifyContent: 'space-between',
		flexDirection: 'column',
		flex: 0.5,
	},
	rightContainer: {
		borderWidth: 1,
		width: 20,
		margin: 5,
		flex: 10,
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	leftSubView: {
		height: 70,
		justifyContent: 'flex-end',
		marginTop: 5,
	},
	rightSubView: {
		height: 70,
		justifyContent: 'space-between',
		marginTop: 5,
	},
	leftColorBlock: {
		height: 15,
		width: 15,
		backgroundColor: 'pink',
		alignItems: 'flex-end'
	},
	rightColorBlock: {
		height: 15,
		width: 40,
		backgroundColor: 'purple',
		justifyContent: 'flex-start'
	},
	rightTextBlock: {
		// height: 15,
		// width: 25,
		alignSelf: 'flex-end'
	},
	rightColorContainer: {
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	input: {
		borderWidth: 1,
		width: 50,
		height: '80%',
	}
});
export default class LandingPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstSelection: '0',
			firstColor: 'pink',
		}
	}
	render() {
		return (
			<ScrollView>
			<View style={styles.mainView}>
				<View style={styles.leftContainer}>
					<View style={styles.leftSubView}>
					<View style={[styles.leftColorBlock, { backgroundColor: this.state.firstColor }]}></View>
					</View>

					<View style={styles.leftSubView}>
					<View style={[styles.leftColorBlock, { backgroundColor: this.state.firstColor }]}></View>
					</View>

					<View style={styles.leftSubView}>
					<View style={[styles.leftColorBlock, { backgroundColor: this.state.firstColor }]}></View>
					</View>

					<View style={styles.leftSubView}>
						<View style={[styles.leftColorBlock, { backgroundColor: this.state.firstColor }]}></View>
					</View>
				</View>

				<View style={styles.rightContainer}>
					<View style={styles.rightSubView}>
						<View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
							<Text>Total Hardness</Text>
							<TextInput
								style={styles.input}
								placeholder="0"
								value={this.state.firstSelection}
								editable={false}
							/>
						</View>

						<View style={styles.rightColorContainer}>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'red', firstSelection: '101' })}
							style={[styles.rightColorBlock, { backgroundColor: 'red' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'green', firstSelection: '102' })}
							style={[styles.rightColorBlock, { backgroundColor: 'green' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'yellow', firstSelection: '103' })}
							style={[styles.rightColorBlock, { backgroundColor: 'yellow' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'purple', firstSelection: '104' })}
							style={[styles.rightColorBlock, { backgroundColor: 'purple' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'blue', firstSelection: '105' })}
							style={[styles.rightColorBlock, { backgroundColor: 'blue' }]}
							/>
						</View>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.rightTextBlock}>101</Text>
						<Text style={styles.rightTextBlock}>102</Text>
						<Text style={styles.rightTextBlock}>103</Text>
						<Text style={styles.rightTextBlock}>104</Text>
						<Text style={styles.rightTextBlock}>105</Text>
					</View>
					<View style={styles.rightSubView}>
						<View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
							<Text>Total Chlorine</Text>
							<TextInput
								style={styles.input}
								placeholder="0"
								value={this.state.firstSelection}
								editable={false}
							/>
						</View>

						<View style={styles.rightColorContainer}>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'red' })}
							style={[styles.rightColorBlock, { backgroundColor: 'red' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'green' })}
							style={[styles.rightColorBlock, { backgroundColor: 'green' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'yellow' })}
							style={[styles.rightColorBlock, { backgroundColor: 'yellow' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'purple' })}
							style={[styles.rightColorBlock, { backgroundColor: 'purple' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'blue' })}
							style={[styles.rightColorBlock, { backgroundColor: 'blue' }]}
							/>
						</View>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.rightTextBlock}>101</Text>
						<Text style={styles.rightTextBlock}>102</Text>
						<Text style={styles.rightTextBlock}>103</Text>
						<Text style={styles.rightTextBlock}>104</Text>
						<Text style={styles.rightTextBlock}>105</Text>
					</View>
					<View style={styles.rightSubView}>
						<View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
							<Text>pH</Text>
							<TextInput
								style={styles.input}
								placeholder="0"
								value={this.state.firstSelection}
								editable={false}
							/>
						</View>

						<View style={styles.rightColorContainer}>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'red' })}
							style={[styles.rightColorBlock, { backgroundColor: 'red' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'green' })}
							style={[styles.rightColorBlock, { backgroundColor: 'green' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'yellow' })}
							style={[styles.rightColorBlock, { backgroundColor: 'yellow' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'purple' })}
							style={[styles.rightColorBlock, { backgroundColor: 'purple' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'blue' })}
							style={[styles.rightColorBlock, { backgroundColor: 'blue' }]}
							/>
						</View>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
						<Text style={styles.rightTextBlock}>101</Text>
						<Text style={styles.rightTextBlock}>102</Text>
						<Text style={styles.rightTextBlock}>103</Text>
						<Text style={styles.rightTextBlock}>104</Text>
						<Text style={styles.rightTextBlock}>105</Text>
					</View>
					<View style={styles.rightSubView}>
						<View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
							<Text>Total Alkaline</Text>
							<TextInput
								style={styles.input}
								placeholder="0"
								value={this.state.firstSelection}
								editable={false}
							/>
						</View>

						<View style={styles.rightColorContainer}>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'red' })}
							style={[styles.rightColorBlock, { backgroundColor: 'red' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'green' })}
							style={[styles.rightColorBlock, { backgroundColor: 'green' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'yellow' })}
							style={[styles.rightColorBlock, { backgroundColor: 'yellow' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'purple' })}
							style={[styles.rightColorBlock, { backgroundColor: 'purple' }]}
							/>
							<TouchableOpacity
							onPress={() => this.setState({ firstColor: 'blue' })}
							style={[styles.rightColorBlock, { backgroundColor: 'blue' }]}
							/>
						</View>
					</View>
				</View>
			</View>
			</ScrollView>
		);
	}
}
