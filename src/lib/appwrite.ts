import { Account, Client, Databases } from "appwrite";
import appwriteConf from "@/conf/appwrite_conf";

export const client = new Client();

client.setEndpoint(appwriteConf.endpoint).setProject(appwriteConf.projectId);

export const databases = new Databases(client);
export const account = new Account(client);
export { ID } from "appwrite";
