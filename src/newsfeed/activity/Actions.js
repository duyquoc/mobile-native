import React, {
  Component
} from 'react';
  
import { Icon } from 'react-native-elements'

import {
  NavigationActions
} from 'react-navigation';

import {
  Button,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  View
} from 'react-native';

import {
  MINDS_URI
} from '../../config/Config';

import { getComments } from './comments/CommentsService';
import Comments from './comments/Comments';

export default class Actions extends Component {

  state = {
    comments: [],
    offset: '',
    loading: false,
    refreshing: false,
    avatarSrc: { uri: MINDS_URI + 'icon/' + this.props.entity.guid },
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <View style={styles.actionIcon}>
            <Icon color='rgb(96, 125, 139)' name='thumb-up' />
          </View>
          <View style={styles.actionIcon}>
            <Icon color='rgb(96, 125, 139)' name='thumb-down' />
          </View>
          <View style={styles.actionIcon}>
            <Icon color='rgb(96, 125, 139)' name='flash-on' />
          </View>
          <View style={styles.actionIcon}>
            <Icon color='rgb(96, 125, 139)' name='chat-bubble' onPress={this.loadComments}/>
          </View>
          <View style={styles.actionIcon}>
            <Icon color='rgb(96, 125, 139)' name='repeat' />
          </View>
          {this.props.children}
        </View>
        <Comments comments={this.state.comments}></Comments> 
      </View>
    );
  }

  loadComments = () => {
    getComments(this.props.entity.guid, 0).then((data) => {
      this.setState({
        comments: data.comments,
        offset: data.offset,
        loading: false,
        refreshing: false
      });
    })
    .catch(err => {
      console.log('error');
    })
  }

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  avatar: {
    height: 46,
    width: 46,
    borderRadius: 23,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#EEE',
  },
  actionIcon: {
    flex: 1,
  }
});