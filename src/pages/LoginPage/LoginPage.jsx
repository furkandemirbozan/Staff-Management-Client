import React from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

function LoginPage() {
    return (
        <Box
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'linear-gradient(135deg, #ff7e5f, #feb47b)',
                color: '#fff',
                textAlign: 'center',
            }}
        >
            <Container
                maxWidth="xs"
                style={{
                    padding: '40px',
                    borderRadius: '15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0px 4px 30px rgba(0, 0, 0, 0.2)',
                }}
            >
                <Typography variant="h4" style={{ marginBottom: '20px', fontWeight: 'bold' }}>
                    Welcome Back!
                </Typography>
                <Typography variant="body1" style={{ marginBottom: '40px' }}>
                    Please login to your account
                </Typography>
                <form>
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Username"
                        margin="normal"
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                        style={{ marginBottom: '20px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '5px' }}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Password"
                        type="password"
                        margin="normal"
                        InputProps={{
                            style: { color: '#fff' },
                        }}
                        InputLabelProps={{
                            style: { color: '#fff' },
                        }}
                        style={{ marginBottom: '40px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '5px' }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        style={{
                            backgroundColor: '#ff7e5f',
                            color: '#fff',
                            padding: '10px',
                            borderRadius: '30px',
                            fontWeight: 'bold',
                            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
                        }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = '#feb47b';
                            e.target.style.boxShadow = '0px 6px 25px rgba(0, 0, 0, 0.5)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = '#ff7e5f';
                            e.target.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.3)';
                        }}
                    >
                        Login
                    </Button>
                </form>
            </Container>
        </Box>
    );
}

export default LoginPage;
