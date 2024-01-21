import {
   MDBBtn,
   MDBContainer,
   MDBCard,
   MDBCardBody,
   MDBRow,
   MDBCol,
   MDBIcon,
   MDBInput
}
   from 'mdb-react-ui-kit';

export function Login() {
   return (
      <MDBContainer className="my-5 d-flex d-flex justify-content-center align-items-center">

         <MDBCard>
            <MDBRow className='g-0 '>

               <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column '>

                     <div className='d-flex flex-row mt-2'>
                        <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                        <span className="h1 fw-bold mb-0">Edificio Colpatria</span>
                     </div>

                     <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                     <MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
                     <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

                     <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Login</MDBBtn>

                  </MDBCardBody>
               </MDBCol>

            </MDBRow>
         </MDBCard>

      </MDBContainer>
   );
}
