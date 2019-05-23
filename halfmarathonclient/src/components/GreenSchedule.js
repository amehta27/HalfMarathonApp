import React, { Component } from 'react';
import { Nav,Navbar,Form,FormControl,Col,Button,Table} from 'react-bootstrap'
import { withRouter } from "react-router";
import  Schedule  from './Schedule'
export class GreenSchedule extends Component {




render(){
  return(
  <div>
      <Schedule />
  <h1>Green Group - 9 mins per mile</h1>
  <Table>
  <thead>
    <tr>
      <th>weekly Schedule</th>
      <th>Time</th>
      <th>Miles</th>
      <th>Location</th>
      <th>route</th>
      </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>6:20am</td>
      <td>2 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
      
    </tr>
    <tr>
      <td>2</td>
      <td>6:20am</td>
      <td>3 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>3</td>
      <td>6:10am</td>
      <td>4 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>4</td>
      <td>6:10am</td>
      <td>5 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>5</td>
      <td>6:05am</td>
      <td>6 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>6</td>
      <td>6:00am</td>
      <td>7 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>7</td>
      <td>5:55am</td>
      <td>8 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>8</td>
      <td>5:50am</td>
      <td>9 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>9</td>
      <td>5:45am</td>
      <td>10 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>10</td>
      <td>5:35am</td>
      <td>11 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>11</td>
      <td>5:30am</td>
      <td>12 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
    <tr>
    <td>12</td>
      <td>5:20am</td>
      <td>13 Miles</td>
      <td>Memorial Park/Star Grill Cinema</td>
      <td>from university blvd.</td>
    </tr>
   
  </tbody>
</Table>
</div>
  )
}

}

const GreenScheduleWithRouter = withRouter(GreenSchedule);