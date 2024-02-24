import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import LeftMenuAdmin from "./LeftMenuAdmin";
import axios from "axios";
import Table from "react-bootstrap/Table";

function ListDoctors(props) {
    const [doctors, setDoctors] = useState([]);
    const [show, setShow] = useState(false);
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [lastName, setLastName] = useState("");
    const [specialization, setSpecialization] = useState("");
    const [typeAppointment, setTypeAppointment] = useState("");
    const [listTypeAppointment, setListTypeAppointment] = useState([]);
    const [active, setActive] = useState(false);
    const [doctorId, setDoctorId] = useState(0)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/doctors';
        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setDoctors(data);
            console.log(data);
        }).catch(err => {
            console.error(err)
        });
    }, [setDoctors]);

    useEffect(() => {
        const apiUrl = 'http://localhost:8082/api/v1/public/category/typeAppointmentsNames';

        axios.get(apiUrl).then((resp) => {
            const data = resp.data;
            setListTypeAppointment(data);
        }).catch(err => {
            console.error(err)
        });
    }, [setListTypeAppointment]);

    function handleChangeDoctor() {
        const addDoctorUrl = "http://localhost:8082/api/v1/admin/changeDoctor/" + doctorId;
        console.log(typeAppointment)
        axios.post(addDoctorUrl, {
            login: login,
            password: password,
            firstName: firstName,
            secondName: secondName,
            lastName: lastName,
            specialization: specialization,
            active: active,
            typeAppointment: typeAppointment
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        }).then(resp => {
            alert("Successfully")
            handleClose()
        })
            .catch(err => alert("Check your role"))
    }

    return (
        <>
            <Row>
                <Col sm={2}>
                    <LeftMenuAdmin />
                </Col>
                <Col sm={1}></Col>
                <Col sm={7}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th>Last Name</th>
                            <th>Specialization</th>
                            <th>Activity</th> {/* Активность translated to Activity */}
                            <th>Change Activity</th> {/* Изменить активность translated to Change Activity */}
                            <th>Change Data</th> {/* Изменить данные translated to Change Data */}
                        </tr>
                        </thead>
                        <tbody>
                        {doctors.map((d) => (
                            <tr key={d.id}>
                                <td>{d.firstName}</td>
                                <td>{d.secondName}</td>
                                <td>{d.lastName}</td>
                                <td>{d.specialization}</td>
                                <td>{d.active.toString()}</td>
                                <td><Button variant="primary">Change Activity</Button></td> {/* Изменить активность */}
                                <td><Button variant="primary" onClick={(e => {
                                    setDoctorId(d.id)
                                    setActive(d.active)
                                    handleShow()
                                })}>Change Data</Button></td> {/* Изменить данные */}
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
                <Col sm={1}></Col>
            </Row>
            <Modal show={show} onHide={handleClose}>
                <Form className='my-lg-3'>
                    {/* Form fields remain unchanged */}
                    <Button variant="primary" className="me-3 my-lg-3" onClick={(e => {
                        handleChangeDoctor()
                    })}>Change</Button> {/* Button text remains the same */}
                </Form>
            </Modal>
        </>
    );
}

export default ListDoctors;
