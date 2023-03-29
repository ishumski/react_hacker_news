import React from 'react';
import ReactDOM from 'react-dom/client';
import styled, {ThemeProvider} from "styled-components"
import {styledTheme} from "./core/styles/styledTheme";
import {GlobalStyles} from "./core/styles/GlobalStyles";
import AppRoutes from "./AppRoutes";
import {HomeProvider} from "./context/HomeContext";

const AppContainer = styled.div`
  min-width: 630px;
  padding: 25px;
`

const App = () => (
    <ThemeProvider theme={styledTheme}>
        <GlobalStyles/>
        <HomeProvider>
            <AppContainer>
                <AppRoutes/>
            </AppContainer>
        </HomeProvider>
    </ThemeProvider>
)

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(<App/>);