/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

import * as assert from "assert";
import rewire = require("rewire");
import vscode = require("vscode");

const customViews = rewire("../../src/features/ISECompatibility");
const enableISEMode = customViews.__get__("EnableISEMode");
const disableISEMode = customViews.__get__("DisableISEMode");

suite("ISECompatibility tests", () => {
    test("Can Enable ISE mode", () => {
        enableISEMode();
        assert.equal(vscode.workspace.getConfiguration("workbench.activityBar").get("visible"), false);
        disableISEMode();
        assert.equal(vscode.workspace.getConfiguration("workbench.activityBar").get("visible"), true);
    });
});
