import React from 'react'
import { services } from '../constants'
import ServiceCard from '../components/ServiceCard' 

const Services = () => {
  return (
    <section className="flex flex-wrap justify-center gap-9 max-container">
      {
        services.map((services) => (
          <ServiceCard key={services.label} {...services} />
        ))
      }
    </section>
  )
}

export default Services