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
const hotelCollectionId = '6888626a002f46365c46'
const roomCollectionId = '688862df0006fcc0ea55'
const extraServicesCollectionId = '6889b91c003d5fa5b1f4'
const barItemsCollectionId = '6889b9d500106dd74989'

export {
  client,
  account,
  databases,
  getEndpoint,
  getProjectName,
  getProjectId,
  databaseId,
  todoCollectionId,
  hotelCollectionId,
  roomCollectionId,
  extraServicesCollectionId,
  barItemsCollectionId,
}
