import React from 'react';

function ErrorPage() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'linear-gradient(45deg, #ff6b6b, #f06595, #cc5de8, #845ef7, #5c7cfa)',
            color: '#fff',
            fontFamily: 'Arial, sans-serif',
            textAlign: 'center',
            flexDirection: 'column',
            animation: 'bgAnimation 10s infinite alternate'
        }}>
            <h1 style={{
                fontSize: '6rem',
                fontWeight: 'bold',
                margin: '0',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
            }}>404</h1>
            <h2 style={{
                fontSize: '2rem',
                margin: '20px 0'
            }}>Oops! Page Not Found</h2>
            <p style={{
                fontSize: '1.5rem',
                marginBottom: '40px'
            }}>It looks like the page you re looking for doesn t exist.</p>
            <a href="/" style={{
                fontSize: '1.25rem',
                color: '#fff',
                textDecoration: 'none',
                backgroundColor: '#ff6b6b',
                padding: '10px 20px',
                borderRadius: '5px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                transition: 'background-color 0.3s, box-shadow 0.3s'
            }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ff4757';
                    e.target.style.boxShadow = '0px 6px 12px rgba(0, 0, 0, 0.5)';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#ff6b6b';
                    e.target.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.3)';
                }}
            >
                Go Back to Home
            </a>
            <style>
                {`
                @keyframes bgAnimation {
                    0% { background-position: 0% 50%; }
                    100% { background-position: 100% 50%; }
                }
                `}
            </style>
        </div>
    );
}

export default ErrorPage;
