
import React from 'react'
import { Col, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AdminNavication from './AdminNavication';
import Header from './Header';

export default function AdminLayouts({children}) {
    return (
        <div>
            <Header />
            
            <AdminNavication />

            <Row>
                <Col>
                    {children}
                </Col>
            </Row>
            
        </div>
    )
}
