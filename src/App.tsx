import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./router/Router";

export const queryClient = new QueryClient();
// 커밋테스트
const App = () => {
  const setScreenSize = () => {
    const vh = window.innerHeight * 0.01;
    const wh = window.innerWidth * 0.01;
    console.log(`vh : ${vh * 100}px, wh : ${wh * 100}px`);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--wh", `${wh}px`);
  };

  useEffect(() => {
    setScreenSize();
  }, [window.innerHeight, window.innerWidth]);

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
