import { createStore, createEvent, combine } from 'effector'

import { $skills_player } from '../abilitys'

//Данные игрока
export const $lvl_player = createStore(1)
export const $money_player = createStore(0)
export const $exp_player = createStore(0)
export const $damage_player = createStore(10)
export const $next_lvl_exp_player = createStore(100)

export const $player_combine_data = combine({
  lvl: $lvl_player,
  exp: $exp_player,
  next_lvl_exp: $next_lvl_exp_player,
  money: $money_player,
  skills: $skills_player,
  damage: $damage_player
})

//Действия с игроком
export const add_exp = createEvent()
export const remove_exp = createEvent()
export const add_money = createEvent()
export const remove_money = createEvent()
export const change_lvl = createEvent()
export const change_next_lvl_exp = createEvent()
export const change_damage = createEvent()
