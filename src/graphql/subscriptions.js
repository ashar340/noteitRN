/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateFolder = /* GraphQL */ `
  subscription OnCreateFolder {
    onCreateFolder {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Notes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateFolder = /* GraphQL */ `
  subscription OnUpdateFolder {
    onUpdateFolder {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Notes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteFolder = /* GraphQL */ `
  subscription OnDeleteFolder {
    onDeleteFolder {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Notes {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote {
    onCreateNote {
      id
      name
      content
      folderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote {
    onUpdateNote {
      id
      name
      content
      folderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote {
    onDeleteNote {
      id
      name
      content
      folderID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
