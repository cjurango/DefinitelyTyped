// tslint:disable-next-line:no-bad-reference
/// <reference path="../util.d.ts" />
declare module "util" {
    namespace inspect {
        const custom: unique symbol;
    }
    namespace promisify {
        const custom: unique symbol;
    }
}
