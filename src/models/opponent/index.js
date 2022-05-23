import { createStore, createEvent, combine } from 'effector'
import { snapshot } from 'patronum/snapshot'

//Данные противника
export const $hp_opponent = createStore(0)
export const $exp_opponent = createStore(0)
export const $current_opponent = createStore(0)

export const $opponent_combine_data = combine({ hp: $hp_opponent, exp: $exp_opponent, current: $current_opponent })

//Действия с противником
export const punch_your_opponent = createEvent()
export const restore_hp_opponent = createEvent()
export const change_current_opponent = createEvent()
export const loading_hp_opponent = createEvent()
export const calculating_exp_opponent = createEvent()
export const snapshot_hp_opponent = createEvent()

export const $snapshot_hp = snapshot({ source: $hp_opponent, clock: snapshot_hp_opponent })
