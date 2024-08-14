import { Dimensions } from "react-native";

const deviceHeight = Dimensions.get("window").height;
export const useResponsive = (size: number) => {
  if (deviceHeight <= 568) {
    return Math.round(size);
  } else if (deviceHeight <= 667) {
    return `${Math.round(size * 1.2)}px`;
  } else if (deviceHeight <= 736) {
    return `${Math.round(size * 1.3)}px`;
  } else if (deviceHeight <= 1024) {
    return `${Math.round(size * 1.4)}px`;
  }
};
