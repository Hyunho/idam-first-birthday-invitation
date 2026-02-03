import React from 'react';
import { motion } from 'framer-motion';

const GrowthGallery = () => {
    // Generate milestones based on actual files in public/images/growth
    // Day 0 (000.jpeg) + Day 10-280 (XXX-1.jpeg, XXX-2.jpeg)
    const milestones = [];

    // Add Day 0
    milestones.push({
        id: 'day0',
        label: 'D + 0',
        photos: [`${import.meta.env.BASE_URL}images/growth/000.jpeg`]
    });

    // Add Day 10 to 280
    for (let day = 10; day <= 280; day += 10) {
        const dayStr = day.toString().padStart(3, '0');
        milestones.push({
            id: `day${day}`,
            label: `D + ${day}`,
            photos: [
                `${import.meta.env.BASE_URL}images/growth/${dayStr}-1.jpeg`,
                `${import.meta.env.BASE_URL}images/growth/${dayStr}-2.jpeg`
            ]
        });
    }

    return (
        <section style={{
            padding: '3rem 2rem',
            backgroundColor: '#fdfbf7',
            position: 'relative',
        }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 style={{
                    fontSize: '1.4rem',
                    color: 'var(--secondary-color)',
                    marginBottom: '0.5rem',
                    fontFamily: 'var(--font-serif)'
                }}>
                    이담이의 성장일기
                </h2>
                <p style={{ color: '#8d6e63', fontSize: '0.95rem' }}>
                    작은 씨앗에서 꽃이 되기까지
                </p>
            </div>

            <div style={{ position: 'relative', maxWidth: '400px', margin: '0 auto' }}>
                {/* Central Growth Line */}
                <div style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '0',
                    bottom: '0',
                    width: '2px',
                    background: 'linear-gradient(to bottom, #d4a373 0%, #8d6e63 100%)',
                    zIndex: 0
                }}></div>

                {milestones.map((milestone, index) => (
                    <motion.div
                        key={milestone.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index < 3 ? index * 0.1 : 0 }}
                        style={{
                            marginBottom: '3rem',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        {/* Date Marker */}
                        <div style={{
                            textAlign: 'center',
                            marginBottom: '1rem',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <div style={{
                                background: '#fff',
                                padding: '0.3rem 1rem',
                                borderRadius: '20px',
                                border: '1px solid var(--accent-color)',
                                color: 'var(--secondary-color)',
                                fontWeight: 'bold',
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1rem',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                <span>{milestone.label}</span>
                            </div>
                        </div>

                        {/* Photos Layout */}
                        <div style={{
                            background: '#fff',
                            padding: '10px',
                            borderRadius: '12px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                            position: 'relative'
                        }}>
                            {/* Decorative triangle pointing to center if needed, or just simple card */}

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: milestone.photos.length === 1 ? '1fr' : '1fr 1fr',
                                gap: '8px',
                            }}>
                                {milestone.photos.map((photo, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            borderRadius: '8px',
                                            aspectRatio: '3/4', // Portrait ratio usually looks good for baby photos or stick to original
                                        }}
                                    >
                                        <img
                                            src={photo}
                                            alt={`${milestone.label} - ${idx + 1}`}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                ))}

                {/* End Marker */}
                <div style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                    background: '#fdfbf7', // Mask the line end
                    paddingTop: '1rem'
                }}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--accent-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto',
                        color: '#fff',
                        fontSize: '1.2rem',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                    }}>
                        ♥
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GrowthGallery;
