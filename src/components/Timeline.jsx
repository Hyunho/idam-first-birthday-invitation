import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ time, title, delay }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        style={{ display: 'flex', marginBottom: '2rem', position: 'relative' }}
    >
        <div style={{
            width: '80px',
            textAlign: 'right',
            paddingRight: '1rem',
            fontWeight: 'bold',
            color: 'var(--secondary-color)'
        }}>
            {time}
        </div>
        <div style={{ position: 'relative' }}>
            <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'var(--accent-color)',
                position: 'relative',
                zIndex: 1
            }}></div>
        </div>
        <div style={{ paddingLeft: '1rem', flex: 1 }}>
            {title}
        </div>
    </motion.div>
);

const Timeline = () => {
    return (
        <section style={{ padding: '3rem 2rem', background: '#fff' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '3rem' }}>TIMELINE</h3>

            <div style={{ maxWidth: '320px', margin: '0 auto', position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '99px', // 80px + padding + half dot
                    top: '0',
                    bottom: '0',
                    width: '1px',
                    background: '#e0e0e0'
                }}></div>

                <TimelineItem time="11:30" title="입장 및 스냅 촬영" delay={0.2} />
                <TimelineItem time="12:00" title="돌잔치 시작 & 식사" delay={0.4} />
            </div>
        </section>
    );
};

export default Timeline;
