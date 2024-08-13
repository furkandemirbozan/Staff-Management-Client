import React from 'react';
import { Typography, Box } from '@mui/material';

function HomePageLayoutHeroComponent() {
    return (
        <Box
            style={{
                minHeight: 'calc(200vh - 64px)', // Sayfanın oldukça uzun görünmesi için yükseklik artırıldı
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                textAlign: 'center',
                padding: '0 20px',
                background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
                color: '#fff',
                position: 'relative', // Resimlerin yerleşimi için gerekli
                overflowY: 'auto', // Scrollbar için gerekli
            }}
        >
            {/* Başlık ve Giriş Cümlesi */}
            <Typography variant="h1" style={{ fontSize: '4rem', fontWeight: 'bold', margin: '20px 0' }}>
                Staff Management
            </Typography>
            <Typography variant="h5" style={{ maxWidth: '600px', marginBottom: '40px' }}>
                İK görevlerinizi basitleştirin ve gerçekten önemli olana, yani işinize ve çalışanlarınıza odaklanın.
            </Typography>

            {/* İlk Resim */}
            <img
                src="https://i.pinimg.com/564x/37/41/c0/3741c0e1cd783a94dfea2ad56381d59d.jpg"
                alt="Decorative Element 1"
                style={{
                    width: '80%',
                    height: 'auto',
                    marginBottom: '40px',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                }}
            />

            {/* Detaylı Açıklama Metni */}
            <Typography variant="h4" style={{ maxWidth: '800px', marginBottom: '20px' }}>
                HRMS: İş Gücü Yönetimini Yeniden Tanımlayın
            </Typography>
            <Typography variant="body1" style={{ maxWidth: '800px', marginBottom: '40px' }}>
                İnsan kaynakları yönetimi, bir işletmenin en önemli unsurlarından biridir. HRMS, personel yönetimini
                basitleştirir, görev atamalarını kolaylaştırır ve tüm çalışanlarınızın gelişimini izleyerek verimliliğinizi artırır.
                İK süreçlerini dijitalleştirerek zaman ve maliyet tasarrufu sağlayın.
            </Typography>

            {/* İkinci Resim */}
            <img
                src="https://i.pinimg.com/564x/5d/f6/48/5df648bd2655a1113d96b342f94131b2.jpg"
                alt="Decorative Element 2"
                style={{
                    width: '70%',
                    height: 'auto',
                    marginBottom: '40px',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                }}
            />

            {/* Ekstra Bilgi Metni */}
            <Typography variant="h4" style={{ maxWidth: '800px', marginBottom: '20px' }}>
                Güçlü Raporlama ve Analiz Araçları
            </Typography>
            <Typography variant="body1" style={{ maxWidth: '800px', marginBottom: '40px' }}>
                HRMS, güçlü raporlama ve analiz araçlarıyla donatılmıştır. Çalışan verilerini analiz edin, performans
                değerlendirmelerini yönetin ve stratejik kararlar almak için gerekli verileri edinin. Tüm verileriniz
                güvenli ve şifreli bir şekilde saklanır.
            </Typography>

            {/* Üçüncü Resim */}
            <img
                src="https://i.pinimg.com/564x/d9/66/0b/d9660b5b84eb44d25a4455bd8feb2e23.jpg"
                alt="Decorative Element 3"
                style={{
                    width: '90%',
                    height: 'auto',
                    marginBottom: '40px',
                    borderRadius: '20px',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)'
                }}
            />

            {/* Son Metin */}
            <Typography variant="h4" style={{ maxWidth: '800px', marginBottom: '20px' }}>
                İşinizi Geleceğe Taşıyın
            </Typography>
            <Typography variant="body1" style={{ maxWidth: '800px', marginBottom: '40px' }}>
                HRMS ile işinizi geleceğe taşıyın. Sürekli güncellenen modüllerimizle İK yönetimini bir üst seviyeye çıkarın.
                Kullanıcı dostu arayüzümüz, tüm işletme ihtiyaçlarınızı karşılayacak şekilde tasarlanmıştır.
            </Typography>
        </Box>
    );
}

export default HomePageLayoutHeroComponent;
