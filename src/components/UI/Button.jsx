import React from 'react'

const fakeClass = ['text-white', 'bg-blue-600', 'rounded-md']


const Button = ({
  name = 'Button Name',
  onClick = () => { },
  customClass = '',
  variant = 'primary'
}) => {
//function returns classname based on variant
  const buttonVariant = (value) => {
    switch (value) {
      case 'primary':
        return 'bg-gray-800 hover:bg-gray-900 text-white duration-300';
      case 'secondary':
        return 'bg-white hover:bg-gray-100 text-gray-900 border border-gray-800 duration-300'
      case 'link':
        return 'text-gray-900 hover:bg-gray-50 duration-300 font-normal text-base'
      default:
        return 'bg-gray-200 text-black ';
    }
  }

  return (
    <button onClick={onClick}
      className={`${customClass || `px-2.5 py-1 rounded-md text-sm font-semibold ${buttonVariant(variant)}`}`}>
      {name}
    </button>
  )
}

export default Button