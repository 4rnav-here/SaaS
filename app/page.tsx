import React from 'react'
import CompanionCard from '@/components/ui/CompanionCard';
import CompanionsList from '@/components/ui/CompanionsList';
import CTA from '@/components/ui/CTA';
import { recentSessions } from '@/constants';

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companions</h1>
      
      <section className='home-section'>
      <CompanionCard 
        id="123"
        name="Dumbledore The Maths Guy"
        topic="Calculus"
        subject="Mathematics"
        duration={45}
        color="#ffff66"

        />
      <CompanionCard 
        id="456"
        name="Snape The Crazy Science Nerd"
        topic="Potions and Antibiotics"
        subject="Science"
        duration={30}
        color="#00cc00"
      />
      <CompanionCard
        id="123"
        name="Potter The History Teller"
        topic="History"
        subject="Social Science"
        duration={30}
        color="#3399ff"
      />
      </section>

      <section className='home-section'>

        <CompanionsList
          title="Recent Sessions"
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
          />

        <CTA />
      </section>

    </main>

  )
}

export default Page