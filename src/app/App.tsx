import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import { Forecast } from "../components/forecast/forecast.components";
import { Search } from "../components/search/search.component";
import { StorageKeys } from "../enums/storageKeys.enum";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Container, Main, InerfaceContainer, StyledSwitch } from "./app.styled";
import { GlobalStyle } from "../globalStyle";
import { TemperatureUnit } from "../types/temperatureUnit.type";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const App: React.FC = () => {
  const [temperatureUnit, setTemperatureUnit] = useState<TemperatureUnit>('celsius');
  const [location, setLocation] = useLocalStorage<string>(
    StorageKeys.Location,
  );

  const handleTemperatureUnitChange = (switchActive: boolean) => {
    switchActive ? setTemperatureUnit('fahrenheit') : setTemperatureUnit('celsius');
  }

  return (
    <Main>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Container>
          <InerfaceContainer>
            <Search onSearch={setLocation} initValue={location} />
            <StyledSwitch onToggle={handleTemperatureUnitChange}/>
          </InerfaceContainer>
          <Forecast location={location} temperatureUnit={temperatureUnit} />
        </Container>
      </QueryClientProvider>
    </Main>
  );
};

export default App;
