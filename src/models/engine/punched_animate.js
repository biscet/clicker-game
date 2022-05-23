import { sprite, opponent_sprite } from '.'

const punched_animate = () => {
  sprite[0].style.animation = 'none'
  sprite[0].offsetHeight
  sprite[0].style.animation = null

  opponent_sprite[0].style.animation = 'none'
  opponent_sprite[0].offsetHeight
  opponent_sprite[0].style.animation = null
}

export default punched_animate
