import { TAbstractFile, TFile, Vault } from 'obsidian';
import { extname } from 'path';

export function isMarkdown(item: TAbstractFile) {
  return extname(item.path) === '.md';
}

export async function readFile(ofile: TFile | TAbstractFile, vault: Vault) {
  const file = ofile as TFile;

  if (!isMarkdown(file)) {
    return null;
  }

  return await vault.read(file);
}
