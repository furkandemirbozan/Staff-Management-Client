import React from 'react';
import Card1Profile from '../../components/PanelLayoutHomePageComponents/Card1Profile';
import Card2UpcomingBirthdays from '../../components/PanelLayoutHomePageComponents/Card2UpcomingBirthdays';
import Card3UpcomingEvents from '../../components/PanelLayoutHomePageComponents/Card3UpcomingEvents';
import Card3LeaveRequests from '../../components/PanelLayoutHomePageComponents/Card3LeaveRequests';
import Card4UpcomingHolidays from '../../components/PanelLayoutHomePageComponents/Card4UpcomingHolidays';
import { useNavigate } from 'react-router-dom';

function PanelLayoutHomePage() {
    const birthdays = [
        { name: 'Furkan Demirbozan', birthday: '15/08/2024' },
        { name: 'Ali Yılmaz', birthday: '20/08/2024' },
        { name: 'Ayşe Kara', birthday: '25/08/2024' },
        { name: 'Mehmet Can', birthday: '05/09/2024' },
        { name: 'Elif Yıldız', birthday: '12/09/2024' },
        { name: 'Ahmet Öztürk', birthday: '18/09/2024' },
        { name: 'Zeynep Arslan', birthday: '22/09/2024' },
        { name: 'Berkay Kaplan', birthday: '30/09/2024' },
        { name: 'Ebru Aydın', birthday: '02/10/2024' },
        { name: 'Murat Demir', birthday: '08/10/2024' },
        { name: 'Gizem Şahin', birthday: '12/10/2024' },
        { name: 'Selin Koç', birthday: '20/10/2024' },
        { name: 'Tolga Kaya', birthday: '28/10/2024' },
        { name: 'Seda Çelik', birthday: '05/11/2024' },
        { name: 'Kaan Güler', birthday: '15/11/2024' },
    ];
    const events = [
        { name: 'Yazılım Geliştirme Semineri', description: 'Yazılım dünyasındaki son trendler', startDate: '01/09/2024', endDate: '02/09/2024' },
        { name: 'Takım Çalışması Workshop', description: 'Ekip içi iletişim ve verimlilik', startDate: '10/09/2024', endDate: '11/09/2024' },
        { name: 'Proje Yönetimi Eğitimi', description: 'Proje yönetimi metodolojileri', startDate: '15/09/2024', endDate: '16/09/2024' },
        { name: 'Yazılım Geliştirme Semineri', description: 'Yazılım dünyasındaki son trendler', startDate: '01/09/2024', endDate: '02/09/2024' },
        { name: 'Takım Çalışması Workshop', description: 'Ekip içi iletişim ve verimlilik', startDate: '10/09/2024', endDate: '11/09/2024' },
        { name: 'Proje Yönetimi Eğitimi', description: 'Proje yönetimi metodolojileri', startDate: '15/09/2024', endDate: '16/09/2024' },
        { name: 'Yazılım Geliştirme Semineri', description: 'Yazılım dünyasındaki son trendler', startDate: '01/09/2024', endDate: '02/09/2024' },
        { name: 'Takım Çalışması Workshop', description: 'Ekip içi iletişim ve verimlilik', startDate: '10/09/2024', endDate: '11/09/2024' },
        { name: 'Proje Yönetimi Eğitimi', description: 'Proje yönetimi metodolojileri', startDate: '15/09/2024', endDate: '16/09/2024' },
        { name: 'Yazılım Geliştirme Semineri', description: 'Yazılım dünyasındaki son trendler', startDate: '01/09/2024', endDate: '02/09/2024' },
        { name: 'Takım Çalışması Workshop', description: 'Ekip içi iletişim ve verimlilik', startDate: '10/09/2024', endDate: '11/09/2024' },
        { name: 'Proje Yönetimi Eğitimi', description: 'Proje yönetimi metodolojileri', startDate: '15/09/2024', endDate: '16/09/2024' },
        { name: 'Yazılım Geliştirme Semineri', description: 'Yazılım dünyasındaki son trendler', startDate: '01/09/2024', endDate: '02/09/2024' },
        // ... diğer etkinlikler
    ];
    const leaveRequests = [
        { status: 'approved', type: 'Mazeret İzni', startDate: '10.08.2024', endDate: '12.08.2024' },
        { status: 'pending', type: 'Ücretsiz İzin', startDate: '10.08.2024', endDate: '12.08.2024' },
        { status: 'rejected', type: 'Mazeret İzni', startDate: '10.08.2024', endDate: '12.08.2024' },
        // ... diğer izin 
        { status: 'approved', type: 'Mazeret İzni', startDate: '10.08.2024', endDate: '12.08.2024' },
        { status: 'pending', type: 'Ücretsiz İzin', startDate: '10.08.2024', endDate: '12.08.2024' },
        { status: 'rejected', type: 'Mazeret İzni', startDate: '10.08.2024', endDate: '12.08.2024' },
        // ... diğer izin 
        { status: 'approved', type: 'Mazeret İzni', startDate: '10.08.2024', endDate: '12.08.2024' },
        { status: 'pending', type: 'Ücretsiz İzin', startDate: '10.08.2024', endDate: '12.08.2024' },
        { status: 'rejected', type: 'Mazeret İzni', startDate: '10.08.2024', endDate: '12.08.2024' },

    ];
    const holidays = [
        { name: 'Cumhuriyet Bayramı', startDate: '29/10/2024', endDate: '30/10/2024', days: 2 },
        { name: 'Yılbaşı', startDate: '31/12/2024', endDate: '01/01/2025', days: 2 },
        // ... diğer resmi tatiller
    ];

    return (
        <>
            <Card1Profile

                name="Furkan"
                surname="Demirbozan"
                image="https://via.placeholder.com/150"
                department="Software Development"
                position="Frontend Developer"
                startDate="01/02/2023"
                manager="John Doe"
            />
            <Card3LeaveRequests remainingDays={10} leaveRequests={leaveRequests} />
            <Card2UpcomingBirthdays upcomingBirthdays={birthdays} />
            <Card3UpcomingEvents upcomingEvents={events} />
            <Card4UpcomingHolidays upcomingHolidays={holidays} /></>


    );

}

export default PanelLayoutHomePage;
