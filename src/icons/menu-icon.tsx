import React from 'react'

type Props = {}

const Menuicon = (props: Props) => {
  return (
    <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21 18.5H3V16.5H21V18.5ZM21 13.5H3V11.5H21V13.5ZM21 8.5H3V6.5H21V8.5Z"
      fill="#B2B2B2"
    />
  </svg>
  )
}

export default Menuicon