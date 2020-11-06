#!/usr/bin/env node

import updateNotifier from "update-notifier";
const pkg = require("../package.json");
const notifier = updateNotifier({ pkg });
