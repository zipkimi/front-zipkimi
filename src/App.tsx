import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Router from "./router/Router";

export const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
};

export default App;
