import {
  Colors,
  Typography,
  Spacing,
  Fontsizes,
} from "../../styles/stylesIndex";

import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const AlbumSelectScreenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundStyle: {
    backgroundColor: Colors.basic,
    flex: 1,
  },
  backArrow: {
    width: width * 0.12,
    height: width * 0.12,
    position: "absolute",
    top: height * 0.03,
    left: width * 0.03,
  },

  touchBackArrow: {
    position: "absolute",
    top: height * 0.03,
    left: width * 0.03,
    width: width * 0.12,
    height: width * 0.12,
    zIndex: 10,
  },
  albumImage: {
    width: width * 1.0,
    height: height * 0.55,
  },
  albumInfo: {
    height: height * 0.7,
    backgroundColor: Colors.basic,
  },
  albumTitle: {
    ...Typography.bamin1,
    marginLeft: width * 0.1,
    marginTop: height * 0.03,
    fontSize: Fontsizes.lg,
  },
  albumTag: {
    color: Colors.graytext,
    ...Typography.bamin1,
    fontSize: Fontsizes.md,
    marginLeft: width * 0.7,
    top: height * 0.025,
  },
  albumDate: {
    ...Typography.bamin1,
    fontSize: Fontsizes.md,
    marginLeft: width * 0.1,
  },
  albumCommentsWrapper: {
    marginTop: height * 0.02,
    height: height * 0.22,
  },
  commentLastText: {
    flexDirection: "row",
    marginLeft: width * 0.7,
  },
  commentLastTextUpdate: {
    ...Typography.bamin2,
    marginLeft: width * 0.02,
    color: Colors.black,
    fontSize: Fontsizes.md,
  },
  commentLastTextDelete: {
    ...Typography.bamin2,
    marginLeft: width * 0.02,
    color: Colors.red,
    fontSize: Fontsizes.md,
  },
});

export default AlbumSelectScreenStyles;
