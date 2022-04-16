import React from "react";
import { TextInput } from "react-native";

type Props = {
  value: string;
};

export const BaseInput = ({ value, ...props }: Props) => {
  return <TextInput value={value} {...props} />;
};
