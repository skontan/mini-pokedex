import React from "react";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BottomTabNavigator />
    </QueryClientProvider>
  );
};

export default App;
