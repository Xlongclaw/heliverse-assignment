import AutoComplete from '@/components/AutoComplete'
import {Chip, Tooltip } from '@nextui-org/react'
import React from 'react'

export default function ActionStrip() {
  return (
    <div className='px-[9rem] h-20 flex items-center gap-4 justify-between'>
      <Chip size='lg' color='default'>Select Your Team Members </Chip>
      <div className='flex gap-4'>
        <Tooltip content="Create your team" placement='left'>

      <button className='bg-primary-300 px-4 rounded-xl'> Create</button>
        </Tooltip>
      <AutoComplete placeholder='Select a domain' size='sm' label='Filter by Domain' values={["Finance","Marketing","IT"]}/>
      <AutoComplete placeholder='Select Gender' size='sm' label='Filter by Gender' values={["Male","Female","BiGender","AGender"]}/>
      <AutoComplete placeholder='Select Availability' size='sm' label='Filter by Availability' values={["Available","Not Available"]}/>
      </div>
    </div>
  )
}
