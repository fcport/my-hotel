import { Client, Account, Databases } from 'appwrite'

const getEndpoint = () => {
  console.log(import.meta.env.VITE_APPWRITE_ENDPOINT)
  return import.meta.env.VITE_APPWRITE_ENDPOINT
}

const getProjectId = () => {
  return import.meta.env.VITE_APPWRITE_PROJECT_ID
}

const getProjectName = () => {
  return import.meta.env.VITE_APPWRITE_PROJECT_NAME
}

const client = new Client().setEndpoint(getEndpoint()).setProject(getProjectId())

const account = new Account(client)
const databases: Databases = new Databases(client)

const databaseId = '687bbcbe000afa4a5417'
const todoCollectionId = '687bbccf00012226d30a'

export {
  client,
  account,
  databases,
  getEndpoint,
  getProjectName,
  getProjectId,
  databaseId,
  todoCollectionId,
}
