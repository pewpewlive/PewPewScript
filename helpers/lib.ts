const MARGIN = 10 as fx

export function randomPos(
  width: fixedpoint,
  height: fixedpoint
): LuaMultiReturn<[fixedpoint, fixedpoint]> {
  return $multi(
    fmath.random_fixedpoint(MARGIN, (width - MARGIN) as fx),
    fmath.random_fixedpoint(MARGIN, (height - MARGIN) as fx)
  )
}
