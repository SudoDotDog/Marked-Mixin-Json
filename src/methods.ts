/**
 * @author WMXPY
 * @namespace MarkedMixinJson
 * @description Methods
 */

export const MarkedJsonMixinMethods: Record<string, any> = {

    parse: (json: string) => {
        return JSON.parse(json);
    },
    stringify: (target: any) => {
        return JSON.stringify(target);
    },
};
