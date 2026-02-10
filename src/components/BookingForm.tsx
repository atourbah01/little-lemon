import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { fetchAPI, submitAPI } from '../utils/api'
import { useBooking } from '../context/BookingContext'

export default function BookingForm() {
  const navigate = useNavigate()
  const { availableTimes, setAvailableTimes } = useBooking()

  useEffect(() => {
    setAvailableTimes(fetchAPI(new Date()))
  }, [setAvailableTimes])

  return (
    <Formik
      initialValues={{ date: '', time: '', guests: 1, occasion: '' }}
      validationSchema={Yup.object({
        date: Yup.string().required('Required'),
        time: Yup.string().required('Required'),
        guests: Yup.number().min(1).max(10).required(),
      })}
      onSubmit={(values) => {
        if (submitAPI(values)) navigate('/confirmed')
      }}
    >
      <Form className="form">
        <label htmlFor="date">Date</label>
        <Field type="date" id="date" name="date" />
        <ErrorMessage name="date" component="div" />

        <label htmlFor="time">Time</label>
        <Field
          as="select"
          id="time"
          name="time"
          aria-label="Select reservation time"
        >
          <option value="">Select</option>
          {availableTimes.map((t: string) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Field>

        <label htmlFor="guests">Guests</label>
        <Field type="number" id="guests" name="guests" />

        <label htmlFor="occasion">Occasion</label>
        <Field
          as="select"
          id="occasion"
          name="occasion"
          aria-label="Select occasion"
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </Field>

        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  )
}
