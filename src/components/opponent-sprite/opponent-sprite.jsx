import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { useStore } from 'effector-react'

import { sprite } from '@models/engine/'
import { $cursor_position } from '@models/engine/cursor-position'
import './opponent-sprite.scss'

export default function OpponentSprite() {
  const [render, setRender] = useState(false)
  const cursor_position = useStore($cursor_position)

  useEffect(() => {
    sprite[0].style.animation = 'none'
    setRender(true)
  }, [cursor_position])

  const spriteClass = classNames('sprite', {
    sprite__punched: cursor_position === 'left',
    'sprite__punched--left': cursor_position === 'right'
  })

  return <div className={spriteClass}>{render && <div className='opponent-sprite' />}</div>
}
