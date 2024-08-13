import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function Card4UpcomingHolidays({ upcomingHolidays }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', padding: 20 }} className='col-span-4'>
            <Card style={{ maxWidth: 600, borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)' }}>
                <CardContent>
                    <Typography variant="h6">Yaklaşan Resmi Tatiller</Typography>

                    <Table style={{ marginTop: 20 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Tatil</TableCell>
                                <TableCell>Başlangıç Tarihi</TableCell>
                                <TableCell>Bitiş Tarihi</TableCell>
                                <TableCell>Tatil Gün Sayısı</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {upcomingHolidays.map((holiday, index) => (
                                <TableRow key={index}>
                                    <TableCell>{holiday.name}</TableCell>
                                    <TableCell>{holiday.startDate}</TableCell>
                                    <TableCell>{holiday.endDate}</TableCell>
                                    <TableCell>{holiday.days}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

export default Card4UpcomingHolidays;
