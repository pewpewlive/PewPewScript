import { SourceNode } from "source-map"
import * as ts from "typescript"
import * as tstl from "typescript-to-lua"

const CUSTOM_COMMENT_HEADER =
  "--[[ File patched by PewPewScript https://meshstudio.pewpew.live/ppsc ]]\n"

class CustomPrinter extends tstl.LuaPrinter {
  /* Override printFile */
  protected printFile(file: tstl.File): SourceNode {
    const originalResult = super.printFile(file)
    // Add header comment at the top of the file
    return this.createSourceNode(file, [`${CUSTOM_COMMENT_HEADER}`, originalResult])
  }

  /* Override printNumericLiteral */
  public printNumericLiteral(expression: tstl.NumericLiteral): SourceNode {
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
    // TODO: find a way to get fixedpoint type
    [ts.SyntaxKind.NumericLiteral]: (node, context) => {
      const result = context.superTransformExpression(node)
      //console.log("\n==============================================\n")
      //console.log(context.checker.getContextualType(node))

      if (context.checker.getContextualType(node)?.aliasSymbol?.escapedName === "fixedpoint") {
        //context.createTempNameForNode(node)
        result.flags = 20 // Sending arbitrary flag for marking the node as fixedpoint
      }
      return result
    },
  },
}

export default plugin
