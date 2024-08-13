import React from 'react';
import { Avatar, Card, CardContent, Typography, Grid } from '@mui/material';

function MyProfile() {
    return (
        <div className='col-span-full p-4 flex justify-center'>
            <Card style={{ marginLeft: "300px", minWidth: '300px', height: '50vh', borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
                <CardContent>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Avatar alt="Furkan Demirbozan" src="https://via.placeholder.com/150" style={{ width: 100, height: 100 }} />
                        </Grid>
                        <Grid item xs>
                            <Typography variant="h4">Furkan Demirbozan</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Yazılım Departmanı</Typography>
                            <Typography variant="subtitle1" color="textSecondary">Junior Backend Developer</Typography>
                        </Grid>
                    </Grid>
                    <Typography style={{ marginTop: 32 }} variant="h6">
                        <strong>İşe Giriş Tarihi:</strong> 15.08.2021
                    </Typography>
                    <Typography variant="h6">
                        <strong>Yönetici:</strong> John Doe
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default MyProfile;
