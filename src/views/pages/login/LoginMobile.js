import React, { useEffect } from 'react';
import { cilLockLocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
    CButton,
    CCard,
    CCardBody,
    CCol,
    CForm,
    CFormInput,
    CImage,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import logo from 'src/assets/images/logo.png';
import bottomImage from 'src/assets/images/Floor.png';

const LoginMobile = () => {
    // useEffect(() => {
    //     if (window.innerWidth <= 767) console.log("Mobile");
    //     else if (window.innerWidth >= 360 && window.innerWidth <= 810) console.log("Tablet");
    //     else if (window.innerWidth >= 1024) console.log("Desktop");

    //     // eslint-disable-next-line
    // }, [window.innerWidth]);

    return (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: "#e9f3ff" }}>
            <CRow className="justify-content-center w-100 ">
                <CCol xs={12} md={6} lg={3}>
                    <CCard className="px-2 py-4">
                        <CCardBody>
                            <CForm>
                                <div className="d-flex flex-row justify-content-center align-items-center">
                                    <div className="d-flex m-2">
                                        <CImage src={logo} width={50} height={50} />
                                    </div>
                                    <div className="d-flex flex-column m-0">
                                        <h3 className="fw-bold">
                                            BANK <br /> <span className="text-success">SAMPAH</span>
                                        </h3>
                                    </div>
                                </div>
                                <div className="text-center mb-4 mt-3">
                                    <p>
                                        Investasi <span className="text-success">Hijau</span> Untuk Masa Depan
                                        Bersama
                                    </p>
                                </div>
                                <CInputGroup className="mb-3">
                                    <CInputGroupText>
                                        <CIcon icon={cilUser} />
                                    </CInputGroupText>
                                    <CFormInput placeholder="Masukkan username / email anda." autoComplete="username" />
                                </CInputGroup>
                                <CInputGroup className="mb-4">
                                    <CInputGroupText>
                                        <CIcon icon={cilLockLocked} />
                                    </CInputGroupText>
                                    <CFormInput
                                        type="password"
                                        placeholder="Masukkan password anda."
                                        autoComplete="current-password"
                                    />
                                </CInputGroup>
                                <div className="d-flex mb-2">
                                    <p className="text-medium-emphasis">
                                        Belum Punya Akun? <span className="text-success fw-bold">Daftar Sekarang</span>
                                    </p>
                                </div>
                                <div className="d-grid gap-2">
                                    <CButton color="success" style={{ backgroundColor: "#e9f3ff", color: '#2eb85c' }}>Masuk</CButton>
                                    <p className="text-success text-end">Lupa Password?</p>
                                </div>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>

            <CRow className="w-100 mt-3 d-md-none">
                <CCol xs={12} className="text-center">
                    <CImage src={bottomImage} className='img-fluid' />
                </CCol>
            </CRow>
        </div>
    );
}

export default LoginMobile;
