import React from 'react'
import { useStore, useList } from 'effector-react'

import { $damage_player } from '@models/player'
import { $skills_player, $re_render_abilitys } from '@models/abilitys'
import { punch_your_opponent } from '@models/opponent'
import punched_animate from '@models/engine/punched_animate'
import './arena-touch-zone.scss'

export default function ArenaTouchZone() {
  useStore($re_render_abilitys)

  const damage_player = useStore($damage_player)
  const skills = useStore($skills_player)

  const abilitysMemoRender = useList($skills_player, {
    keys: [...skills.map((item) => item.buyed)],
    fn: (ability, i) => (
      <div
        className='skills-zone__ability'
        onClick={() => {
          ability.buyed && punch_your_opponent(ability.damage)
          ability.buyed && punched_animate()
        }}
      >
        {ability.buyed && <img src={ability.img} alt='' />}
        <label>{i + 1}</label>
      </div>
    )
  })

  return (
    <div className='touch-zone'>
      <button
        className='touch-zone__attack-button'
        onClick={() => {
          punch_your_opponent(damage_player)
          punched_animate()
        }}
      >
        - Ударить врага -
      </button>
      <div className='skills-zone'>{abilitysMemoRender}</div>
    </div>
  )
}
