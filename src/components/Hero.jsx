import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            padding: '4rem 2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div style={{
                    marginBottom: '2rem',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    width: '200px',
                    height: '200px',
                    margin: '0 auto 2rem',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}>
                    <img
                        src={`${import.meta.env.BASE_URL}images/idam.png`}
                        alt="이담"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                    />
                </div>

                <h2 style={{
                    fontSize: '1.2rem',
                    color: 'var(--secondary-color)',
                    marginBottom: '1rem',
                    letterSpacing: '0.1em'
                }}>
                    초대합니다
                </h2>

                <h1 style={{
                    fontSize: '2.5rem',
                    marginBottom: '2rem',
                    color: 'var(--text-color)'
                }}>
                    이담이의<br />첫 생일파티
                </h1>

                <div style={{
                    width: '1px',
                    height: '60px',
                    background: 'var(--accent-color)',
                    margin: '0 auto 2rem'
                }}></div>

                <p style={{ fontSize: '1.2rem', margin: '0.5rem 0', fontWeight: 'bold' }}>
                    2026. 04. 25 (토)
                </p>
                <p style={{ fontSize: '1.1rem', color: '#6d6d6d' }}>
                    오후 12시
                </p>
            </motion.div>
        </section>
    );
};

export default Hero;
