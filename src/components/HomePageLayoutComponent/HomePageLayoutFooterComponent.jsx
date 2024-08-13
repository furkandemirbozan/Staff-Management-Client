import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';
import { LinkedIn, YouTube, Instagram, Facebook } from '@mui/icons-material';

function HomePageLayoutFooterComponent() {
    return (
        <Box
            style={{
                padding: '40px 20px',
                backgroundColor: '#3f51b5', // Arka plan rengi uyumlu olacak şekilde seçildi
                color: '#fff',
            }}
        >
            <Grid container spacing={4} justifyContent="space-between">
                {/* Logo ve İletişim Bilgileri */}
                <Grid item xs={12} md={3}>
                    <img
                        src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/616f325923c82836146d34aa_kolay-ik-logo-tr.svg"
                        alt="Kolay İK Logo"
                        style={{ marginBottom: '20px', maxWidth: '150px' }}
                    />
                    <Typography variant="body2">
                        Mesa Koz Sahrayıcedit Mah. Atatürk Cad. N:69 K:5 D:81 Kadıköy / İstanbul / Türkiye
                    </Typography>
                    <Typography variant="body2" style={{ marginTop: '10px' }}>
                        +90 212 951 06 61
                    </Typography>
                    {/* App Store Iconları */}
                    <Box style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                        <img
                            src="https://i.pinimg.com/564x/e4/cc/03/e4cc03c945e472942c4ce34cfe4de6f0.jpg"
                            alt="Google Play"
                            style={{ maxWidth: '50px', height: 'auto' }}
                        />
                        <img
                            src="https://i.pinimg.com/564x/5d/f6/48/5df648bd2655a1113d96b342f94131b2.jpg"
                            alt="Apple Store"
                            style={{ maxWidth: '50px', height: 'auto' }}
                        />
                        <img
                            src="https://i.pinimg.com/564x/d9/66/0b/d9660b5b84eb44d25a4455bd8feb2e23.jpg"
                            alt="Huawei App Gallery"
                            style={{ maxWidth: '50px', height: 'auto' }}
                        />
                    </Box>
                </Grid>

                {/* Ürünler */}
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" style={{ marginBottom: '20px' }}>Ürün</Typography>
                    <Typography variant="body2">Personel</Typography>
                    <Typography variant="body2">Performans</Typography>
                    <Typography variant="body2">Vardiya</Typography>
                    <Typography variant="body2">Ücret Değerlendirme</Typography>
                    <Typography variant="body2">İşe Alım ve Aday Takip</Typography>
                    <Typography variant="body2">Bordro Danışmanlığı</Typography>
                    <Typography variant="body2">Performans Danışmanlığı</Typography>
                    <Typography variant="body2">Fiyatlar</Typography>
                    <Typography variant="body2">Ücretsiz Deneyin</Typography>
                </Grid>

                {/* Kaynaklar */}
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" style={{ marginBottom: '20px' }}>Kaynaklar</Typography>
                    <Typography variant="body2">Destek</Typography>
                    <Typography variant="body2">Blog</Typography>
                    <Typography variant="body2">E-Kitaplar</Typography>
                    <Typography variant="body2">Webinarlar</Typography>
                    <Typography variant="body2">İKütüphane</Typography>
                    <Typography variant="body2">Mevzuat</Typography>
                    <Typography variant="body2">Kullanıcı Hikayeleri</Typography>
                    <Typography variant="body2">İKahve</Typography>
                </Grid>

                {/* Kolay İK */}
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" style={{ marginBottom: '20px' }}>Kolay İK</Typography>
                    <Typography variant="body2">Hakkımızda</Typography>
                    <Typography variant="body2">Kariyer</Typography>
                    <Typography variant="body2">İletişim</Typography>
                    <Typography variant="body2">Medya</Typography>
                    <Typography variant="body2">Dijital Köprü</Typography>
                    <Typography variant="body2">Güncellemeler</Typography>
                </Grid>

                {/* Sertifikalar ve Sosyal Medya */}
                <Grid item xs={12} md={3}>
                    <Box style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                        <img
                            src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/652d06254e7b1ba97d58f03a_Yerli_u%CC%88retim_logosu.svg-p-500.png"
                            alt="Yerli Üretim"
                            style={{ maxWidth: '60px', height: 'auto' }}
                        />
                        <img
                            src="https://cdn.prod.website-files.com/6113889e45c6e62ebf4ca212/6500624dbd04f8de0834eb4d_GPTW_Logo_2017.svg"
                            alt="Great Place to Work"
                            style={{ maxWidth: '60px', height: 'auto' }}
                        />
                    </Box>
                    <Box style={{ display: 'flex', gap: '10px' }}>
                        <Link href="https://www.linkedin.com" target="_blank" rel="noopener" color="inherit">
                            <LinkedIn style={{ fontSize: 30 }} />
                        </Link>
                        <Link href="https://www.youtube.com" target="_blank" rel="noopener" color="inherit">
                            <YouTube style={{ fontSize: 30 }} />
                        </Link>
                        <Link href="https://www.instagram.com" target="_blank" rel="noopener" color="inherit">
                            <Instagram style={{ fontSize: 30 }} />
                        </Link>
                        <Link href="https://www.facebook.com" target="_blank" rel="noopener" color="inherit">
                            <Facebook style={{ fontSize: 30 }} />
                        </Link>
                    </Box>
                </Grid>
            </Grid>

            {/* Alt Bilgi */}
            <Box style={{ marginTop: '40px', borderTop: '1px solid #fff', paddingTop: '20px' }}>
                <Typography variant="body2" style={{ marginBottom: '10px' }}>
                    SÖZLEŞMELER VE POLİTİKALAR
                </Typography>
                <Typography variant="body2">
                    © 2024 Kolay Yazılım A.Ş.
                </Typography>
            </Box>
        </Box>
    );
}

export default HomePageLayoutFooterComponent;
