import React from 'react'
import { createContainer } from 'meteor/react-meteor-data'
import { Employees } from '../../imports/collections/employees'
import EmployeeListItem from './EmployeeListItem'

const PER_PAGE = 10

class EmployeeList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      per_page: 20
    }
  }

  componentWillMount() {
    this.page = 1;
  }

   handleClick() {
     Meteor.subscribe('employees', PER_PAGE * this.page)
     this.page += 1
  }

  render() {
      return (
      <div>
        <ul className="employeeList">
          {
            this.props.employees.map((employee, i)=> {
              return <EmployeeListItem key={i} employee={employee} />
            })
          }
        </ul>
        <button onClick={this.handleClick.bind(this)}>Load More...</button>
      </div>
    )
  }
}

export default createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE)

  return {
    employees: Employees.find({}).fetch()
  }
}, EmployeeList)
