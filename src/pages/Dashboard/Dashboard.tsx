
import { Stack, Typography } from "@mui/material"

import { ProjectCard } from "../../components/ProjectCard/ProjectCard"


export const Dashboard = () => {



    return (
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',

            }}
        >
            <ProjectCard title="teste" />
            <ProjectCard title="teste" />
            <ProjectCard title="teste" />
        </Stack>
    )
}
