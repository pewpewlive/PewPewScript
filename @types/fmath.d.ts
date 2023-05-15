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
   * Returns a fixedpoint value with the integral part of value, and no fractional part.
   */
  export function to_fixedpoint(value: number): fixedpoint
}
