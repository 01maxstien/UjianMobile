import React, { Component } from 'react';
import {View,Text, Image, TouchableWithoutFeedback,ActivityIndicator} from 'react-native';
import { Header,  Input,Icon } from 'react-native-elements';
import { Card, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
import {connect} from 'react-redux'
import {inputEditCaptionChange,saveEditPost,selectProfilePostRefresh} from '../actions'

class EditPostDetails extends Component {

    componentDidUpdate() {
        if(this.props.captionEdit === '') {
            this.props.navigation.navigate('Profile',{
                onGoBack: () => this.props.selectedProfilePostRefresh(this.props.id),
              });
        }
    }
    render() {
        return (
            <View>
                 <Header
                    placement="left"
                    leftComponent={{ 
                        icon: 'clear', 
                        color: 'black',
                        onPress: () => this.props.navigation.goBack() 
                    }}
                    centerComponent={{ 
                        text: 'Edit Post', 
                        style: { color: 'black', fontSize: 18, fontWeight: '700' } 
                    }}
                    rightComponent={this.props.loading ? <ActivityIndicator size="small" color="#4388d6" /> : { 
                        icon: 'done', 
                        color: '#4388d6',
                        onPress: ()=>this.props.saveEditPost({
                            id:this.props.id,
                            caption:this.props.captionEdit,
                            imageURL:this.props.imageURL,
                            userId:this.props.userId
                        })
                    }}
                    containerStyle={{
                        backgroundColor: '#fff',
                        justifyContent: 'space-around',
                        elevation: 2,
                        marginTop: Platform.OS === 'ios' ? 0 : - 25
                    }}
                />
               
               <View style={{ paddingTop: 15 }}>
               <Card>
                    <CardItem>
                        <Left style={{ flex: 3 }}>
                            <Thumbnail source={{uri: this.props.userPhoto }} />
                            <Body>
                                <Text>{this.props.username}</Text>
                                <Text note>Instagrin User</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Icon
                                name='more-vert'
                                size={30}
                                onPress={() => this.setState({ isVisible: true  })}
                            />
                        </Right>
                    </CardItem>
                    <CardItem cardBody>
                        <Image source={{uri: this.props.imageURL }} style={{height: 350, width: null, flex: 1}}/>
                    </CardItem>
                           <Text style={{ 
                        paddingLeft: 12,
                        opacity: 0.3
                    }}>
                        Caption
                    </Text>
                    <Input
                        placeholder='Caption'
                        value={this.props.captionEdit}
                        onChangeText={this.props.inputEditCaptionChange}
                    />
                    {/* <CardItem>
                        <Left>
                            <Input value={this.props.captionEdit}
                            onChangeText={this.props.inputEditCaptionChange}/>
                        </Left>
                    </CardItem> */}
                </Card>
                    {/* <Text style={{ 
                        paddingLeft: 12,
                        opacity: 0.3
                    }}>
                        Caption
                    </Text>
                    <Input
                        placeholder='Caption'
                        value={this.props.captionEdit}
                        onChangeText={this.props.inputEditCaptionChange}
                    /> */}
                </View>
            </View>
        );
    }
}

const mapStateToProps=({editPost,post})=>{
    return{
        ...editPost,
        ...post.selectedPostDetailProfile,
    }
}

export default connect(mapStateToProps,{inputEditCaptionChange,saveEditPost,selectProfilePostRefresh})(EditPostDetails);