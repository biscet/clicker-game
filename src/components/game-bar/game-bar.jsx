import React, { useEffect } from 'react'
import { useStore, useList } from 'effector-react'

import { $game_bar_tabs, change_current_bar_tab, $current_bar_tab } from '@models/engine/game-bar/game-bar-init'
import './game-bar.scss'
import AbilitysBar from './abilitys-bar'

export default function GameBar() {
  const current_tab = useStore($current_bar_tab)

  useEffect(() => {
    change_current_bar_tab('spells')
  }, [])

  const gameBarTabsMemoRender = useList($game_bar_tabs, (tab) => (
    <div className='bar-navigation' onClick={() => change_current_bar_tab(tab.name)}>
      {tab.img()}
    </div>
  ))

  return (
    <div className='game-bar'>
      <div className='game-bar__header'>{gameBarTabsMemoRender}</div>
      {current_tab === 'shop'}
      {current_tab === 'spells' && <AbilitysBar />}
      {current_tab === 'assistans'}
      {current_tab === 'global_changes'}
    </div>
  )
}
