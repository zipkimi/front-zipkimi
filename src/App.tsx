import React from "react";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();
// 커밋테스트
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
