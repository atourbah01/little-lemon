import { render, screen } from '@testing-library/react'
import BookingForm from '../components/BookingForm'
import React from 'react'


test('renders booking form', () => {
render(<BookingForm />)
expect(screen.getByText(/Date/i)).toBeInTheDocument()
})