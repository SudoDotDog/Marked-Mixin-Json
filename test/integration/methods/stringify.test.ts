/**
 * @author WMXPY
 * @namespace Methods
 * @description Stringify
 * @override Integration Test
 */

import { MarkedResult, Sandbox } from "@sudoo/marked";
import { expect } from "chai";
import * as Chance from "chance";
import { assertSucceedMarkedResult } from "../../util/assert-result";
import { createTestSandbox } from "../../util/sandbox";

describe('Given (Stringify) Json Method for Integration Test', (): void => {

    const chance: Chance.Chance = new Chance('integration-method-stringify');

    it('should be able to execute stringify in sandbox', async (): Promise<void> => {

        const sandbox: Sandbox = createTestSandbox();

        const jsonObject: Record<string, any> = {
            a: chance.string(),
            b: chance.string(),
            c: chance.string(),
        };
        const jsonString: string = JSON.stringify(jsonObject);

        const result: MarkedResult = await sandbox.evaluate([
            `const json = ${jsonString};`,
            `export default JSON.stringify(json);`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(jsonString);
    });

    it('should be able to execute stringify in sandbox with additional argument', async (): Promise<void> => {

        const sandbox: Sandbox = createTestSandbox();
        sandbox.setAdditionalArgument(chance.string());

        const jsonObject: Record<string, any> = {
            a: chance.string(),
            b: chance.string(),
            c: chance.string(),
        };
        const jsonString: string = JSON.stringify(jsonObject);

        const result: MarkedResult = await sandbox.evaluate([
            `const json = ${jsonString};`,
            `export default JSON.stringify(json);`,
        ].join('\n'));

        assertSucceedMarkedResult(result);

        expect(result.exports.default).to.be.deep.equal(jsonString);
    });
});
