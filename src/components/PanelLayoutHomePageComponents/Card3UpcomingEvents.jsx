import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';

function Card3UpcomingEvents({ upcomingEvents }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', padding: 20 }} className='col-span-2'>
            <Card style={{ maxWidth: 345, borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', maxHeight: '400px', overflowY: 'scroll' }}>
                <CardContent>
                    <Typography variant="h6">Yaklaşan Etkinlikler</Typography>
                    <List>
                        {upcomingEvents.map((event, index) => (
                            <ListItem key={index} style={{ padding: 0 }}>
                                <ListItemText
                                    primary={event.name}
                                    secondary={`Açıklama: ${event.description}\nBaşlangıç: ${event.startDate}\nBitiş: ${event.endDate}`}
                                />
                            </ListItem>
                        ))}
                    </List>
                </CardContent>
            </Card>
        </div>
    );
}

export default Card3UpcomingEvents;
