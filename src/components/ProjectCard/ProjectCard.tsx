
import { Box, Stack, Typography } from "@mui/material"
import { theme } from "../../styles/theme"

interface ProjectCardProps {
    title: string
}

export const ProjectCard = ({ title }: ProjectCardProps) => {

    return (
        <Box
            sx={{
                width: "300px",
                height: "160px",
                borderRadius: "10px",
                background: theme.palette.complementary.beluga.main,
                boxShadow: `1px 1px 1px 1px ${theme.palette.disabled.main}`,
                marginBottom: "10px",
            }}
        >
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    padding: "10px",
                }}
            >
                <Typography variant="body1" sx={{ width: "70%", fontWeight: "bold" }}>
                    {title}
                </Typography>


            </Stack>
            <Stack
                sx={{
                    justifyContent: "space-between",
                    padding: "10px",
                }}
            >

            </Stack>
        </Box>
    )
}
