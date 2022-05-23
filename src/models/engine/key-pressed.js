import { useEffect } from 'react'
import { useStore } from 'effector-react'

import { skill_points, attack_button, skill_points_init, esc_button, bar_buttons, game_bar_init } from '.'
import punched_animate from './punched_animate'
import { $skills_player } from '../abilitys'

export default function key_press() {
  const skills = useStore($skills_player)

  useEffect(() => {
    document.addEventListener('keyup', keycode_detected, false)

    //Список атрибутов, которым нужно добавить анимацию при нажатии
    skill_points_init.map((_, key) => animate_class_logic(skill_points[key]))
    game_bar_init.map((_, key) => animate_class_logic(bar_buttons[key]))
    animate_class_logic(attack_button[0])
    animate_class_logic(esc_button[0])
  }, [])

  //Метод добавления класса при нажатии на кнопку
  const animate_class_logic = (element) => {
    element.addEventListener('click', function () {
      element.classList.add('button-clicked')
      setTimeout(() => element.classList.remove('button-clicked'), 60)
    })
  }

  //Логика срабатывания при нажатии кнопки
  const keycode_detected = (event) => {
    //Кнопки 1-9
    for (let i = 0; i < skill_points_init.length; i++) {
      let check_button = event.keyCode === i + 49

      check_button && skill_points[i].click()
      check_button && skills[i].buyed && punched_animate()
    }

    //Кнопки G-K
    for (let i = 0; i < game_bar_init.length; i++) {
      event.keyCode === i + (i < 2 ? 71 : 72) && bar_buttons[i].click()
    }

    switch (event.keyCode) {
      //Кнопка ESC
      case 27:
        esc_button[0].click()
        break
      //Кнопка A
      case 65:
        attack_button[0].click()
        punched_animate()
        break
      default:
        break
    }
  }
}
