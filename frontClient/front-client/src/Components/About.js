import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AuthContext } from "../Context/AuthContext";
import AppointmentModal from './Modal';

function About(props) {
    const token = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => setShowModal(!showModal);

    const styles = {
        aboutContainer: {
            padding: '20px',
            backgroundColor: '#f5f5f5',
            borderRadius: '8px',
            textAlign: 'left', // Text aligned to the left
            maxWidth: '1000px', // Максимальная ширина контейнера
            margin: 'auto', // Центрирование контейнера
            marginTop: '20px', // Отступ сверху
            marginBottom: '20px', // Отступ снизу
        },
        heading: {
            color: '#0056b3',
        },
        list: {
            listStyleType: 'none',
            paddingLeft: '0',
        },
        listItem: {
            padding: '8px 0',
        },
        paragraph: {
            lineHeight: '1.6',
        },
    };

    return (
        <div className="about-container" style={styles.aboutContainer}>
            <h2 style={styles.heading}>About Us</h2>
            <p style={styles.paragraph}>Welcome to our Medical Center! We are dedicated to providing you with the highest quality medical care and services. Our team of experienced professionals is here to support your health and wellbeing.</p>

            <h3 style={styles.heading}>Our Mission</h3>
            <p style={styles.paragraph}>Our mission is to improve the health and wellness of our community by delivering exceptional healthcare, educating our patients, and fostering a culture of care and compassion.</p>

            <h3 style={styles.heading}>Why Choose Us?</h3>
            <ul style={styles.list}>
                <li style={styles.listItem}>State-of-the-art facilities and equipment</li>
                <li style={styles.listItem}>Comprehensive range of medical services</li>
                <li style={styles.listItem}>Personalized care tailored to your needs</li>
                <li style={styles.listItem}>Highly qualified and caring staff</li>
                <li style={styles.listItem}>Innovative treatments and technologies</li>
            </ul>

            <h3 style={styles.heading}>Contact Us</h3>
            <p style={styles.paragraph}>If you have any questions or would like to schedule an appointment, please feel free to contact us. Our team is ready to assist you with your healthcare needs.</p>

            <Button variant="primary" onClick={toggleModal}>Schedule an Appointment</Button>

            <AppointmentModal show={showModal} onHide={toggleModal} token={token} />
        </div>
    );
}

export default About;
