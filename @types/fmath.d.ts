/**
 * fmath contains a set of mathematical functions that work with FixedPoint numbers and integers.
 * @noSelf
 */
declare namespace fmath {
  /**
   * Returns a fixedpoint value with the integral part of value, and no fractional part.
   */
  export function to_fixedpoint(value: number): fixedpoint
}
