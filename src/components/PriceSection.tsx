'use client'

import { useState } from 'react'
import { Radio, RadioGroup } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface DurationOption {
  value: 'oneHour' | 'oneHourThirty' | 'twoHours'; // Options pour la durée
  label: string;
  priceSuffix: string;
}

interface Tier {
  name: string;
  id: string;
  href: string;
  price: { oneHour: string; oneHourThirty: string; twoHours: string };
  description: string;
  features: string[];
  mostPopular: boolean;
}

const durations: DurationOption[] = [
  { value: 'oneHour', label: '1 heure', priceSuffix: '/1h' },
  { value: 'oneHourThirty', label: '1h30', priceSuffix: '/1h30' },
  { value: 'twoHours', label: '2 heures', priceSuffix: '/2h' },
]

const tiers: Tier[] = [
  {
    name: 'Shiatsu',
    id: 'tier-shiatsu',
    href: 'https://widget.treatwell.be/fr/salon/la-voie-du-bien-etre/',
    price: { oneHour: '€75', oneHourThirty: '€105', twoHours: '€135' },
    description: 'Une séance Shiatsu pour rétablir l’équilibre du corps.',
    features: ['Massage énergétique', 'Points de pression', 'Technique japonaise', 'Rééquilibrage'],
    mostPopular: false,
  },
  {
    name: 'Massages',
    id: 'tier-massages',
    href: 'https://widget.treatwell.be/fr/salon/la-voie-du-bien-etre/',
    price: { oneHour: '€70', oneHourThirty: '€100', twoHours: '€130' },
    description: 'Une gamme de massages qui répond à tous vos besoins.',
    features: ['Massage en profondeur', 'Huiles essentielles', 'Ambiance relaxante', 'Profonde détente'],
    mostPopular: true,
  },
  {
    name: 'Reiki',
    id: 'tier-reiki',
    href: 'https://widget.treatwell.be/fr/salon/la-voie-du-bien-etre/',
    price: { oneHour: '€65', oneHourThirty: '€95', twoHours: '€120' },
    description: 'Un soin Reiki pour apaiser & harmoniser votre esprit et votre corps.',
    features: ['Énergie apaisante', 'Harmonisation du corps', 'Thérapie naturelle', 'Calme intérieur'],
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function PriceSection() {
  const [duration, setDuration] = useState<DurationOption>(durations[0])

  return (
    <div className="bg-black pt-10 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold leading-7 text-cyan-500">Tarifs des soins</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choisissez la durée de votre séance
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-300">
          Sélectionnez la durée de votre massage et profitez d’un moment de relaxation personnalisé.
        </p>
        <div className="mt-8 flex justify-center">
          <fieldset aria-label="Durée du soin">
            <RadioGroup
              value={duration}
              onChange={setDuration}
              className="grid grid-cols-3 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5 text-white"
            >
              {durations.map((option) => (
                <Radio
                  key={option.value}
                  value={option}
                  className="cursor-pointer rounded-full px-2.5 py-1 data-[checked]:bg-cyan-700"
                >
                  {option.label}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-6 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular ? 'bg-white/5 ring-2 ring-cyan-700' : 'ring-1 ring-silver-400',
                'flex flex-col rounded-3xl p-8 xl:p-10', // Ajout de flex et flex-col
              )}
            >
              <div className="flex items-center justify-between gap-x-4 min-h-[56px]"> {/* Fixer la hauteur */}
                <h3 id={tier.id} className="text-lg font-semibold leading-8 text-white">
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-cyan-700 text-center px-2.5 py-1 text-xs font-semibold leading-5 text-white m-0 ">
                    Le plus populaire
                  </p>
                ) : null}
              </div>

              <p className="mt-4 text-sm leading-6 text-gray-300">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-white">{tier.price[duration.value]}</span>
                <span className="text-sm font-semibold leading-6 text-gray-300">{duration.priceSuffix}</span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-cyan-700 text-white shadow-sm hover:bg-cyan-500 focus-visible:outline-cyan-600'
                    : 'bg-cyan-800 text-white hover:bg-cyan-600 focus-visible:outline-white',
                  'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
                )}
              >
                Réserver
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300 xl:mt-10">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
