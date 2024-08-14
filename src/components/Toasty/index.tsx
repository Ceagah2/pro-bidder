import React from "react";
import Toast from "react-native-toast-message";

export default function ToastProviderWrapper({ children }: any) {
  return (
    <>
      {children}
      <Toast position="bottom"/>
    </>
  );
}
