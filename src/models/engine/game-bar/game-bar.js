import { shop, spells, assistans, global_changes } from './game-bar-tabs-svg'

function game_bar_unit(name, img) {
  this.name = name
  this.img = img
}

export const game_bar = [
  new game_bar_unit('shop', shop),
  new game_bar_unit('spells', spells),
  new game_bar_unit('assistans', assistans),
  new game_bar_unit('global_changes', global_changes)
]
