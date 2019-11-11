import React, { Component } from 'react';
import { View, Text, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectExpPost } from '../actions';

class Explore extends Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    

    selectPostPress = (selectedPost) => {
        this.props.selectExpPost(selectedPost)
        this.props.navigation.navigate('PostDetailExplore')
    }

    renderListPost = () => {
        var i=2;
        return this.props.postList.map((item,index) => {
            if(this.props.user.uid != item.userId && item.caption.toLowerCase().includes(this.state.search.toLowerCase())) {
                return (
                    <TouchableWithoutFeedback onPress={() => this.selectPostPress(item)}>
                        <View 
                            style={{ width: '33%', marginVertical: 1}}
                        >
                            <Image source={{uri: item.imageURL }} style={{height: 125, width: '100%' }}/>
                        </View>
                    </TouchableWithoutFeedback>
                )
            }
        })
    }


    render() {
        console.log(this.props.user)
        if(this.props.user) {
            return (
                <View style={{ flex: 1 }}>
                    <SearchBar
                        placeholder="Search"
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                        containerStyle={{ backgroundColor: '#fff' }}
                        inputContainerStyle={{ backgroundColor: '#fff' }}
                        inputStyle={{ color: 'black'}}
                        lightTheme={true}
                        searchIcon={{ size: 27 }}
                    />
                    <ScrollView>
                        <View 
                            style={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                flex: 1,
                                marginHorizontal: '0.9%',
                                justifyContent: 'space-between'
                            }}
                        >
                            {this.renderListPost()}
                        </View>
                    </ScrollView>
                </View>
            )
        }

        return <View />
    }
}

const mapStateToProps = ({ auth, post }) => {
    return { user: auth.user, postList: post.postList }
}

export default connect(mapStateToProps, { selectExpPost })(Explore);