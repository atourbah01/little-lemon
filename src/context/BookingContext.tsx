import { createContext, useContext, useState } from 'react'
import React from 'react'


const BookingContext = createContext<any>(null)


export const BookingProvider = ({ children }: any) => {
const [availableTimes, setAvailableTimes] = useState<string[]>([])


return (
<BookingContext.Provider value={{ availableTimes, setAvailableTimes }}>
{children}
</BookingContext.Provider>
)
}


export const useBooking = () => useContext(BookingContext)