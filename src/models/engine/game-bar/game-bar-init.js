import { createStore, createEvent, sample } from 'effector'

import { game_bar } from './game-bar'
import { bar_buttons } from '../'

export const $game_bar_tabs = createStore(game_bar)
export const $current_bar_tab = createStore('')

export const change_current_bar_tab = createEvent()

$current_bar_tab.on(change_current_bar_tab, (_, current) => current)

sample({
  clock: change_current_bar_tab,
  source: { game_bar_tabs: $game_bar_tabs, current_tab: $current_bar_tab },
  fn: ({ game_bar_tabs, current_tab }) =>
    game_bar_tabs.map((tab, i) =>
      tab.name === current_tab
        ? bar_buttons[i].classList.add('bar-navigation--active')
        : bar_buttons[i].classList.remove('bar-navigation--active')
    )
})
