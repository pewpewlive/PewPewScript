import { randomPos } from "./helpers/lib"

const width = 1000 as fx
const height = 1000 as fx

pewpew.set_level_size(width, height)
const player = pewpew.new_player_ship(divFx(width, 2 as fx), divFx(height, 2 as fx), 0) // Goofy ahh type definition
pewpew.print("Hi!")
pewpew.configure_player_ship_weapon(player, {
  cannon: pewpew.CannonType.HEMISPHERE,
  frequency: pewpew.CannonFrequency.FREQ_5,
})

const [vx, vy] = randomPos(width, height)
pewpew.new_wary(vx, vy)