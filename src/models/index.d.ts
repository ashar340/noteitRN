import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FolderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Folder {
  readonly id: string;
  readonly Notes?: (Note | null)[];
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Folder, FolderMetaData>);
  static copyOf(source: Folder, mutator: (draft: MutableModel<Folder, FolderMetaData>) => MutableModel<Folder, FolderMetaData> | void): Folder;
}

export declare class Note {
  readonly id: string;
  readonly name?: string;
  readonly content?: string;
  readonly folderID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}