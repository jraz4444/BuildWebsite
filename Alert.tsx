import React, { ReactNode } from 'react'

interface Props{
  children:ReactNode;

}
const Alert = ({children}:Props) => {
  return (
    <div className="alert alter-primary" > {children}</div>
  )
}
export default Alert
