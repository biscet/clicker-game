import { sample } from 'effector'

import { $skills_player, buy_skill, $re_render_abilitys, re_render } from '.'
import { remove_money } from '@models/player'

//Действия с абилками игрока
$skills_player.on(buy_skill, (_, skills) => skills)

export function buy_ability(skills, { name, money, cost }) {
  for (let i = 0; i < skills.length; i++) {
    if (skills[i].name === name && skills[i].buyed && skills[i].cost <= money) {
      skills[i].lvl += 1
      skills[i].cost += 20
      skills[i].damage += 20

      break
    }

    if (skills[i].name === name && skills[i].cost <= money) {
      skills[i].buyed = true
      skills[i].lvl = 1
      skills[i].cost += 20

      break
    }
  }

  remove_money(money >= cost && cost)
  buy_skill(skills)
}

$re_render_abilitys.on(re_render, (render) => !render)

sample({
  source: buy_skill,
  target: re_render
})
