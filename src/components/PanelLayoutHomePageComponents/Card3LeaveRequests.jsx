import React from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Card3LeaveRequests({ remainingDays, leaveRequests }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', padding: 20 }} className='col-span-4'>
            <Card style={{ maxWidth: 600, borderRadius: '15px', boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', maxHeight: '400px', overflowY: 'scroll' }}>
                <CardContent>
                    <Typography variant="h6">Son İzinlerim Hakkım</Typography>
                    <Typography variant="h3" style={{ margin: '20px 0' }}>{remainingDays} GÜN</Typography>
                    <Typography color="textSecondary">kalan izin hakkınız bulunmaktadır.</Typography>

                    <Table style={{ marginTop: 20 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Durum</TableCell>
                                <TableCell>Tip</TableCell>
                                <TableCell>Başlangıç Tarihi</TableCell>
                                <TableCell>Bitiş Tarihi</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {leaveRequests.map((request, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        {request.status === 'approved' ? (
                                            <CheckCircleIcon style={{ color: 'green' }} />
                                        ) : request.status === 'rejected' ? (
                                            <CancelIcon style={{ color: 'red' }} />
                                        ) : (
                                            <MoreHorizIcon style={{ color: 'orange' }} />
                                        )}
                                    </TableCell>
                                    <TableCell>{request.type}</TableCell>
                                    <TableCell>{request.startDate}</TableCell>
                                    <TableCell>{request.endDate}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}

export default Card3LeaveRequests;
