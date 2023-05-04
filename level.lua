--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
width = 1000
height = 1000
pewpew.set_level_size(width, height)
player = pewpew.new_player_ship(width / 2, height / 2, 0)
pewpew.print("Hi!")
pewpew.configure_player_ship_weapon(player, {cannon = pewpew.CannonType.HEMISPHERE, frequency = pewpew.CannonFrequency.FREQ_5})
