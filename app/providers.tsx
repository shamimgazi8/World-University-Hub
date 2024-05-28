"use client";
import { ThemeProvider } from "next-themes";
import { ConfigProvider } from "antd";
import { Provider } from "react-redux";
import { store } from "@/appstore/store";

const antTheme = {
  token: {
    colorPrimary: "#7367F0",
    fontFamily: "var(--font-jost)",
    colorTextBase: "#424242",
  },
  components: {
    Slider: {
      handleColor: "#91caff",
      handleActiveColor: "#1677ff",
      trackBg: "#91caff",
      trackHoverBg: "#69b1ff",
    },
  },
};

export function Providers({ children }: any) {
  return (
    <Provider store={store}>
      <ConfigProvider theme={antTheme}>
        {/* <ThemeProvider attribute="class"> */}
        {children}
        {/* </ThemeProvider> */}
      </ConfigProvider>
    </Provider>
  );
}
