function ability_unit(name, buyed, primary_damage, damage, lvl, primary_cost, cost, img, need_lvl) {
  this.name = name
  this.buyed = buyed
  this.primary_damage = primary_damage
  this.damage = damage
  this.lvl = lvl
  this.primary_cost = primary_cost
  this.cost = cost
  this.img = img
  this.need_lvl = need_lvl
}

export const abilitys = [
  new ability_unit('Fire ball', false, 50, 50, 0, 10, 10, fire_ball, 1),
  new ability_unit('King of money', false, 100, 100, 0, 20, 20, king_of_money, 2),
  new ability_unit('Lightning', false, 150, 150, 0, 30, 30, lightning, 3),
  new ability_unit('Necromancery', false, 200, 200, 0, 40, 40, necromancery, 4),
  new ability_unit('The power of runes', false, 250, 250, 0, 50, 50, power_runes, 5),
  new ability_unit('Mental', false, 300, 300, 0, 60, 60, mental, 6),
  new ability_unit('Za Warudo', false, 350, 350, 0, 70, 70, za_warudo, 7),
  new ability_unit('Ultimate', false, 400, 400, 0, 80, 80, ultimate, 8)
]

import fire_ball from '@images/abilitys/fire-ball.png'
import necromancery from '@images/abilitys/necromancery.png'
import za_warudo from '@images/abilitys/za-warudo.png'
import king_of_money from '@images/abilitys/king-of-money.png'
import lightning from '@images/abilitys/lightning.png'
import power_runes from '@images/abilitys/powers-runes.png'
import ultimate from '@images/abilitys/ultimate.png'
import mental from '@images/abilitys/mental.png'
