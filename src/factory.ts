/**
 * @author WMXPY
 * @namespace MarkedMixinJson
 * @description Factory
 */

import { MarkedExportsMixinFactory } from "@sudoo/marked-mixin";
import { MarkedJsonMixinMethods } from "./methods";

export const markedJsonMixinFactory = MarkedExportsMixinFactory.fromExports(
    MarkedJsonMixinMethods,
);
