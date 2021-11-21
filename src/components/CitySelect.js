/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import down from '../images/down.svg'
import { cityList } from '../services/CityData'

export default function CitySelect() {
  const cityData = cityList
  const cityOptions = Object.keys(cityData).map(item => {
    return (
      <option value={item}>{cityData[item].name}</option>
    )
  })
  return (
    <>
      <select className="w-full bg-white border-gray-border rounded border py-3 px-4">
        {cityOptions}
      </select>
    </>
  )
}