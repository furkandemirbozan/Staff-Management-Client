import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

function Card2UpcomingBirthdays({ upcomingBirthdays }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', padding: 20 }} className='col-span-4'>
            <Card style={{ borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', maxHeight: '400px', overflowY: 'scroll' }}>
                <CardContent>
                    <Typography className='text-cyan-900' variant="h6">Yaklaşan Doğum Günleri</Typography>
                    <List>
                        {upcomingBirthdays.map((person, index) => (
                            <ListItem key={index} style={{ padding: 0 }}>
                                <ListItemText
                                    primary={person.name}
                                    secondary={`Doğum Günü: ${person.birthday}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}

export default Card2UpcomingBirthdays;
