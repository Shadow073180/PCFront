
import React, { Component } from 'react'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

class DaterList extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.daters}>
          <TableHeaderColumn isKey dataField='id'> ID </TableHeaderColumn>
          <TableHeaderColumn dataField='gender'> Gender </TableHeaderColumn>
          <TableHeaderColumn dataField='interested_in'> Interested_in </TableHeaderColumn>
          <TableHeaderColumn dataField='astrological_sign'> Astrological_sign </TableHeaderColumn>
          <TableHeaderColumn dataField='age'> Age </TableHeaderColumn>
          <TableHeaderColumn dataField='height'> Height </TableHeaderColumn>
          <TableHeaderColumn dataField='dater_name'> Dater_name </TableHeaderColumn>
          <TableHeaderColumn dataField='dater_email_address'> Dater_email_address </TableHeaderColumn>
          <TableHeaderColumn dataField='dater_telephone'> Dater_telephone </TableHeaderColumn>
          <TableHeaderColumn dataField='address_line_1'> Address_line_1 </TableHeaderColumn>
          <TableHeaderColumn dataField='address_line_2'> Address_line_2 </TableHeaderColumn>
          <TableHeaderColumn dataField='city'> City </TableHeaderColumn>
          <TableHeaderColumn dataField='state'> State </TableHeaderColumn>
          <TableHeaderColumn dataField='zip'> Zip </TableHeaderColumn>
          <TableHeaderColumn dataField='ethnicity'> Ethnicity </TableHeaderColumn>
          <TableHeaderColumn dataField='body_type'> Body_type </TableHeaderColumn>
          <TableHeaderColumn dataField='looking_for'> Looking_for </TableHeaderColumn>
          <TableHeaderColumn dataField='has_children'> Has_children </TableHeaderColumn>
          <TableHeaderColumn dataField='has_children_no'> Has_children_no </TableHeaderColumn>
          <TableHeaderColumn dataField='education'> Education </TableHeaderColumn>
          <TableHeaderColumn dataField='religion'> Religion </TableHeaderColumn>
          <TableHeaderColumn dataField='smokes'> Smokes </TableHeaderColumn>
          <TableHeaderColumn dataField='smokes_vape'> Smokes_vape </TableHeaderColumn>
          <TableHeaderColumn dataField='dater_story'> Dater_story </TableHeaderColumn>
          <TableHeaderColumn dataField='dater_photo'> Dater_photo </TableHeaderColumn>
          <TableHeaderColumn dataField='pet_photo'> Pet_photo </TableHeaderColumn>
          <TableHeaderColumn dataField='pet_name'> Pet_name </TableHeaderColumn>
          <TableHeaderColumn dataField='pet_breed'> Pet_breed </TableHeaderColumn>
          <TableHeaderColumn dataField='pet_color'> Pet_color </TableHeaderColumn>
          <TableHeaderColumn dataField='pet_age'> Pet_age </TableHeaderColumn>
          <TableHeaderColumn dataField='pet_story'> Pet_story </TableHeaderColumn>
        </BootstrapTable>
      </div>
    )
  }
}

export default DaterList
