import React from 'react'
import { Button, CircularProgress } from '@mui/material'
export default function LoadingButton() {
    return (
        <div>
            <Button disabled variant="outlined" size="small" sx={{ width: "404px" }}><CircularProgress/></Button>
        </div>
    )
}
