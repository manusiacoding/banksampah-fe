import React from 'react'
import { Link } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {
    return (
        <div className='bg-body-tertiary' style={{ overflowX: 'hidden' }}>
            <CRow className='min-vh-100'>
                <CCardGroup>
                    <CCard className="text-white bg-primary py-5 mt-3 mt-md-0 mx-3 mx-md-0 mb-3 mb-md-0">
                        <CCardBody className="text-center d-flex align-items-center justify-content-center">
                            <div>
                                <h2>Sign up</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                                <Link to="/register">
                                    <CButton color="primary" className="mt-3" active tabIndex={-1}>
                                        Register Now!
                                    </CButton>
                                </Link>
                            </div>
                        </CCardBody>
                    </CCard>
                    <CCard className='mx-3 mx-md-0'>
                        <CCardBody className='d-flex align-items-center justify-content-center'>
                            <CForm className='w-100'>
                                <h1>Login</h1>
                                <p className="text-body-secondary">Sign In to your account</p>
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
                                <CRow>
                                    <CCol className='d-flex justify-content-end'>
                                        <CButton color="link" className="mr-5">
                                            Forgot password?
                                        </CButton>
                                        <CButton color="primary" className="px-4">
                                            Login
                                        </CButton>
                                    </CCol>
                                </CRow>
                            </CForm>
                        </CCardBody>
                    </CCard>
                </CCardGroup>
            </CRow>
        </div>
    )
}

export default Login
