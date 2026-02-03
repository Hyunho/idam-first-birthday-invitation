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

                <a
                    href="https://naver.me/55rmRzzt"
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
