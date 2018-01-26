

import React, {
  Component
} from 'react';
  
import {
  NavigationActions
} from 'react-navigation';

import {observer} from "mobx-react/native";

import {
  MINDS_URI,
  MINDS_CDN_URI
} from '../../config/Config';

import {
  Text,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Linking,
} from 'react-native';

import ExplicitImage from './explicit/ExplicitImage'
import AutoHeightFastImage from './AutoHeightFastImage';
import formatDate from '../helpers/date';
import domain from '../helpers/domain';
import MindsVideo from '../../media/MindsVideo';

/**
 * Activity
 */
@observer
export default class MediaView extends Component {

  /**
   * Show activity media
   */
  showMedia() {
    let media;
    let source;

    const type = this.props.entity.custom_type||this.props.entity.subtype;
    switch (type) {
      case 'image':
        source = {
          uri: MINDS_CDN_URI + 'api/v1/archive/thumbnails/' + this.props.entity.guid + '/medium'
        }
        return this.getImage(source);
      case 'batch':
        source = {
          uri: this.props.entity.custom_data[0].src
        }
        return this.getImage(source);
      case 'video':
        return this.getVideo();
    }

    if (this.props.entity.perma_url) {
      source = {
        uri: this.props.entity.thumbnail_src
      }

      return (
        <View style={styles.richMediaContainer}>
          { source.uri ? this.getImage(source) : null }
          <TouchableOpacity style={styles.richMedia} onPress={this.openLink}>
            <Text style={styles.title}>{this.props.entity.title}</Text>
            <Text style={styles.domain}>{domain(this.props.entity.perma_url)}</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return null;
  }

  /* URL is -> MINDS_URI + 'api/v1/media/' + this.props.entity.custom_data.guid + '/play'*/
  getVideo() {
    let guid;
    if (this.props.entity.custom_data) {
      guid = this.props.entity.custom_data.guid;
    } else {
      guid = this.props.entity.cinemr_guid;
    }
    return (
      <View style={styles.imageContainer}>
        <MindsVideo video={{'uri': 'https://d2isvgrdif6ua5.cloudfront.net/cinemr_com/' + guid +  '/360.mp4'}} entity={this.props.entity}/>
      </View>
    );
  }
  /**
   * Get image with autoheight or Touchable fixed height
   * @param {object} source
   */
  getImage(source) {
    this.source = source;
    const autoHeight = this.props.autoHeight;
    return autoHeight ? (
      <TouchableOpacity onPress={this.navToImage} style={styles.imageContainer} activeOpacity={1}>
        <AutoHeightFastImage source={source} width={Dimensions.get('window').width} />
      </TouchableOpacity>
      ) : (
      <TouchableOpacity onPress={this.navToActivity} style={styles.imageContainer} activeOpacity={1}>
        <ExplicitImage source={source} entity={this.props.entity} style={styles.image} disableProgress={this.props.disableProgress}/>
      </TouchableOpacity>
    );
  }

  /**
   * Render
   */
  render() {
    const media = this.showMedia();

    if (!media)
      return null;

    return (
      <View style={this.props.style}>
        {  media }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'stretch',
    minHeight: 200,
  },
  image: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  richMediaContainer: {
    //borderWidth: 1,
    //borderColor: '#ececec',
  },
  richMedia: {
    padding: 8,
  },
  domain: {
    fontSize: 11,
    color: '#888',
  },
});