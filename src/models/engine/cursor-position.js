import { useEffect } from 'react'
import { createStore, createEvent } from 'effector'

export const $cursor_position = createStore('left')

const change_cursor_position = createEvent()

$cursor_position.on(change_cursor_position, (_, pos) => pos)

export default function cursor_position() {
  useEffect(() => {
    document.querySelector('.render-game').onmousemove = function (event) {
      event = event || window.event

      let width = document.documentElement.clientWidth

      if (width / 2 > event.clientX) {
        change_cursor_position('left')
      } else {
        change_cursor_position('right')
      }
    }
  }, [])
}
