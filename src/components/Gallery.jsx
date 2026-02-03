import React, { useRef } from 'react';

const Gallery = () => {
    const scrollRef = useRef(null);
    const images = [
        '/idam-first-birthday-invitation/images/idam.jpg',
        '/idam-first-birthday-invitation/images/idam_preview.jpeg',
        '/idam-first-birthday-invitation/images/idam.jpg',
        '/idam-first-birthday-invitation/images/idam_preview.jpeg',
        '/idam-first-birthday-invitation/images/idam.jpg',
        '/idam-first-birthday-invitation/images/idam_preview.jpeg',
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.8; // Scroll by one item width approximation
            if (direction === 'left') {
                current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };

    return (
        <section style={{ padding: '2rem 0', backgroundColor: '#fff', position: 'relative' }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '1.2rem',
                marginBottom: '1.5rem',
                color: '#5d4037'
            }}>
                아기 사진
            </h2>

            <div style={{ position: 'relative' }}>
                {/* Navigation Buttons */}
                <button
                    onClick={() => scroll('left')}
                    style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        background: 'rgba(255,255,255,0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                    }}
                    aria-label="Previous photo"
                >
                    ‹
                </button>
                <button
                    onClick={() => scroll('right')}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        background: 'rgba(255,255,255,0.7)',
                        border: 'none',
                        borderRadius: '50%',
                        width: '32px',
                        height: '32px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                    }}
                    aria-label="Next photo"
                >
                    ›
                </button>

                <div
                    ref={scrollRef}
                    style={{
                        display: 'flex',
                        overflowX: 'auto',
                        gap: '1rem',
                        padding: '0 1.5rem',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none', /* Firefox */
                        msOverflowStyle: 'none',  /* IE 10+ */
                    }}
                    className="gallery-scroll"
                >
                    {/* Inline style for hiding scrollbar in WebKit */}
                    <style>
                        {`
                            .gallery-scroll::-webkit-scrollbar { 
                                display: none; 
                            }
                        `}
                    </style>
                    {images.map((src, index) => (
                        <div
                            key={index}
                            style={{
                                minWidth: '80%',
                                scrollSnapAlign: 'center',
                                position: 'relative',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                aspectRatio: '1/1',
                            }}
                        >
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block'
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div style={{
                textAlign: 'center',
                marginTop: '0.8rem',
                color: '#aaa',
                fontSize: '0.8rem'
            }}>
                옆으로 넘겨보세요
            </div>
        </section>
    );
};

export default Gallery;
