/**
 * @noSelfInFile
 */
/**
 * Stores fixed point numbers. Used for storing and computing all the game related values that
 * require more precision than what integer numbers can provide.
 */
declare type fixedpoint = number & { _: "fixedpoint" }
/**
 * An alias for `fixedpoint` type.
 *
 * Stores fixed point numbers. Used for storing and computing all the game related values that
 * require more precision than what integer numbers can provide.
 */
declare type fx = fixedpoint
declare interface EntityId { _: "entity_id" }
declare interface WallId { _: "wall_id" }

declare interface PlayerConfig {
  has_lost?: boolean
  shield?: number
  camera_x_override?: fixedpoint
  camera_y_override?: fixedpoint
  camera_distance?: fixedpoint
  camera_rotation_x_axis?: fixedpoint
  move_joystick_color?: number
  shoot_joystick_color?: number
}

declare interface HudConfig {
  top_left_line?: string
}

declare interface WeaponConfig {
  frequency: pewpew.CannonFrequency
  cannon: pewpew.CannonType
  duration?: number
}

/**
 * TODO: make this type stricter
 */
declare interface BonusConfig {
  box_duration?: number
  frequency?: pewpew.CannonFrequency
  cannon?: pewpew.CannonType
  weapon_duration?: number
  number_of_shields?: number
  speed_factor?: fixedpoint
  speed_offset?: fixedpoint
  speed_duration?: number
  taken_callback?: (entity_id: EntityId, player_index: number, ship_entity_id: EntityId) => void
}

declare interface FloatingMessageConfig {
  scale?: fixedpoint
  ticks_before_fade?: fixedpoint
  is_optional?: boolean
}

declare interface WeaponDescription {
  type: pewpew.WeaponType
  x: fixedpoint
  y: fixedpoint
  player_index: number
}

declare interface MusicResponseConfig {
  color_start?: number
  color_end?: number
  scale_x_start?: fixedpoint
  scale_x_end?: fixedpoint
  scale_y_start?: fixedpoint
  scale_y_end?: fixedpoint
  scale_z_start?: fixedpoint
  scale_z_end?: fixedpoint
}
