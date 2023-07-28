import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard/Dashboard"

import { Menu } from "./components/Menu/Menu"
import { HistoricList } from "./pages/historicList/HistoricList"

export const App = () => {

    return (
        <Box className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Menu />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/list" element={<HistoricList />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Box>
    )
}
