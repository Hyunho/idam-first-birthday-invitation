import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Use data from configuration file
import { growthGalleryData } from '../data/growthGalleryData';

const PhotoCarousel = ({ photos }) => {
    const scrollContainerRef = React.useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);

    const checkScroll = () => {
        if (!scrollContainerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        // Allow a small buffer (e.g., 1px) for float calculation discrepancies
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    };

    React.useEffect(() => {
        checkScroll();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
        }
        return () => {
            if (container) container.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, [photos]);

    const scroll = (direction) => {
        if (!scrollContainerRef.current) return;
        const container = scrollContainerRef.current;
        // Scroll by about 80% of width to show next set clearly
        const scrollAmount = container.clientWidth * 0.8;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div style={{ position: 'relative' }}>
            {/* Left Arrow */}
            <AnimatePresence>
                {showLeftArrow && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => scroll('left')}
                        style={{
                            position: 'absolute',
                            left: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'rgba(255, 255, 255, 0.3)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            color: '#5d4037'
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Right Arrow */}
            <AnimatePresence>
                {showRightArrow && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => scroll('right')}
                        style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            zIndex: 10,
                            background: 'rgba(255, 255, 255, 0.3)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '32px',
                            height: '32px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                            color: '#5d4037'
                        }}
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </motion.button>
                )}
            </AnimatePresence>

            <div
                ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    gap: '10px',
                    overflowX: 'auto',
                    scrollSnapType: 'x mandatory',
                    paddingBottom: '10px',
                    // Hide scrollbar for Chrome, Safari and Opera
                    '::-webkit-scrollbar': {
                        display: 'none'
                    },
                    // Hide scrollbar for IE, Edge and Firefox
                    msOverflowStyle: 'none',  /* IE and Edge */
                    scrollbarWidth: 'none',  /* Firefox */
                }}
            >
                {photos.map((photo, idx) => (
                    <div
                        key={idx}
                        style={{
                            borderRadius: '8px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                            flex: '0 0 85%', // Show mostly the first one, hint at second
                            scrollSnapAlign: 'start'
                        }}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}${photo}`}
                            alt={`growth-gallery-${idx}`}
                            style={{
                                width: '100%',
                                height: 'auto',
                                display: 'block',
                                transition: 'transform 0.3s ease',
                                aspectRatio: '3 / 4',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const GrowthGallery = () => {

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

                                <PhotoCarousel photos={item.photos} />
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default GrowthGallery;
