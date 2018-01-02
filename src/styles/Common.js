import { StyleSheet } from 'react-native';

import colors from './Colors';

/**
 * Styles
 */
export const CommonStyle = StyleSheet.create({
  // containers
  flexContainer: {
    flex:1,
  },
  flexContainerCenter: {
    flex:1,
    justifyContent: 'center',
  },
  flexColumnCentered: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  rowJustifyEnd: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  rowJustifyCenter: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  rowJustifyStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  // align
  alignCenter: {
    alignItems: 'center'
  },
  alignJustifyCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  // color
  colorWhite: {
    color: 'white'
  },
  colorLight: {
    color: colors.light
  },
  colorSecondary: {
    color: colors.secondary
  },
  colorPrimary: {
    color: colors.primary
  },
  colorDanger: {
    color: colors.danger
  },
  colorDark: {
    color: colors.dark
  },
  // backgrounds
  backgroundWhite: {
    backgroundColor: 'white'
  },
  backgroundLight: {
    backgroundColor: colors.light
  },
  backgroundSecondary: {
    backgroundColor: colors.secondary
  },
  backgroundPrimary: {
    backgroundColor: colors.primary
  },
  backgroundDanger: {
    backgroundColor: colors.danger
  },
  backgroundDark: {
    backgroundColor: colors.dark
  },
  // margin top
  marginTop3x: {
    marginTop: 15
  },
  marginTop2x: {
    marginTop: 10
  },
  marginTop: {
    marginTop: 5
  },
  // margin bottom
  marginBottom3x: {
    marginBottom: 15
  },
  marginBottom2x: {
    marginBottom: 10
  },
  marginBottom: {
    marginBottom: 5
  },
  // padding
  padding3x: {
    padding: 15
  },
  padding2x: {
    padding: 10
  },
  padding: {
    padding: 5
  },
  // padding top
  paddingTop3x: {
    paddingTop: 15
  },
  paddingTop2x: {
    paddingTop: 10
  },
  paddingTop: {
    paddingTop: 5
  },
  // padding bottom
  paddingBottom3x: {
    paddingBottom: 15
  },
  paddingBottom2x: {
    paddingBottom: 10
  },
  paddingBottom: {
    paddingBottom: 5
  },

  // fonts
  fontXS:{
    fontSize: 10
  },
  fontS: {
    fontSize: 12
  },
  fontM: {
    fontSize: 14
  },
  fontL: {
    fontSize: 16
  },
  fontXL: {
    fontSize: 18
  },


  //position
  positionAbsolute:{
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  positionAbsoluteBottom:{
    position: "absolute",
    bottom: 0,
    left: 0
  },
  positionRelative:{
    position: "relative",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }

});
