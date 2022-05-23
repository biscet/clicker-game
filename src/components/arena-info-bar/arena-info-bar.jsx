import React, { useEffect } from 'react'
import { useStore } from 'effector-react'

import { $opponent_combine_data, $snapshot_hp, snapshot_hp_opponent } from '@models/opponent'
import { hp_gradient_check } from '@models/engine'
import './arena-info-bar.scss'

export default function ArenaInfoBar() {
  const opponent_data = useStore($opponent_combine_data)
  const opponent_hp_snap = useStore($snapshot_hp)

  useEffect(() => {
    snapshot_hp_opponent()
  }, [opponent_data.current])

  const hp_bar = {
    background: `linear-gradient(to left, gray ${hp_gradient_check(
      opponent_hp_snap,
      opponent_data.hp,
      opponent_data.current
    )}%, red 0%)`
  }

  return (
    <header className='arena-info'>
      <h1 className='arena-info__arena'>Ваша текущая арена: {opponent_data.current + 1}</h1>
      <div className='arena-info__hp-bar' style={hp_bar} />
      <p className='arena-info__hp'>
        HP: {opponent_data.hp}/{opponent_hp_snap}
      </p>
    </header>
  )
}
