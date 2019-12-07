import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

class Search extends Component {
  state = {

  }
  
  render(){
    return (
      <div>
        <div className='search-border-outer-box'>
          <div className='search-border-inner-box'>
            <div className='searchbox'>
              <h1 align='center' className='search-text'><b>Search</b></h1>
              <br />
              <br />
              <Form action='#' method='post' >
                <div className='search-gender'><h3>
                  <input className='search-genders-male' type='checkbox' name='Gender' value='Male' />Male
                  <input className='search-genders-female'type='checkbox' name='Gender' value='Male' />Female
                  </h3>
                </div>
                <br />
                <div className='search-city'>
                  <h3>City: <input type='text'></input></h3>
                </div>
                <br />
                <div className='search-state'>
                  <h3>State:
                    <select className='search-state-list'>
                      <option value='AL'>AL</option>
                      <option value='AK'>AK</option>
                      <option value='AZ'>AZ</option>
                      <option value='AR'>AR</option>
                      <option value='CA'>CA</option>
                      <option value='CO'>CO</option>
                      <option value='CN'>CN</option>
                      <option value='DE'>DE</option>
                      <option value='FL'>FL</option>
                      <option value='GA'>GA</option>
                      <option value='HI'>HI</option>
                      <option value='ID'>ID</option>
                      <option value='IL'>IL</option>
                      <option value='IN'>IN</option>
                      <option value='IA'>IA</option>
                      <option value='KS'>KS</option>
                      <option value='KY'>KY</option>
                      <option value='LA'>LA</option>
                      <option value='MA'>MA</option>
                      <option value='MD'>MD</option>
                      <option value='MA'>MA</option>
                      <option value='MI'>MI</option>
                      <option value='MN'>MN</option>
                      <option value='MS'>MS</option>
                      <option value='MO'>MO</option>
                      <option value='MT'>MT</option>
                      <option value='NE'>NE</option>
                      <option value='NV'>NV</option>
                      <option value='NH'>NH</option>
                      <option value='NJ'>NJ</option>
                      <option value='NM'>NM</option>
                      <option value='NY'>NY</option>
                      <option value='NC'>NC</option>
                      <option value='ND'>ND</option>
                      <option value='OH'>OH</option>
                      <option value='OK'>OK</option>
                      <option value='OR'>OR</option>
                      <option value='PA'>PA</option>
                      <option value='RI'>RI</option>
                      <option value='SC'>SC</option>
                      <option value='SD'>SD</option>
                      <option value='TN'>TN</option>
                      <option value='TX'>TX</option>
                      <option value='UT'>UT</option>
                      <option value='VT'>VT</option>
                      <option value='VA'>VA</option>
                      <option value='WA'>WA</option>
                      <option value='WV'>WV</option>
                      <option value='WI'>WI</option>
                      <option value='WY'>WY</option>
                    </select>
                  </h3>
                </div>
                <br />
                <div className='search-zip'>
                  <h3>Zip Code: <input type='text'></input></h3>
                </div>
                <br />
                <div className='search-children'><h3>Children:
                <input className='search-children-yes' type='checkbox' name='Children' value='Yes' />Yes
                  <input className='search-children-no' type='checkbox' name='Children' value='No' />No
                  </h3>
                </div>
                <br />
                <div className='search-smoker'><h3>Smoker:
                <input className='search-smoker-yes' type='checkbox' name='Smoker' value='Yes' />Yes
                  <input className='search-smoker-no' type='checkbox' name='Smoker' value='No' />No
                  </h3>
                </div>
                <div>
                <br />
                <h3>
                  <button className='search-cancel' >Cancel</button>
                  <button className='search-submit' type='submit'>Submit</button>
                </h3>
                </div>
                <br />  
              
            </Form>
              


            </div>

        </div>

        
        </div>
      </div>

    )
  }
}

export default  Search