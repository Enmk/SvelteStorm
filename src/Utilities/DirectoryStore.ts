import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

import type { NewFile, EditorCacheType, EditorObj, State } from '../types';

const DirectoryData: Writable<State> = writable<State>({
  mainDir: '',
  fileTree: [],
  openFilePath: '',
  fileRead: false,
  stateObj: {},
  activeFile: '',
  rename: false,
  deleteFile: false,
  activeDir: '',
  createFile: false,
  createFolder: false,
  createMainFile: false,
  createMainFolder: false,
  reload: false,
  activeFolder: '',
  parentChildTree: {},
});

const openTabs: Writable<NewFile[]> = writable<NewFile[]>([]);

const currentTabFilePath: Writable<string> = writable<string>('');

const editorCache: Writable<EditorCacheType> = writable<EditorCacheType>({});

//CodeMirror.fromTextArea is object being submitted in CodeMirror.svelte to this store
const codeMirrorEditor: Writable<EditorObj> = writable<object>(undefined);

let showEditorBackground: Writable<boolean> = writable<boolean>(true);

let appBeingDebugedPath: Writable<string> = writable<string>('')

let saveToFileName: Writable<string> = writable<string>('');


export {
  DirectoryData,
  openTabs,
  editorCache,
  codeMirrorEditor,
  currentTabFilePath,
  showEditorBackground,
  appBeingDebugedPath,
  saveToFileName,
};
