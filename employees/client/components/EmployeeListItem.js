import React from 'react'

const EmployeeListItem = ({employee}) => {
  return (
    <li>
      <img src={employee.avatar} />
      <h4>{employee.name}</h4>
      <p>Email: {employee.email}</p>
      <p>Phone: {employee.phone}</p>
    </li>
  )
}

export default EmployeeListItem
