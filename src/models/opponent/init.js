import { sample } from 'effector'

import {
  $hp_opponent,
  $exp_opponent,
  $current_opponent,
  $opponent_combine_data,
  punch_your_opponent,
  calculating_exp_opponent,
  restore_hp_opponent,
  loading_hp_opponent,
  change_current_opponent
} from '.'
import { general_route } from '../routes'
import { add_exp, add_money } from '../player/index'

$hp_opponent
  .on(punch_your_opponent, (hp, damage) => hp - damage)
  .on(restore_hp_opponent, (_, current) => 100 * (current + 2))
  .on(loading_hp_opponent, (_, current) => 100 * (current + 1))

$exp_opponent.on(calculating_exp_opponent, (_, current) => 5 * (current + 1))

$current_opponent.on(change_current_opponent, (current) => current + 1)

//Подгружает данные о противнике
sample({
  clock: general_route.open,
  source: $current_opponent,
  target: loading_hp_opponent
})

//Логика если противник убит
sample({
  clock: $hp_opponent,
  source: $opponent_combine_data,
  filter: (data) => data.hp <= 0,
  fn: (data) => data.current,
  target: restore_hp_opponent
})

sample({
  clock: restore_hp_opponent,
  source: { current: $current_opponent, add_exp: $exp_opponent },
  target: [
    change_current_opponent,
    calculating_exp_opponent.prepend(({ current }) => current),
    add_money.prepend(() => Math.floor(Math.random() * 101))
  ]
})

sample({
  clock: $exp_opponent,
  target: add_exp
})
