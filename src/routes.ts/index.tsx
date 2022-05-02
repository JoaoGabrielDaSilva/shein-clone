import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../services/NavigationService";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppRoutes />
    </NavigationContainer>
  );
};
