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
    return this.createSourceNode(expression, `${expression.value}fx`)
  }
}

const plugin: tstl.Plugin = {
  printer: (program: ts.Program, emitHost: tstl.EmitHost, fileName: string, file: tstl.File) =>
    new CustomPrinter(emitHost, program, fileName).print(file),
  visitors: {
    // TODO: find a way to get fixedpoint type
    // Visit string literals, if original transformer returns a string literal, change the string to "bar" instead
    [ts.SyntaxKind.StringLiteral]: (node, context) => {
      // `context` exposes `superTransform*` methods, that can be used to call either the visitor provided by previous
      // plugin, or a standard TypeScriptToLua visitor
      const result = context.superTransformExpression(node)
      // Standard visitor for ts.StringLiteral always returns tstl.StringLiteral node
      if (tstl.isStringLiteral(result)) {
        result.value = "bar"
      }

      return result
    },
  },
}

export default plugin
