import React from 'react'
import ActionStrip from '../action-strip'
import UsersContainer from '../users-container'

export default function CreateTeamContainer() {
  return (
    <div className="relative">
      <ActionStrip />
      <UsersContainer />
    </div>
  )
}
