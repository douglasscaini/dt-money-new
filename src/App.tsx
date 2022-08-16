import { Transactions } from "./pages/Transactions";
import { TransactionsProvider } from "./contexts/TransactionsContext";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <TransactionsProvider>
                <Transactions />
            </TransactionsProvider>

            <GlobalStyle />
        </ThemeProvider>
    );
}
