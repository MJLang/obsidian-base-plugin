import { Plugin } from 'obsidian';
import { PluginSettings } from './models/settings';
import CorePluginSettingTab from './settings-tab';

const DEFAULT_SETTINGS: PluginSettings = {};

export default class PluginCore extends Plugin {
  private settings: PluginSettings;

  async onload() {
    await this.loadSettings();
    const settingsTab = new CorePluginSettingTab(this.app, this);
    this.addSettingTab(settingsTab);
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}
