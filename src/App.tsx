import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BookingPage from './pages/BookingPage'
import ConfirmedBooking from './components/ConfirmedBooking'
import { BookingProvider } from './context/BookingContext'
import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'


export default function App() {
return (
<BrowserRouter>
<BookingProvider>
<Header />
<Routes>
<Route path="/" element={<Home />} />
<Route path="/book" element={<BookingPage />} />
<Route path="/confirmed" element={<ConfirmedBooking />} />
</Routes>
<Footer />
</BookingProvider>
</BrowserRouter>
)
}