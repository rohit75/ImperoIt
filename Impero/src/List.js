import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator, Image, StyleSheet} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
	mainContainer: {
		marginHorizontal: 2,
		marginVertical: 5,
	},
	itemHeader: {
		justifyContent: 'flex-start',
		fontWeight: 'bold',
	},
	productView: {
		marginRight: 10,
		marginBottom: 10,
		width: 120,
	},
	productCode: {
		fontWeight: 'bold',
		color: 'white',
		marginHorizontal: 5,
	},
	productCodeView: {
		position: 'absolute',
		left: 15,
		top: 5,
		backgroundColor: '#3396FF',
		borderRadius: 5,
	},
	imageView: {
		width: 100,
		height: 100,
		borderRadius: 5,
		alignSelf: 'center',
	}
})
export default class List extends React.Component {
static	navigationOptions: {
		headerStyle: { backgroundColor: 'black' },
}
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
    };
  }
  componentDidMount() {
    const params = {
      CategoryId: 56,
      PageIndex: 2,
    };
    fetch('http://esptiles.imperoserver.in/api/API/Product/DashBoard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        const SubCategories = responseJson.Result.Category[0].SubCategories;
        SubCategories.sort(function (a, b) {
          var nameA = a.Name.substr(a.Name.indexOf(' ') + 1).toLowerCase(),
            nameB = b.Name.substr(b.Name.indexOf(' ') + 1).toLowerCase();
          if (nameA > nameB)
            //sort string ascending
            return 1;
          return 0; //default return value (no sorting)
        });
        console.log(SubCategories);
        this.setState({list: SubCategories, loading: false});
      })
      .catch((error) => {
        console.log('error', error);
      });
	}
	
	capitalize = (s) => {
		if (typeof s !== 'string') return ''
		return s.charAt(0) + s.slice(1).toLowerCase()
	}
	
  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="small" color="#0000ff" />;
    }
    return (
      <View style={{margin: 2}}>
        <FlatList
					data={this.state.list}
					keyExtractor={(item) => item.Id.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.mainContainer}>
                <Text style={styles.itemHeader}>{item.Name}</Text>
                <ScrollView
									horizontal={true}
									>
										
                  {item.Product.map((data) => (
                    <TouchableOpacity
                      style={styles.productView}
                      key={data.Id}>
												<Image
													// resizeMode={'stretch'}
													source={{ uri: `${data.ImageName}` }}
													style={styles.imageView}
													onError={(error)=> console.log('error Image', error)}
												/>
												<View style={styles.productCodeView}>
												<Text
													style={styles.productCode}
												>{data.PriceCode}</Text>
												</View>
												<Text style={{ fontSize: 11, alignSelf: 'center',}}>{this.capitalize(data.Name)}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
