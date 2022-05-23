import React from 'react'

import { ArenaInfoBar, ArenaTouchZone, PlayerBar, EscButton, EscModal, GameBar, OpponentSprite } from '@components'
import key_press from '@models/engine/key-pressed'
import cursor_position from '@models/engine/cursor-position'
import { game_version } from '@utils/constants'
import './render-game.scss'

export default function RenderGame() {
  //React Effects
  key_press()
  cursor_position()

  return (
    <div className='render-game'>
      <div className='side-right'>
        <PlayerBar />
      </div>
      <div className='side-center'>
        <ArenaInfoBar />
        <OpponentSprite />
        <ArenaTouchZone />
      </div>
      <div className='side-left'>
        <EscButton />
        <GameBar />
      </div>
      <EscModal />
      <p className='version'>v {game_version}</p>
    </div>
  )
}
