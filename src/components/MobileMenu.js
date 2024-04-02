
import React from 'react'

const MobileMenu = ({ categories, setMobileMenu }) => {


  return (
    <div className='mobile-menu-bg' onClick={() => {
      document.body.style.overflow = "auto";
      setMobileMenu(false)
    }}>
      <div className='mobile-menu'>
        <ul className="categories center">
          {categories.map((e, i) => {
            return (
              <li onClick={() => {
                document.body.style.overflow = "auto";
                setMobileMenu(false)
              }} className="menu" key={i} style={{ cursor: "pointer" }}>
                {e}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu
