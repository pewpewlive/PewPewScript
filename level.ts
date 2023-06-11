import { randomPos } from "./helpers/lib"

const width = 500 as fx
const height = 500 as fx

pewpew.set_level_size(width, height)
const player = pewpew.new_player_ship(divFx(width, 2 as fx), divFx(height, 2 as fx), 0)

pewpew.configure_player_ship_weapon(player, {
  cannon: pewpew.CannonType.TRIPLE,
  frequency: pewpew.CannonFrequency.FREQ_7_5,
})

pewpew.get_entity_count("hi")

let time = 0
pewpew.add_update_callback(() => {
  time++
  if (pewpew.get_player_configuration(0).has_lost) pewpew.stop_game()
  if (time % 30 === 0) {
    const [rx, ry] = randomPos(width, height)
    pewpew.new_rolling_cube(rx, ry)
  }
  if (time % 150 === 0) {
    const [bx, by] = randomPos(width, height)
    pewpew.new_bonus(bx, by, pewpew.BonusType.SHIELD, {
      box_duration: 90,
      number_of_shields: 1
    })
  }
})
