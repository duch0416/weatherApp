import React from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import { Forecast } from "../components/forecast/forecast.components";
import { Search } from "../components/search/search.component";
import { StorageKeys } from "../enums/storageKeys.enum";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Container, Main } from "./app.styled";
import { GlobalStyle } from "../globalStyle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [location, setLocation] = useLocalStorage<string>(
    StorageKeys.Location,
    ""
  );

  return (
    <Main>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Container>
          <Search onSearch={setLocation} initValue={location} />
          {!!location && <Forecast location={location} />}
        </Container>
      </QueryClientProvider>
    </Main>
  );
};

export default App;
