import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid } from '@mui/material';
import { useActionData, useNavigate } from 'react-router-dom';

function Card1({ name, surname, image, department, position, startDate, manager }) {
    const navigate = useNavigate();
    return (
        <div
            onClick={() => navigate('/panel/profile')}
            style={{ display: 'flex', justifyContent: 'flex-start', padding: 20 }} className='col-span-3 '>
            <Card style={{ maxWidth: 345, borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
                <CardContent className='cursor-pointer' >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar alt={`${name} ${surname}`} src={image} style={{ width: 60, height: 60 }} />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h6">{`${name} ${surname}`}</Typography>
                            <Typography color="textSecondary">{department}</Typography>
                            <Typography color="textSecondary">{position}</Typography>
                        </Grid>
                    </Grid>
                    <Typography style={{ marginTop: 16 }}>
                        <strong>Start Date:</strong> {startDate}
                    </Typography>
                    <Typography>
                        <strong>Manager:</strong> {manager}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default Card1;
