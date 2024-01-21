import {
   MDBDropdownMenu,
   MDBDropdownItem,
   MDBContainer,
   MDBCardHeader,
   MDBCardTitle,
   MDBCardText,
   MDBCardImage,
   MDBCol,
   MDBRow

} from 'mdb-react-ui-kit';
export function Header(perfilPhoto:string, perfilName:string) {
   return(
      <>
         <MDBRow>
            <MDBCardHeader>
               <MDBCol>
                  <MDBCardTitle className={`placeholder-glow`}>
                     <MDBCardText>
                        <span className={`placeholder col-6`}>Edificio Colpatria</span>
                     </MDBCardText>
                  </MDBCardTitle>
               </MDBCol>
               <MDBCol>
                  <MDBCardImage
                     src={perfilPhoto}
                     position={`center`}
                     alt={perfilName}
                  />
                  <MDBCardText>
                     <span>{perfilName}</span>
                  </MDBCardText>
               </MDBCol>
               <MDBCol>
                  <MDBDropdownMenu>
                     <MDBDropdownItem link>Historial Visit</MDBDropdownItem>
                     <MDBDropdownItem link>Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
               </MDBCol>



            </MDBCardHeader>
         </MDBRow>
      </>
   )
}
