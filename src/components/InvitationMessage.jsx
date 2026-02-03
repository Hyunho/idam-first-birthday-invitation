import React from 'react';
import { motion } from 'framer-motion';

const InvitationMessage = () => {
    return (
        <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <p style={{ fontSize: '1.1rem', lineHeight: '2.2', marginBottom: '1rem', whiteSpace: 'pre-line' }}>
                    소중한 우리 아가 이담이가<br />
                    어느덧 첫 번째 생일을 맞이했습니다.<br /><br />
                    사랑스러운 아이의 첫 생일을<br />
                    함께 축하해주시면 감사하겠습니다.
                </p>
            </motion.div>
        </section>
    );
};

export default InvitationMessage;
