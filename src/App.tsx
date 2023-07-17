import React, { useEffect } from "react";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();
// 커밋테스트
function App() {
  useEffect(() => {
    setScreenSize();
  });

  const setScreenSize = () => {
    let vh = window.innerHeight * 0.01;
    let wh = window.innerWidth * 0.01;
    console.log(`vh : ${vh * 100}px, wh : ${wh * 100}px`);
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--wh", `${wh}px`);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
