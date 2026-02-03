import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Use data from configuration file
import { growthGalleryData } from '../data/growthGalleryData';

const GrowthGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const milestones = growthGalleryData;

    return (
        <section style={{ padding: '4rem 1.5rem', backgroundColor: '#fff', position: 'relative' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 style={{
                    fontSize: '1.5rem',
                    color: '#5d4037',
                    marginBottom: '0.8rem',
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '-0.5px'
                }}>
                    노이담의 성장일지</h2>
                <div style={{
                    width: '30px',
                    height: '2px',
                    background: '#d4a373',
                    margin: '0 auto'
                }}></div>
            </div>

            <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
                {/* Timeline Line (Left aligned on mobile, Center on desktop concept but here effectively left) */}
                <div style={{
                    position: 'absolute',
                    left: '20px',
                    top: '10px',
                    bottom: '0',
                    width: '1px',
                    background: '#e0e0e0',
                    zIndex: 0
                }}></div>

                {milestones.map((item, index) => {
                    if (item.type === 'message') {
                        return (
                            <motion.div
                                key={`msg-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5 }}
                                style={{
                                    marginBottom: '3.5rem',
                                    position: 'relative',
                                    paddingLeft: '50px', // Align with content part of milestones
                                    paddingRight: '1rem'
                                }}
                            >
                                <div style={{
                                    backgroundColor: '#fafafa',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid #eee',
                                    color: '#5d4037',
                                    fontFamily: 'var(--font-serif)',
                                    fontSize: '1.05rem',
                                    lineHeight: '1.6',
                                    fontStyle: 'italic',
                                    position: 'relative'
                                }}>
                                    <span style={{ fontSize: '1.5rem', position: 'absolute', top: '5px', left: '10px', opacity: 0.2 }}>"</span>
                                    {item.content}
                                    <span style={{ fontSize: '1.5rem', position: 'absolute', bottom: '0px', right: '15px', opacity: 0.2 }}>"</span>
                                </div>
                            </motion.div>
                        );
                    }

                    // Default to milestone
                    return (
                        <motion.div
                            key={`milestone-${index}`}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{
                                display: 'flex',
                                marginBottom: '3.5rem',
                                position: 'relative'
                            }}
                        >
                            {/* Timeline Dot */}
                            <div style={{
                                flex: '0 0 40px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                marginRight: '1rem',
                                zIndex: 1
                            }}>
                                <div style={{
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    background: '#fff',
                                    border: '3px solid #d4a373',
                                    marginTop: '6px'
                                }}></div>
                            </div>

                            {/* Content */}
                            <div style={{ flex: 1 }}>
                                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'baseline' }}>
                                    <span style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        color: '#5d4037',
                                        fontFamily: 'var(--font-serif)',
                                        marginRight: '0.8rem'
                                    }}>
                                        {item.label}
                                    </span>
                                    <span style={{ fontSize: '0.9rem', color: '#8d6e63' }}>
                                        {item.date}
                                    </span>
                                </div>

                                <div style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr',
                                    gap: '15px',
                                }}>
                                    {item.photos.map((photo, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => setSelectedImage(`${import.meta.env.BASE_URL}${photo}`)}
                                            style={{
                                                borderRadius: '8px',
                                                overflow: 'hidden',
                                                boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                                                // aspectRatio: '1/1', 
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <img
                                                src={`${import.meta.env.BASE_URL}${photo}`}
                                                alt={`${item.label}-${idx}`}
                                                style={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    display: 'block',
                                                    transition: 'transform 0.3s ease'
                                                }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0,0,0,0.9)',
                            zIndex: 1000,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                    >
                        <motion.img
                            src={selectedImage}
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                borderRadius: '8px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}
                        />
                        <button
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                background: 'transparent',
                                border: 'none',
                                color: '#fff',
                                fontSize: '2rem',
                                cursor: 'pointer'
                            }}
                        >
                            ✕
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GrowthGallery;
