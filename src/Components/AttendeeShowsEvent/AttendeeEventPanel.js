import { Typography, Paper } from '@mui/material'
import React from 'react'

export default function AttendeeEventPanel() {
    return (
        <div>
            <Paper sx={{minHeight:"100px", textAlign:"center",padding:"40px"}}>
                <Typography variant="h6">Has attended no events..</Typography>
            </Paper>
        </div>
    )
}
