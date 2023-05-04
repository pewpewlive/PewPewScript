/**
 * Stores fixed point numbers. Used for storing and computing all the game related values that require more precision than what integer numbers can provide.
 */
declare type fixedpoint = number & { _: "fixedpoint" } // TODO: implement fixedpoint parsing
/**
 * An alias for fixedpoint type.
 */
declare type fx = fixedpoint
declare interface EntityId {}
declare interface WallId {}

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

