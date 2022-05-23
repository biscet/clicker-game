import { createStore, createEvent } from 'effector'

import { abilitys } from '@models/engine/abilitys'

export const $skills_player = createStore(abilitys)
export const $re_render_abilitys = createStore(false)

export const buy_skill = createEvent()
export const re_render = createEvent()
