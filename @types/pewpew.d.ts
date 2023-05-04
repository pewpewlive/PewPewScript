/**
 * The pewpew library contains all the functions for configuring levels and managing entities.
 * @noSelf
 */
declare namespace pewpew {
  // ENUMS
  export enum CannonFrequency {
    FREQ_1,
    FREQ_2,
    FREQ_3,
    FREQ_5,
    FREQ_6,
    FREQ_7_5,
    FREQ_10,
    FREQ_15,
    FREQ_30,
  }
  export enum CannonType {
    SINGLE,
    TIC_TOC,
    DOUBLE,
    TRIPLE,
    FOUR_DIRECTIONS,
    DOUBLE_SWIPE,
    HEMISPHERE,
  }
  export enum EntityType {
    ASTEROID,
    BAF,
    INERTIAC,
    MOTHERSHIP,
    MOTHERSHIP_BULLET,
    ROLLING_CUBE,
    ROLLING_SPHERE,
    UFO,
    WARY,
    CROWDER,
    CUSTOMIZABLE_ENTITY,
    SHIP,
    BOMB,
    BAF_BLUE,
    BAF_RED,
    WARY_MISSILE,
    UFO_BULLET,
    PLAYER_BULLET,
    BOMB_EXPLOSION,
    PLAYER_EXPLOSION,
  }
  export enum BombType {
    FREEZE,
    REPULSIVE,
    ATOMIZE,
    SMALL_ATOMIZE,
  }
  export enum MothershipType {
    THREE_CORNERS,
    FOUR_CORNERS,
    FIVE_CORNERS,
    SIX_CORNERS,
    SEVEN_CORNERS,
  }
  // FUNCTIONS
  /**
   * Prints str in the console for debugging.
   * @param str string arguments
   */
  export function print(...str: any[]): void
  /**
   * Prints debug info: the number of entities created and the amount of memory used by the script.
   */
  export function print_debug_info(): void
  /**
   * Sets the level's size. Implicetely adds walls to make sure that entities can not go outside of the level's boundaries.
   */
  export function set_level_size(width: fixedpoint, height: fixedpoint): void
  /**
   * Adds a wall to the level from (start_x,start_y) to (end_x,end_y), and returns its wall ID.
   */
  export function add_wall(
    start_x: fixedpoint,
    start_y: fixedpoint,
    end_x: fixedpoint,
    end_y: fixedpoint
  ): WallId
  /**
   * Remove the wall with the given wall_id.
   */
  export function remove_wall(wall_id: number): void
  /**
   * Adds a callback that will be updated at each game tick.
   */
  export function add_update_callback(update_callback: Function): void
  /**
   * Returns the number of players in the game.
   */
  export function get_number_of_players(): number
  /**
   * Increases the score of the player at the specified player_index by an amount of delta.
   */
  export function increase_score_of_player(player_index: number, delta: number): void
  /**
   * Ends the current game.
   */
  export function stop_game(): void
  /**
   * Returns the inputs of the player at the specified index.
   */
  export function get_player_inputs(
    player_index: number
  ): LuaMultiReturn<
    [
      move_angle: fixedpoint,
      move_distance: fixedpoint,
      shoot_angle: fixedpoint,
      shoot_distance: fixedpoint
    ]
  >
  /**
   * Returns the score of the player at the specified player_index.
   */
  export function get_score_of_player(player_index: number): number
  /**
   * Configures the player at the specified player_index.
   */
  export function configure_player(player_index: number, configuration: PlayerConfig): void
  /**
   * Configures the player's HUD.
   */
  export function configure_player_hud(player_index: number, configuration: HudConfig): void
  /**
   * Returns a map containing the configuration of the player at the specified `player_index`.
   */
  export function get_player_configuration(player_index: number): PlayerConfig
  /**
   * Configures the weapon of the ship identified with ship_id using configuration.
   */
  export function configure_player_ship_weapon(ship_id: EntityId, configuration: WeaponConfig): void
  /**
   * Reduces the amount of shield of the player that owns the ship by damage points.
   */
  export function add_damage_to_player_ship(ship_id: EntityId, damage: number): void
  /**
   * Adds an arrow to the ship identified with ship_id pointing towards the entity identified with entity_id, and returns the identifier of the arrow.
   */
  export function add_arrow_to_player_ship(
    ship_id: EntityId,
    target: EntityId,
    color: number
  ): number
  /**
   * Removes the arrow identified by arrow_id from the ship identified by ship_id.
   */
  export function remove_arrow_from_player_ship(ship_id: EntityId, arrow_id: number): void
  /**
   * Makes the player ship transparent for transparency_duration game ticks.
   */
  export function make_player_ship_transparent(
    ship_id: EntityId,
    transparency_duration: number
  ): void
  /**
   * Sets and returns the effective speed of the specified player ship as a function of the base speed of the ship.
   */
  export function set_player_ship_speed(
    ship_id: EntityId,
    factor: fixedpoint,
    offset: fixedpoint,
    duration: number
  ): fixedpoint
  /**
   * Returns the list of the entityIDs of all the entities currently in the level.
   */
  export function get_all_entities(): EntityId[]
  /**
   * Returns the list of collidable entities (which includes all enemies) that overlap with the given disk.
   */
  export function get_entities_colliding_with_disk(
    center_x: fixedpoint,
    center_y: fixedpoint,
    radius: fixedpoint
  ): EntityId[]
  /**
   * Returns the number of entities of type `entity_type` that are alive.
   */
  export function get_entity_count(entity_type: EntityType): number
  /**
   * Plays the sound described at `sound_path` at the index `index`.
   */
  export function play_ambient_sound(sound_path: string, index: number): void
  /**
   * Plays the sound described at `sound_path` at the in-game location of `x`,`y`.
   */
  export function play_sound(sound_path: string, index: number, x: fixedpoint, y: fixedpoint): void
  /**
   * Creates an explosion of particles at the location `x`,`y`.
   */
  export function create_explosion(
    x: fixedpoint,
    y: fixedpoint,
    color: number,
    scale: fixedpoint,
    particle_count: number
  ): void
  /**
   * Creates a new Asteroid at the location `x`,`y` and returns its entityId.
   */
  export function new_asteroid(x: fixedpoint, y: fixedpoint): EntityId
  /**
   * Creates a new BAF at the location `x`,`y`, and returns its entityId.
   */
  export function new_baf(
    x: fixedpoint,
    y: fixedpoint,
    angle: fixedpoint,
    speed: fixedpoint,
    lifetime: number
  ): EntityId
  /**
   * Creates a new red BAF at the location `x`,`y`, and returns its entityId. A red BAF has more health points than a regular BAF.
   */
  export function new_baf_red(
    x: fixedpoint,
    y: fixedpoint,
    angle: fixedpoint,
    speed: fixedpoint,
    lifetime: number
  ): EntityId
  /**
   * Creates a new blue BAF at the location `x`,`y`, and returns its entityId. A blue BAF bounces on walls with a slightly randomized angle.
   */
  export function new_baf_blue(
    x: fixedpoint,
    y: fixedpoint,
    angle: fixedpoint,
    speed: fixedpoint,
    lifetime: number
  ): EntityId
  /**
   * Creates a new Bomb at the location `x`,`y`, and returns its entityId.
   */
  export function new_bomb(x: fixedpoint, y: fixedpoint, bomb_type: BombType): EntityId
  /**
   * Creates a new customizable entity at the location `x`,`y` and returns its entityId.
   */
  export function new_customizable_entity(x: fixedpoint, y: fixedpoint): EntityId
  /**
   * Creates a new Inertiac at the location `x`,`y`, and returns its entityId.
   */
  export function new_inertiac(
    x: fixedpoint,
    y: fixedpoint,
    acceleration: fixedpoint,
    angle: fixedpoint
  ): EntityId
  /**
   * Creates a new Mothership at the location `x`,`y`, and returns its entityId.
   */
  export function new_mothership(
    x: fixedpoint,
    y: fixedpoint,
    mothership_type: MothershipType,
    angle: fixedpoint
  ): EntityId
  /**
   * Creates a new Player Ship at the location `x`,`y` for the player identified by `player_index`, and returns its entityId.
   */
  export function new_player_ship(x: fixedpoint, y: fixedpoint, player_index: number): EntityId
  /**
   * Creates a new bullet at the location `x`,`y` with the angle `angle` belonging to the player at the index `player_index`. Returns the entityId of the bullet.
   */
  export function new_player_bullet(
    x: fixedpoint,
    y: fixedpoint,
    angle: fixedpoint,
    player_index: number
  ): EntityId
  /**
   * Creates a new Rolling Cube at the location `x`,`y` and returns its entityId.
   */
  export function new_rolling_cube(x: fixedpoint, y: fixedpoint): EntityId
  /**
   * Creates a new Rolling Sphere  at the location `x`,`y` and returns its entityId.
   */
  export function new_rolling_sphere(x: fixedpoint, y: fixedpoint, angle: fixedpoint, speed: fixedpoint): EntityId
  /**
   * Returns the position of the entity identified by id.
   */
  export function entity_get_position(
    entity: EntityId
  ): LuaMultiReturn<[x: fixedpoint, y: fixedpoint]>
}
