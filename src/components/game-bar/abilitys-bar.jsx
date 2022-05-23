import React from 'react'
import { useStore } from 'effector-react'

import { $skills_player } from '@models/abilitys'
import { buy_ability } from '@models/abilitys/init'
import { $player_combine_data } from '@models/player'

export default function AbilitysBar() {
  const skills = useStore($skills_player)
  const player_data = useStore($player_combine_data)

  const abilitysRender = skills.map((ability, i) => {
    const damage_text = `${ability.primary_damage}(+ ${ability.damage - ability.primary_damage})`

    const on_click_skill = () => {
      if (player_data.lvl >= ability.need_lvl) {
        buy_ability(skills, {
          name: ability.name,
          cost: ability.cost,
          money: player_data.money,
          lvl: player_data.lvl
        })
      }
    }

    return (
      <div className='body-card' key={i} onClick={on_click_skill}>
        <p className='body-card__title'>- {ability.name} -</p>
        <p className='body-card__info'>Lvl: {ability.lvl}</p>
        <p className='body-card__info'>Damage: {damage_text}</p>
        <p className='body-card__info'>Cost: {ability.cost}</p>
        <img src={ability.img} alt='' />
        {player_data.lvl < ability.need_lvl && (
          <div className='body-card__need-lvl'>Ваш уровень мал, вам нужен {ability.need_lvl}</div>
        )}
      </div>
    )
  })

  return <div className='game-bar__body'>{abilitysRender}</div>
}
