
import { Dimensions } from "react-native";
// 设计稿的宽度 / 元素的宽度 = 手机屏幕 / 手机中元素的宽度
// 手机中元素的宽度 = 手机屏幕 * 元素的宽度 / 设计稿的宽度
/**
 * 屏幕宽度
 */
export const screenWidth = Dimensions.get("window").width;
/**
 * 屏幕高度
 */
export const screenHeight = Dimensions.get("window").height;
/**
 * 将px转为dp
 * @param {Nmuber} elePx 元素的宽度或者高度 单位 px 
 */
export const pxToDp = (elePx) => screenWidth * elePx / 375;
