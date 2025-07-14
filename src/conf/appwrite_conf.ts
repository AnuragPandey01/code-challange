const appwriteConf = {
  endpoint: String(import.meta.env.VITE_APPWRITE_ENDPOINT),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE),
  languageCollectionId: String(
    import.meta.env.VITE_APPWRITE_LANGUAGE_COLLECTION,
  ),
  challangeCollectionId: String(
    import.meta.env.VITE_APPWRITE_CHALLANGE_COLLECTION,
  ),
};

export default appwriteConf;
