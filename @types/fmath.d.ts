/**
 * @noSelfInFile
 */
/**
 * Same as `left + right`
 */
declare const addFx: LuaAddition<fixedpoint, fixedpoint, fixedpoint>
/**
 * Same as `left - right`
 */
declare const subFx: LuaSubtraction<fixedpoint, fixedpoint, fixedpoint>
/**
 * Same as `left * right`
 */
declare const mulFx: LuaMultiplication<fixedpoint, fixedpoint, fixedpoint>
/**
 * Same as `left / right`
 */
declare const divFx: LuaDivision<fixedpoint, fixedpoint, fixedpoint>

/**
 * fmath contains a set of mathematical functions that work with FixedPoint numbers and integers.
 */
declare namespace fmath {
  /**
   * Returns the maximum value a fixedpoint integer can take.
   */
  export function max_fixedpoint(): fixedpoint
  /**
   * Returns a random fixedpoint value in the range [`min`, `max`].
   *
   * `max` must be greater or equal to `min`.
   */
  export function random_fixedpoint(min: fixedpoint, max: fixedpoint): fixedpoint
  /**
   * Returns a random integer in the range [`min`, `max`].
   *
   * `max` must be greater or equal to `min`.
   */
  export function random_int(min: number, max: number): number
  /**
   * Returns the square root of `x`.
   *
   * `x` must be greater or equal to 0.
   */
  export function sqrt(x: fixedpoint): fixedpoint
  /**
   * Returns the fixedpoint value representing the fraction `numerator` / `denominator`.
   *
   * `denominator` must not be equal to zero.
   */
  export function from_fraction(numerator: number, denominator: number): fixedpoint
  /**
   * Returns the integral part of the `value`.
   */
  export function to_int(value: fixedpoint): number
  /**
   * Returns the absolute value.
   */
  export function abs_fixedpoint(value: fixedpoint): fixedpoint
  /**
   * Returns a fixedpoint value with the integral part of value, and no fractional part.
   */
  export function to_fixedpoint(value: number): fixedpoint
  /**
   * Returns the sinus and cosinus of `angle`.
   * @param angle radians
   */
  export function sincos(angle: fixedpoint): LuaMultiReturn<[sin: fixedpoint, cos: fixedpoint]>
  /**
   * Returns the principal value of the arc tangent of `y` / `x`.
   *
   * Returns a value in the range [0, τ).
   */
  export function atan2(y: fixedpoint, x: fixedpoint): fixedpoint
  /**
   * Returns τ (aka 2π).
   */
  export function tau(): fixedpoint
}
