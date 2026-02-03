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
                    거궁 한정식
                </h2>

                <p style={{ marginBottom: '2rem', color: '#6d6d6d' }}>
                    경기 광주시 초월읍 충효관로 4<br />
                    (지번: 경기 광주시 초월읍 대쌍령리 407)
                </p>

                <a
                    href="https://map.naver.com/p/search/%EA%B1%B0%EA%B6%81%ED%95%9C%EC%A0%95%EC%8B%9D"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: '0.8rem 2rem',
                        background: 'var(--secondary-color)',
                        color: '#fff',
                        borderRadius: '30px',
                        fontSize: '0.9rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                    }}
                >
                    네이버 지도로 보기
                </a>
            </motion.div>
        </section>
    );
};

export default Location;
