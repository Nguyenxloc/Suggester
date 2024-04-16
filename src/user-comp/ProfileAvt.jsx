import React from 'react';
import { MDBCardTitle, MDBCardText,MDBCardImage} from 'mdb-react-ui-kit';

export default function ProfileAvt({id}) {
    return (

                                <div className="d-flex text-black ms-2">
                                    <div className="flex-shrink-0">
                                        <MDBCardImage
                                            style={{ width: '100px', borderRadius: '50px' }}
                                            src='https://i.pinimg.com/1200x/22/db/10/22db102765159b0555b586b38e4e67be.jpg'
                                            alt='Generic placeholder image'
                                            fluid />
                                    </div>
                                    <div className="flex-grow-1 ms-3 mt-2">
                                        <MDBCardTitle style={{fontSize:16,color:"gray"}}>No ID</MDBCardTitle>
                                        <MDBCardText style={{fontSize:12,color:"gray"}}>{id}</MDBCardText>
                                        <MDBCardText style={{fontSize:12,color:"gray"}}>This user has not added a bio yet</MDBCardText>
                                    </div>
                                </div>

    );
}