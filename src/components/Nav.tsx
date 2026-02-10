import { Link } from 'react-router-dom'
import React from 'react'


export default function Nav() {
return (
<nav className="nav">
<h2 className="logo">Little Lemon</h2>
<ul className="nav-links">
<li><Link to="/">Home</Link></li>
<li><Link to="/book">Reservations</Link></li>
</ul>
</nav>
)
}