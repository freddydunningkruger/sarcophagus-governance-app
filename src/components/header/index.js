import React  from 'react'
import { NavLink } from 'react-router-dom'
import AccountDisplay from './AccountDisplay'
import logo from '../../assets/images/logo.png'
import wallet from '../../assets/images/wallet.svg'

const Header = () => {
  return (
    <div className="flex items-center my-8" style={{height: '4rem'}}>
      <div className="w-24 p-1 mr-4 my-4">
        <NavLink to="/"><img src={logo} alt="logo" /></NavLink>
      </div>

      <div className="flex items-center justify-center absolute right-4" style={{top: '1.05rem'}}>
        <div>
          <img src={wallet} alt="wallet" className="" />
        </div>
        <div className="ml-3 text-sm text-gray-300 ">
          <AccountDisplay />
        </div>
      </div>
  </div>
  )
}

export default Header