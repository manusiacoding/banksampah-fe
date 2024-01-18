import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CImage,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilLockLocked, cilUser } from '@coreui/icons';
import logoUnip from 'src/assets/images/logo-unip.png';
import logoRev from 'src/assets/images/logo-rev.png';
import banner from 'src/assets/images/Floor.png';
import 'src/scss/style.scss';

const LoginDesktop = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='container-fluid'>
            <CRow className='min-vh-100'>
                <CCol sm={12} lg={8} style={{ backgroundColor: "#E9F3FF" }}>
                    <CRow lg={12} className='mx-3 mt-3 banner-login-logo'>
                        <CImage src={logoRev} className='banner-login-logo-img' />
                    </CRow>
                    <div className='banner-login-title-parent'>
                        <CRow>
                            <h1 className='banner-login-title' style={{ fontSize: "45px" }}>
                                Investasi <span style={{ color: '#92E3A9' }}>Hijau</span>
                            </h1>
                        </CRow>
                        <CRow className='custom-row-banner'>
                            <h1 className='banner-login-title' style={{ fontSize: "45px" }}>
                                Untuk <span style={{ color: '#92E3A9' }}>Masa Depan</span> Bersama
                            </h1>
                        </CRow>
                    </div>
                    <div className='banner-login-floor text-center mt-3'>
                        <CImage src={banner} style={{ width: '82%' }} />
                    </div>
                </CCol>
                <CCol className='login-section'>
                    <div className='w-100 text-center'>
                        <CImage src={logoUnip} className='banner-login-logo-img' />
                        <h5 className='mt-2 mb-5 title-login'>
                            Selamat Datang di Bank Sampah
                        </h5>
                    </div>
                    <div className='w-100 mt-3 px-5'>
                        <CForm className='w-100'>
                            <CInputGroup className="mb-3">
                                <CInputGroupText>
                                    <CIcon icon={cilUser} />
                                </CInputGroupText>
                                <CFormInput placeholder="Username" autoComplete="username" />
                            </CInputGroup>
                            <CInputGroup className="mb-4">
                                <CInputGroupText>
                                    <CIcon icon={cilLockLocked} />
                                </CInputGroupText>
                                <CFormInput
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                />
                            </CInputGroup>
                            <CRow className='mb-3'>
                                <CCol>
                                    <CButton color="primary" size='md' className="w-100 button-login">
                                        Login
                                    </CButton>
                                </CCol>
                            </CRow>
                            <CRow>
                                <CCol className='ml-1 d-flex justify-content-start' md={8}>
                                    <p style={{ fontFamily: 'Poppins' }}>Belum punya akun? <span className='register-paragraph'>Daftar Sekarang!</span></p>
                                </CCol>
                                <CCol className='mr-1 d-flex justify-content-end'>
                                    <p className='register-paragraph' style={{ fontFamily: 'Poppins' }}>Lupa password?</p>
                                </CCol>
                            </CRow>
                        </CForm>
                    </div>
                </CCol>
            </CRow>
        </div>
    )
}

export default LoginDesktop;
