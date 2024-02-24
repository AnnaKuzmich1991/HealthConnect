import React from 'react';

function Contacts(props) {
    const styles = {
        contactContainer: {
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            maxWidth: '600px',
            margin: 'auto',
            marginTop: '20px',
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
        },
        heading: {
            color: '#0056b3',
        },
        paragraph: {
            lineHeight: '1.6',
        },
        link: {
            color: '#0056b3',
            textDecoration: 'none',
        },
    };

    return (
        <div className="contact-container" style={styles.contactContainer}>
            <h2 style={styles.heading}>Contact Us</h2>
            <p style={styles.paragraph}>Address: 123 Main Street, Minsk, Belarus</p>
            <p style={styles.paragraph}>Email: <a href="mailto:info@example.com" style={styles.link}>info@example.com</a></p>
            <p style={styles.paragraph}>Phone: <a href="tel:+375291234567" style={styles.link}>+375 (29) 123-45-67</a></p>
        </div>
    );
}

export default Contacts;
