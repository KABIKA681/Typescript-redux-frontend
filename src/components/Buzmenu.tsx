import React from 'react'
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';

// import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux'

// import {removeCountryFromCart} from '../../redux/actions'



type CartMenuProps = {
  buz: {}[]
  onClick: Function
  menuOpen: boolean
  anchorEl: null | HTMLElement

}

const BuzMenu = ({ buz, onClick, menuOpen, anchorEl }: CartMenuProps) => {


  const dispatch = useDispatch()

  const handleClose = () => {
    onClick()
  };


  return (
    <div className="cart-menu">
      <Menu
        className="mw-500 w-full  bg-gray-200 "
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={menuOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <h2 >Cart items</h2>

        {/* items */}
        <div className="cart-menu__menu-items">

          {/* each item/country
          {buz.length === 0 &&
            <div className="m-1">
              <h2>10</h2>
            </div>
          } */}

          {buz && buz.map((country: any) => (
            <div className="cart-menu__menu-item">
              <img src={country.flag} alt={country.name} />
              <h2>{country.name}</h2>
            </div>

          ))}



        </div>

      </Menu>
    </div>
  )
}

export default BuzMenu