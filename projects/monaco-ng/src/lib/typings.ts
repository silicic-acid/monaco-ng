import { InjectionToken } from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { editor } from 'monaco-editor';

import IEditorConstructionOptions = editor.IEditorConstructionOptions;
import IDiffEditorConstructionOptions = editor.IDiffEditorConstructionOptions;

export type EditorMode = 'normal' | 'diff';

export type JoinedEditorOption =
  | IEditorConstructionOptions
  | IDiffEditorConstructionOptions;

export enum MonacoLoadingStatus {
  UNLOAD = 'unload',
  LOADING = 'loading',
  LOADED = 'loaded'
}

export interface MonacoConfig {
  assetsRoot?: string | SafeUrl;
  defaultEditorOption?: JoinedEditorOption;

  /**
   * Resource of monaco editor is loaded from a remote server and monaco object is accessible.
   * You can register language services or themes in this hook.
   */
  onLoad?(): void;

  onFirstEditorInit?(): void;

  onInit?(): void;
}

export const MONACO_CONFIG = new InjectionToken<MonacoConfig>(
  'NZ_MONACO_EDITOR_CONFIG',
  {
    providedIn: 'root',
    factory: MONACO_DEFAULT_CONFIG_FACTORY
  }
);

export function MONACO_DEFAULT_CONFIG_FACTORY(): MonacoConfig {
  return {};
}
