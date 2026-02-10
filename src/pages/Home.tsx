import { Link } from 'react-router-dom'
import React from 'react'


export default function Home() {
return (
<main className="container">
<h1>🍋 Little Lemon</h1>
<p>Authentic Mediterranean Cuisine</p>
<Link to="/book" className="btn">Reserve a Table</Link>
</main>
)
}