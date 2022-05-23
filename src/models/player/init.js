import { sample } from 'effector'

import {
  $exp_player,
  $money_player,
  $lvl_player,
  $player_combine_data,
  $next_lvl_exp_player,
  $damage_player,
  add_exp,
  change_next_lvl_exp,
  add_money,
  remove_money,
  change_lvl,
  change_damage,
  remove_exp
} from '.'

//Действия с экспой игрока
$exp_player.on(add_exp, (exp, add_exp) => exp + add_exp).on(remove_exp, () => 0)
$next_lvl_exp_player.on(change_next_lvl_exp, (_, current) => 100 * (current + 1) + 50 * (current + 1))

//Действия с деньгами игрока
$money_player
  .on(add_money, (money, add_money) => money + add_money)
  .on(remove_money, (money, remove_money) => money - remove_money)

//Действия с лвлом игрока
$lvl_player.on(change_lvl, (lvl) => lvl + 1)

//Действия с дамагом игрока
$damage_player.on(change_damage, (damage) => damage + 10)

//Логика если персонаж получает новый лвл
sample({
  clock: add_exp,
  source: $player_combine_data,
  filter: (data) => data.exp >= data.next_lvl_exp,
  fn: (data) => data.lvl,
  target: change_next_lvl_exp
})

sample({
  clock: change_next_lvl_exp,
  source: {
    damage: $damage_player,
    current_lvl: $lvl_player
  },
  target: [remove_exp, change_damage.prepend(({ damage }) => damage), change_lvl]
})
