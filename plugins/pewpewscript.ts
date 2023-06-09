import { SourceNode } from "source-map"
import * as ts from "typescript"
import * as tstl from "typescript-to-lua"

const CUSTOM_COMMENT_HEADER =
  "--[[ File generated by PewPewScript (https://meshstudio.pewpew.live/ppsc/) ]]\n"

const REQUIRE_FUNCTION_REGEXP = /require\(["']([^"']+)["']\)/g

class CustomPrinter extends tstl.LuaPrinter {
  /* Override printFile */
  protected printFile(file: tstl.File): SourceNode {
    const originalResult = super.printFile(file)
    // Add header comment at the top of the file
    return this.createSourceNode(file, [`${CUSTOM_COMMENT_HEADER}`, originalResult])
  }

  /* Override printNumericLiteral */
  public printNumericLiteral(expression: tstl.NumericLiteral): SourceNode {
    // console.log(expression)
    if (expression.flags === 20)
      // Check for the arbitrary flag
      return this.createSourceNode(expression, `${expression.value}fx`)
    else return this.createSourceNode(expression, `${expression.value}`)
  }
}

const plugin: tstl.Plugin = {
  printer: (program: ts.Program, emitHost: tstl.EmitHost, fileName: string, file: tstl.File) =>
    new CustomPrinter(emitHost, program, fileName).print(file),
  visitors: {
    // TODO: try to improve fixedpoint support
    [ts.SyntaxKind.NumericLiteral]: (node, context) => {
      const result = context.superTransformExpression(node)
      // console.log("\n==============================================\n")
      // console.log(node)
      if (
        context.checker.getContextualType(node)?.aliasSymbol?.escapedName === "fixedpoint" ||
        context.checker.getContextualType(node.parent)?.aliasSymbol?.escapedName === "fixedpoint"
      ) {
        //context.createTempNameForNode(node)
        result.flags = 20 // Sending arbitrary flag for marking the node as fixedpoint
      }
      return result
    },
  },
  beforeEmit(
    program: ts.Program,
    options: tstl.CompilerOptions,
    emitHost: tstl.EmitHost,
    result: tstl.EmitFile[]
  ) {
    void program
    void options
    void emitHost

    // TODO: disable require manipulation when building a bundle
    for (const file of result) {
      file.code = file.code.replace(
        REQUIRE_FUNCTION_REGEXP,
        (match: string, modulePath: string) => {
          const newPath = modulePath.replace(/\./g, "/")
          return `require("/dynamic/${newPath}.lua")`
        }
      )
    }
    //console.log(result)
    console.log("PewPewScript compiled.")
  },
}

export default plugin
