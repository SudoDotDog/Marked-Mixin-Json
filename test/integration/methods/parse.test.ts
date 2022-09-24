/**
 * @author WMXPY
 * @namespace Methods
 * @description Parse
 * @override Integration Test
 */

import { MarkedResult, Sandbox } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { assertSucceedMarkedResult } from "../../util/assert-result";
import { createTestSandbox } from "../../util/sandbox";

describe('Given (Parse) Json Method for Integration Test', (): void => {

    const chance: Chance.Chance = new Chance('integration-method-parse');

    it('should be able to execute parse in sandbox', async (): Promise<void> => {

        const sandbox: Sandbox = createTestSandbox();

        const jsonObject: Record<string, any> = {
            a: chance.string(),
            b: chance.string(),
            c: chance.string(),
        };
        const jsonString: string = JSON.stringify(jsonObject);

        const result: MarkedResult = await sandbox.evaluate([
            `const json = '${jsonString}';`,
            `export default JSON.parse(json);`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(jsonObject);
    });

    it('should be able to execute parse in sandbox with additional argument', async (): Promise<void> => {

        const sandbox: Sandbox = createTestSandbox();
        sandbox.setAdditionalArgument(chance.string());

        const jsonObject: Record<string, any> = {
            a: chance.string(),
            b: chance.string(),
            c: chance.string(),
        };
        const jsonString: string = JSON.stringify(jsonObject);

        const result: MarkedResult = await sandbox.evaluate([
            `const json = '${jsonString}';`,
            `export default JSON.parse(json);`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(jsonObject);
    });
});
