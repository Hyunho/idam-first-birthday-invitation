import React from 'react';
import { motion } from 'framer-motion';

const Location = () => {
    return (
        <section style={{ padding: '4rem 2rem', background: '#f9f5f0', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h3 style={{ marginBottom: '2rem' }}>오시는 길</h3>

                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                    거궁 하남점
                </h2>

                <p style={{ marginBottom: '2rem', color: '#6d6d6d' }}>
                    경기 하남시 미사대로 456 라파르코 4층
                </p>

                {/* Static Kakao Map Embed */}
                <div style={{
                    margin: '0 auto 2rem auto',
                    maxWidth: '100%',
                    width: '640px', // Max width for larger screens
                }}>
                    <a
                        href="https://map.kakao.com/?urlX=544106.9999999974&amp;urlY=1128941.9999999995&amp;itemId=967998007&amp;q=%EA%B1%B0%EA%B6%81%20%ED%95%98%EB%82%A8%EC%A0%90&amp;srcid=967998007&amp;map_type=TYPE_MAP&amp;from=roughmap"
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: 'block' }}
                    >
                        <img
                            src="http://t1.daumcdn.net/roughmap/imgmap/ff9d64c48df2e468fd2f3d675110bfd6ad25a20575921297e26b075bc6460828"
                            style={{
                                border: '1px solid #ccc',
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                borderRadius: '8px' // Added for better visuals
                            }}
                            alt="Kakao Map"
                        />
                    </a>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        flexWrap: 'wrap'
                    }}
                >
                    <a
                        href="https://kko.to/iZ_ZEh-kIw"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '0.8rem 2rem',
                            background: '#FAE100', // Kakao Yellow
                            color: '#3C1E1E', // Kakao Brownish text
                            borderRadius: '30px',
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        카카오맵으로 보기
                    </a>
                    <a
                        href="https://naver.me/55rmRzzt"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            padding: '0.8rem 2rem',
                            background: '#03C75A', // Naver Green
                            color: '#fff',
                            borderRadius: '30px',
                            fontSize: '0.9rem',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                            textDecoration: 'none'
                        }}
                    >
                        네이버 지도로 보기
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default Location;
