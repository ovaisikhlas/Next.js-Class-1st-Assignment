//import Image from "next/image";
//import React from 'react'
import Link from "next/link"

export default function Navbar() {
  return (
    <div>
      <Link href='/'>Home</Link>
      <br/>
      
      <Link href='/about'>About</Link>
      <br/>
      <Link href='/jobs'>Jobs</Link>
      <br/>
      <Link href='/jobs/programing'>Programing</Link>
      <br/>
      <Link href='/contact'>Contact</Link>
      <br/>
      <Link href='/services'>Services</Link>

      
    </div>
 
       
    
  );
}
