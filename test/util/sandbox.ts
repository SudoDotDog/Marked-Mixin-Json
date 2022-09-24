/**
 * @author WMXPY
 * @namespace Util
 * @description Sandbox
 * @override Test
 */

import { Sandbox } from "@sudoo/marked";
import { markedJsonMixinFactory } from "../../src";

export const createTestSandbox = (): Sandbox => {

    const sandbox: Sandbox = Sandbox.fromAllEvaluators();
    sandbox.use(markedJsonMixinFactory.createInjectMixin("JSON"));

    return sandbox;
};
