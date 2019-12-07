
// import React, { Component } from 'react'
// import PCAPI from '../api/PCAPI.js'

// class DaterPage extends Component {
//   state = {
//     dater: {}
//   }

//   componentDidMount() {
//     const id = this.props.match.params.daterID
//     PCAPI.fetchDaterByID(id)
//       .then((dater) => this.setState({
//         dater: dater
//     }))
//   }

//   render() {
//     const dater = this.state.dater
//     return (
//       <div>
//         <h2> Gender </h2>
//         <p> {dater['gender']}</p>
//         <h2> Interested_in </h2>
//         <p> {dater['interested_in']}</p>
//         <h2> Astrological_sign </h2>
//         <p> {dater['astrological_sign']}</p>
//         <h2> Age </h2>
//         <p> {dater['age']}</p>
//         <h2> Height </h2>
//         <p> {dater['height']}</p>
//         <h2> Dater_name </h2>
//         <p> {dater['dater_name']}</p>
//         <h2> Dater_email_address </h2>
//         <p> {dater['dater_email_address']}</p>
//         <h2> Dater_telephone </h2>
//         <p> {dater['dater_telephone']}</p>
//         <h2> Address_line_1 </h2>
//         <p> {dater['address_line_1']}</p>
//         <h2> Address_line_2 </h2>
//         <p> {dater['address_line_2']}</p>
//         <h2> City </h2>
//         <p> {dater['city']}</p>
//         <h2> State </h2>
//         <p> {dater['state']}</p>
//         <h2> Zip </h2>
//         <p> {dater['zip']}</p>
//         <h2> Ethnicity </h2>
//         <p> {dater['ethnicity']}</p>
//         <h2> Body_type </h2>
//         <p> {dater['body_type']}</p>
//         <h2> Looking_for </h2>
//         <p> {dater['looking_for']}</p>
//         <h2> Has_children </h2>
//         <p> {dater['has_children']}</p>
//         <h2> Has_children_no </h2>
//         <p> {dater['has_children_no']}</p>
//         <h2> Education </h2>
//         <p> {dater['education']}</p>
//         <h2> Religion </h2>
//         <p> {dater['religion']}</p>
//         <h2> Smokes </h2>
//         <p> {dater['smokes']}</p>
//         <h2> Smokes_vape </h2>
//         <p> {dater['smokes_vape']}</p>
//         <h2> Dater_story </h2>
//         <p> {dater['dater_story']}</p>
//         <h2> Dater_photo </h2>
//         <p> {dater['dater_photo']}</p>
//         <h2> Pet_photo </h2>
//         <p> {dater['pet_photo']}</p>
//         <h2> Pet_name </h2>
//         <p> {dater['pet_name']}</p>
//         <h2> Pet_breed </h2>
//         <p> {dater['pet_breed']}</p>
//         <h2> Pet_color </h2>
//         <p> {dater['pet_color']}</p>
//         <h2> Pet_age </h2>
//         <p> {dater['pet_age']}</p>
//         <h2> Pet_story </h2>
//         <p> {dater['pet_story']}</p>
//       </div>
//     )
//   }
// }

// export default DaterPage