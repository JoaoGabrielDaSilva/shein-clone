import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ProfileImage } from "../../ProfileImage";
import { BaseInput } from "../BaseInput";

const profilePicture =
  "https://instagram.fpoa28-1.fna.fbcdn.net/v/t51.2885-19/254823503_896624737651869_2806764688570177140_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpoa28-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=GHxwtnv28-QAX_cXqGh&edm=ALbqBD0BAAAA&ccb=7-4&oh=00_AT-o3nYjG8gL3cfKC2U2EwELg4ij1iljSfwMhJEQOszR8Q&oe=625F24B4&_nc_sid=9a90d6";

type Props = TextInputProps & {
  style?: StyleProp<ViewStyle>;
  onSubmit: () => void;
};

export const CommentInput = ({ style, onSubmit, ...props }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <ProfileImage uri={profilePicture} style={styles.profilePicture} />
      <BaseInput value="" {...props} />
      <TouchableOpacity onPress={onSubmit}></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    paddingHorizontal: 5,
    marginRight: 10,
  },
});
