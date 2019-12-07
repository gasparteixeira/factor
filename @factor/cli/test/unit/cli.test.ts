import execa from "execa"
import * as cli from "@factor/cli"
jest.mock("execa")

describe("cli", () => {
  describe("setup cli", () => {
    it("setup: run yarn install to verify node_modules installed", async () => {
      jest.spyOn(process, "exit").mockImplementation(() => {
        throw "Mock"
      })

      await cli.runCommand({ command: "none" })
      expect(execa).toHaveBeenCalledWith(
        "yarn",
        expect.arrayContaining(["install"]),
        expect.anything()
      )
      expect(execa).toHaveBeenCalledWith(
        "factor",
        expect.arrayContaining(["create-loaders"]),
        expect.anything()
      )

      return
    })

    it("cli setup: sets environmental variables", () => {
      expect(Object.keys(process.env)).toEqual(
        expect.arrayContaining([
          "FACTOR_ENV",
          "NODE_ENV",
          "FACTOR_CWD",
          "FACTOR_COMMAND",
          "FACTOR_DEBUG",
          "PORT"
        ])
      )
    })
    it.todo("setup: support aliases '~' & '@'")
  })

  describe("commands", () => {
    it.todo("Runs development server with 'factor dev'")
    it.todo("Builds and then runs production server with 'factor start'")
    it.todo("Builds 'factor build'")
    it.todo("Runs setup utility with 'factor setup'")
    it.todo("Builds extension loaders with 'factor create-loaders'")
  })

  describe("logging", () => {
    it.todo("logs dev information")
    it.todo("logs port")
  })
})
