import {
   MDBBtn,
   MDBContainer,
   MDBRow,
   MDBCol,
   MDBCard,
   MDBCardBody,
   MDBInput,
}
   from 'mdb-react-ui-kit';

export function WorkerRegister() {
   return (
      <MDBContainer fluid>

         <MDBRow className='justify-content-center align-items-center m-5'>

            <MDBCard>
               <MDBCardBody className='px-4'>

                  <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>

                  <MDBRow>

                     <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='FULL NAME' size='lg' id='form1' type='text'/>
                     </MDBCol>

                  </MDBRow>

                  <MDBRow>

                     <MDBCol md='6'>
                        <MDBInput wrapperClass='mb-4' label='CC' size='lg' id='form3' type='number'/>
                     </MDBCol>

                     <MDBCol md='6' >
                        <MDBInput wrapperClass='mb-4' label='CELLPHONE' size='lg' id='form3' type='number'/>
                     </MDBCol>

                  </MDBRow>

                  <MDBRow>

                     <MDBCol md='6'>
                        <MDBCardBody className="photo"/>
                     </MDBCol>

                  </MDBRow>


                  <MDBBtn className='mb-4' size='lg'>Submit</MDBBtn>

               </MDBCardBody>
            </MDBCard>

         </MDBRow>
      </MDBContainer>
   );
}
