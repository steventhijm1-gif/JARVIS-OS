/*
==========================================
JARVIS OS
Module: Core
Version: 1.0
Author: Steven & ChatGPT
==========================================
*/

class JarvisCore {
    constructor() {
        this.version = "1.0";
        this.modules = [];
    }

    registerModule(name) {
        this.modules.push(name);
        console.log(`[CORE] ${name} loaded`);
    }

    getModules() {
        return this.modules;
    }
}

const jarvisCore = new JarvisCore();

jarvisCore.registerModule("Chat");
jarvisCore.registerModule("Voice");
jarvisCore.registerModule("Developer");
jarvisCore.registerModule("Plugins");

console.log("JARVIS Core Online");
