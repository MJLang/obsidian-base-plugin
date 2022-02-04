import { App, Plugin, PluginSettingTab } from 'obsidian';

export default class CorePluginSettingTab extends PluginSettingTab {
  constructor(app: App, plugin: Plugin) {
    super(app, plugin);
  }

  display(): any {
  }
}
