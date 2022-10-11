import React from 'react'
import { Twitter, Facebook, Instagram, GitHub } from '@mui/icons-material';

export default function Footer () {
  return (
    <footer className="footer">
       <ul className="footer__icons">
        <li><Twitter/></li>
        <li><Facebook/></li>
        <li><Instagram/></li>
        <li><GitHub/></li>
        </ul>
    </footer>
  )
}


