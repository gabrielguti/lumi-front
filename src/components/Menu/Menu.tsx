import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons"
import { AppBar, Box, MenuItem, Stack, Toolbar, Tooltip, Typography } from "@mui/material"
import { theme } from "../../styles/theme"
import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

export const Menu = () => {
    const navigate = useNavigate()

    return (
        <Stack
            sx={{
                height: '100vh'
            }}
        >
            <AppBar
                position="static"
                sx={{
                    boxShadow: "0",
                }}
            >
                <Toolbar>
                    <Stack
                        direction={"row"}
                        sx={{
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Box
                            display={'flex'}
                            gap={2}
                            sx={{
                                alignItems: "center",

                                width: '100%'
                            }}
                        >
                            <MenuItem onClick={() => navigate('/dashboard')}>
                                <Typography variant="h3">Dashboard</Typography>
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/list')}>
                                <Typography variant="h3">Histórico</Typography>
                            </MenuItem>

                        </Box>

                    </Stack>
                </Toolbar>
            </AppBar>
            <Stack sx={{ padding: 2, height: '100%' }}>
                <Outlet />

            </Stack>
        </Stack>
    )
}
