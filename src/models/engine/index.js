//Атрибуты на которые нужно нажимать
export const skill_points = document.getElementsByClassName('skills-zone__ability')
export const attack_button = document.getElementsByClassName('touch-zone__attack-button')
export const esc_button = document.getElementsByClassName('esc-button')
export const bar_buttons = document.getElementsByClassName('bar-navigation')

//Спрайт противника
export const opponent_sprite = document.getElementsByClassName('opponent-sprite')
export const sprite = document.getElementsByClassName('sprite')

//Иниты массивов элементов
export const skill_points_init = Array.from({ length: 8 }, (_, i) => i)
export const game_bar_init = Array.from({ length: 4 }, (_, i) => i)

//Алгоритм отрисовки хп бара
export const hp_gradient_check = (snap, hp, current) => {
  return (snap - hp) / (current + 1)
}
