import React from 'react'
import { useStore } from 'effector-react'

import { $player_combine_data } from '@models/player'
import './player-bar.scss'

export default function PlayerBar() {
  const player = useStore($player_combine_data)

  return (
    <div className='player-bar'>
      <p className='player-bar__title'>Player Stats</p>
      <div className='stats'>
        <p className='stats__field'>LVL: {player.lvl}</p>
        <p className='stats__field'>
          EXP: {player.exp}/{player.next_lvl_exp}
        </p>
        <p className='stats__field'>MONEY: {player.money}</p>
        <p className='stats__field'>DPS: 0</p>
        <p className='stats__field'>DAMAGE: {player.damage}</p>
      </div>
    </div>
  )
}
