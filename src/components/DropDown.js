import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'

const DropDown = ({ sizes }) => {

  const [selectSize, setSelectSize] = useState('사이즈 선택')

  return (
    <Dropdown>
      <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
        {selectSize}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {sizes.map((e, i) => {
          return (
            <Dropdown.Item key={i} onClick={() => {
              setSelectSize(e)
            }}>{e}</Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropDown