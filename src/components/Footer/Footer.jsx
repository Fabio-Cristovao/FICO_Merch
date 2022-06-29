import { Box, Container, Typography } from '@material-ui/core'
import React from 'react'

function Footer() {

    return (
        <Box sx={{
            backgroundColor: '#5a5aff',
            height: '80px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '50px',
            paddingBottom: '50px',
        }} >
            <Container maxWidth="100%">
                <Typography variant='h6' align={'center'} style={{ color: '#a5e300', fontWeight: 'bold' }}>
                    FICO 2022
                </Typography>
            </Container>
        </Box >
    )
}

export default Footer