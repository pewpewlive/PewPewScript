/**
 * @noSelfInFile
 */
/**
 * The pewpew library contains all the functions for configuring levels and managing entities.
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
  export enum BonusType {
    REINSTANTIATION,
    SHIELD,
    SPEED,
    WEAPON,
  }
  export enum MothershipType {
    THREE_CORNERS,
    FOUR_CORNERS,
    FIVE_CORNERS,
    SIX_CORNERS,
    SEVEN_CORNERS,
  }
  export enum WeaponType {
    BULLET,
    FREEZE_EXPLOSION,
    REPULSIVE_EXPLOSION,
    ATOMIZE_EXPLOSION,
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
  export function add_update_callback(update_callback: () => void): void
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
   * Creates a new Bonus at the location `x`,`y` of the type type, and returns its entityId.
   */
  export function new_bonus(
    x: fixedpoint,
    y: fixedpoint,
    type: BonusType,
    config: BonusConfig
  ): EntityId
  /**
   * Creates a new Crowder at the location `x`, `y`, and returns its entityId.
   */
  export function new_crowder(x: fixedpoint, y: fixedpoint): EntityId
  /**
   * Creates a new floating message at the location `x`, `y`, with str as the message.
   */
  export function new_floating_message(
    x: fixedpoint,
    y: fixedpoint,
    str: string,
    config: FloatingMessageConfig
  ): EntityId
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
   * Creates a new Pointonium at the location `x`, `y`.
   */
  export function new_pointonium(x: fixedpoint, y: fixedpoint, value: 64 | 128 | 256): EntityId
  /**
   * Creates a new Player Ship at the location `x`,`y` for the player identified by `player_index`, and returns its entityId.
   */
  export function new_player_ship(x: fixedpoint, y: fixedpoint, player_index: number): EntityId
  /**
   * Creates a new bullet at the location `x`,`y`
   * with the angle `angle` belonging to the player at the index `player_index`. Returns the entityId of the bullet.
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
  export function new_rolling_sphere(
    x: fixedpoint,
    y: fixedpoint,
    angle: fixedpoint,
    speed: fixedpoint
  ): EntityId
  /**
   * Creates a new Wary at the location `x`, `y`.
   */
  export function new_wary(x: fixedpoint, y: fixedpoint): EntityId
  /**
   * Creates a new UFO at the location `x`, `y` moving horizontally at the speed of `dx`, and returns its entityId.
   */
  export function new_ufo(x: fixedpoint, y: fixedpoint, dx: fixedpoint): EntityId
  /**
   * Sets whether the Rolling Cube identified with id collides with walls.
   *
   * By default, it does not.
   */
  export function rolling_cube_set_enable_collisions_with_walls(
    entity_id: EntityId,
    collide_with_walls: boolean
  ): void
  /**
   * Sets whether the UFO identified with `id` collides with walls.
   *
   * By default, it does not.
   */
  export function ufo_set_enable_collisions_with_walls(
    entity_id: EntityId,
    collide_with_walls: boolean
  ): void
  /**
   * Returns the position of the entity identified by id.
   */
  export function entity_get_position(
    entity: EntityId
  ): LuaMultiReturn<[x: fixedpoint, y: fixedpoint]>
  /**
   * Returns whether the entity identified by `id` is alive or not.
   */
  export function entity_get_is_alive(entity_id: EntityId): boolean
  /**
   * Returns whether the entity identified by `id` is in the process of being destroyed.
   *
   * Returns false if the entity does not exist.
   */
  export function entity_get_is_started_to_be_destroyed(entity_id: EntityId): boolean
  /**
   * Sets the position of the entity identified by `id` to `x`, `y`.
   */
  export function entity_set_position(entity_id: EntityId, x: fixedpoint, y: fixedpoint): void
  /**
   * Sets the radius of the entity identified by `id`.
   *
   * To give you a sense of scale, motherships have a radius of 28fx.
   */
  export function entity_set_radius(entity_id: EntityId, radius: fixedpoint): void
  /**
   * Sets a callback that will be called at every tick as long as the entity identified by `id` is alive.
   *
   * Remove the callback by passing an undefined `callback`.
   *
   * The callbacks gets called with the entity ID.
   */
  export function entity_set_update_callback(
    entity_id: EntityId,
    callback: (entity_id: EntityId) => void
  ): void
  /**
   * Makes the entity identified by `id` immediately disappear forever.
   */
  export function entity_destroy(entity_id: EntityId): void
  /**
   * Makes the entity identified by `id` react to the weapon described in `weapon_description`.
   *
   * Returns whether the entity reacted to the weapon.
   *
   * The returned value is typically used to decide whether the weapon should continue to exist or not.
   */
  export function entity_react_to_weapon(entity_id: EntityId, weapon: WeaponDescription): boolean
  /**
   * Sets whether the position of the mesh wil be interpolated when rendering.
   *
   * In general, this should be set to true if the entity will be moving smoothly.
   */
  export function customizable_entity_set_position_interpolation(
    entity_id: EntityId,
    enable: boolean
  ): void
  /**
   * Sets the mesh of the customizable entity identified by `id` to the mesh described in the file `file_path` at the index `index`.
   *
   * `index` starts at 0.
   *
   * If `file_path` is an empty string, the mesh is removed.
   */
  export function customizable_entity_set_mesh(
    entity_id: EntityId,
    file_path: string,
    index: number
  ): void
  /**
   * Similar to `customizable_entity_set_mesh`, but sets two meshes that will be used in alternation.
   *
   * By specifying 2 separate meshes, 60 fps animations can be achieved.
   */
  export function customizable_entity_set_flipping_meshes(
    entity_id: EntityId,
    file_path: string,
    index_0: number,
    index_1: number
  ): void
  /**
   * Sets the color multiplier for the mesh of the customizable entity identified by `id`.
   */
  export function customizable_entity_set_mesh_color(entity_id: EntityId, color: number): void
  /**
   * Sets the string to be displayed as part of the mesh of the customizable entity identified by `id`.
   */
  export function customizable_entity_set_string(entity_id: EntityId, text: string): void
  /**
   * Sets the position of the mesh to `x`, `y`, `z`, relative to the center ofthe customizable entity identified by `id`.
   */
  export function customizable_entity_set_mesh_xyz(
    entity_id: EntityId,
    x: fixedpoint,
    y: fixedpoint,
    z: fixedpoint
  ): void
  /**
   * Sets the height of the mesh of the customizable entity identified by `id`.
   *
   * A `z` greater to 0 makes the mesh be closer, while a `z` less than 0 makes the mesh be further away.
   */
  export function customizable_entity_set_mesh_z(entity_id: EntityId, z: fixedpoint): void
  /**
   * Sets the scale of the mesh of the customizable entity identified by `id`.
   *
   * A `scale` less than 1 makes the mesh appear smaller, while a `scale` greater than 1 makes the mesh appear larger.
   */
  export function customizable_entity_set_mesh_scale(entity_id: EntityId, scale: fixedpoint): void
  /**
   * Sets the scale of the mesh of the customizable entity identified by `id` along the `x`, `y`, `z` axis.
   *
   * A `scale` less than 1 makes the mesh appear smaller, while a `scale` greater than 1 makes the mesh appear larger.
   */
  export function customizable_entity_set_mesh_xyz_scale(
    entity_id: EntityId,
    scale_x: fixedpoint,
    scale_y: fixedpoint,
    scale_z: fixedpoint
  ): void
  /**
   * Sets the rotation angle of the mesh of the customizable entity identified by `id`.
   *
   * The rotation is applied along the axis defined by `x_axis`, `y_axis`, `z_axis`.
   */
  export function customizable_entity_set_mesh_angle(
    entity_id: EntityId,
    angle: fixedpoint,
    x_axis: fixedpoint,
    y_axis: fixedpoint,
    z_axis: fixedpoint
  ): void
  /**
   * Skips the interpolation of the mesh's attributes (`x`, `y`, `z`, `scale_x`, `scale_y`, `scale_z`, `rotation`).
   */
  export function customizable_entity_skip_mesh_attributes_interpolation(entity_id: EntityId): void
  /**
   * Configures the way the entity is going to respond to the music.
   */
  export function customizable_entity_configure_music_response(
    entity_id: EntityId,
    config: MusicResponseConfig
  ): void
  /**
   * Adds a rotation to the mesh of the customizable entity identified by `id`.
   *
   * The rotation is applied along the axis defined by `x_axis`, `y_axis`, `z_axis`.
   */
  export function customizable_entity_add_rotation_to_mesh(
    entity_id: EntityId,
    angle: fixedpoint,
    x_axis: fixedpoint,
    y_axis: fixedpoint,
    z_axis: fixedpoint
  ): void
  /**
   * Sets the radius defining the visibility of the entity.
   *
   * This allows the game to know when an entity is actually visible, which in turns allows to massively optimize the rendering.
   *
   * Use the smallest value possible.
   *
   * If not set, the rendering radius is an unspecified large number that effectively makes the entity always be rendered, even if not visible.
   */
  export function customizable_entity_set_visibility_radius(entity_id: EntityId, radius: fixedpoint): void
  /**
   * `collide_with_walls` configures whether the entity should stop when colliding with walls.
   *
   * If `collision_callback` is not undefined, it is called anytime a collision is detected.
   *
   * The callback gets called with the entity id of the entity withthe callback, and with the normal to the wall.
   */
  export function customizable_entity_configure_wall_collision(
    entity_id: EntityId,
    callback: (entity_id: EntityId, wall_normal_x: fixedpoint, wall_normal_y: fixedpoint) => void
  ): void
  /**
   * Sets the callback for when the customizable entity identified by `id` collides with a player's ship.
   *
   * The callback gets called with the entity id of the entity with the callback,
   * and the `player_index` and `ship_id` that were involved in the collision.
   *
   * Don't forget to set a radius on the customizable entity, otherwise no collisions will be detected.
   */
  export function customizable_entity_set_player_collision_callback(
    entity_id: EntityId,
    callback: (entity_id: EntityId, player_index: number, ship_entity_id: EntityId) => void
  ): void
  /**
   * Sets the callback for when the customizable entity identified by id collides with a player's weapon.
   *
   * The callback gets called with the entity_id of the entity on which the callback is set,
   * the player_index of the player that triggered the weapon, and the type of the weapon.
   *
   * The callback *must* return a boolean saying whether the entity reacts to the weapon.
   *
   * In the case of a bullet, this boolean determines whether the bullet should be destroyed.
   */
  export function customizable_entity_set_weapon_collision_callback(
    entity_id: EntityId,
    callback: (entity_id: EntityId, player_index: number, weapon_type: WeaponType) => boolean
  ): void
  /**
   * Makes the customizable entity identified by `id` spawn for a duration of `spawning_duration` game ticks.
   */
  export function customizable_entity_start_spawning(
    entity_id: EntityId,
    spawning_duration: number
  ): void
  /**
   * Makes the customizable entity identified by `id` explode for a duration of `explosion_duration` game ticks.
   *
   * After the explosion, the entity is destroyed.
   *
   * `explosion_duration` must be less than 255.
   * Any scale applied to the entity is also applied to the explosion.
   */
  export function customizable_entity_start_spawning(
    entity_id: EntityId,
    explosion_duration: number
  ): void
}
