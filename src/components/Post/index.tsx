import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { PinchGestureHandler } from "react-native-gesture-handler";

import { Feather, Ionicons } from "@expo/vector-icons";
import { ProfileImage } from "../ProfileImage";
import { CommentInput } from "../Inputs/CommentInput";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
} from "react-native-reanimated";

const postImage =
  "https://i.pinimg.com/originals/15/c5/69/15c56972ae4fbb6b394a6e6efced477b.jpg";

const profilePicture =
  "https://instagram.fpoa28-1.fna.fbcdn.net/v/t51.2885-19/254823503_896624737651869_2806764688570177140_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpoa28-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=GHxwtnv28-QAX_cXqGh&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-o3nYjG8gL3cfKC2U2EwELg4ij1iljSfwMhJEQOszR8Q&oe=625F24B4&_nc_sid=9a90d6";

const { width, height } = Dimensions.get("window");

export const Post = () => {
  const [commentVisible, setCommentVisible] = useState(false);
  const [commentPosition, setCommentPosition] = useState(height - 55);

  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const openCommentInput = () => {
    setCommentVisible(true);
  };

  const closeCommentInput = () => {
    setCommentVisible(false);
  };

  const pinchGestureHandler = useAnimatedGestureHandler({
    onStart: (e, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: (e) => {
      console.log(e);
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <ProfileImage uri={profilePicture} style={styles.profilePicture} />
          <View>
            <Text style={styles.name}>joao.gab</Text>
          </View>
        </View>
        <Ionicons name="ellipsis-vertical" style={styles.optionIcon} />
      </View>
      <View style={styles.body}>
        <PinchGestureHandler onGestureEvent={pinchGestureHandler}>
          <Animated.View>
            <Image source={{ uri: postImage }} style={styles.image} />
          </Animated.View>
        </PinchGestureHandler>
      </View>
      <View style={styles.bottom}>
        <View style={styles.actions}>
          <View style={styles.actionsGroup}>
            <Ionicons name="heart-outline" style={styles.icons} />
            <Ionicons name="ios-chatbubble-outline" style={styles.icons} />
            <Feather name="send" style={styles.sendIcon} />
          </View>
          <Ionicons name="bookmark-outline" style={styles.icons} />
        </View>
        <View style={styles.footer}>
          <Text style={styles.likedBy}>Curtido por duda e outras pessoas</Text>
          <View style={styles.comment}>
            <Text style={styles.commentName}>duda </Text>
            <Text style={styles.commentText}>topper</Text>
          </View>
        </View>
        <TouchableWithoutFeedback
          style={styles.inputWrapper}
          onPress={openCommentInput}
        >
          <View style={styles.addCommentWrapper}>
            <ProfileImage uri={profilePicture} style={styles.profilePicture} />
            <Text>Adicione um comentário...</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.date}>Há 2 dias</Text>
      </View>
      {commentVisible && (
        <View style={[styles.commentInput, { top: commentPosition }]}>
          <CommentInput
            placeholder="Comentar como joao.gabsilva..."
            onSubmit={() => {}}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height: height * 0.5,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  profile: { flexDirection: "row", alignItems: "center" },
  profilePicture: {
    marginRight: 10,
  },
  name: {},
  optionIcon: {
    fontSize: 20,
  },
  icons: {
    fontSize: 25,
    marginRight: 5,
  },
  body: {},
  image: {
    width,
    height: height * 0.4,
  },
  bottom: {
    paddingHorizontal: 15,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  actionsGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sendIcon: {
    fontSize: 22,
  },
  footer: {},
  likedBy: {},
  comment: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentName: {
    fontWeight: "bold",
  },
  commentText: {},
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  addCommentWrapper: { flexDirection: "row", alignItems: "center" },
  date: {
    fontSize: 12,
  },
  commentInput: {
    padding: 10,
    width,
    backgroundColor: "white",
    position: "absolute",
  },
});
