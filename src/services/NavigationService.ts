import {
  createNavigationContainerRef,
  StackActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const navigationService = {
  navigate: (name: never, params: never) => {
    if (navigationRef.isReady()) {
      navigationRef.navigate(name, params);
    }
  },

  push: (name: string, params: object) => {
    if (navigationRef.isReady()) {
      navigationRef.dispatch(StackActions.push(name, params));
    }
  },
  goBack: () => navigationRef.goBack(),
};
