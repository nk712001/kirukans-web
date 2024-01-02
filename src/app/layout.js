"use client"
import './globals.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import { Fragment } from 'react'

export default function RootLayout({ children }) {
  return (
    <Fragment>
      <Header />
      <div>
      {children}
      </div>
      <Footer />
    </Fragment>
  )
}
