import { CreateUserParams, SignInParams } from "@/type";
import { Account, Avatars, Client, Databases, ID } from "react-native-appwrite";

export const appwriteConfig = {
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
    platform: "com.food.ordering",
    project: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
    databaseId: "68a564d400116b709089",
    userCollectionId: "68a565c4000ae05dd045",
};

export const client = new Client();
client
    .setEndpoint(appwriteConfig.endpoint)
    .setProject(appwriteConfig.project)
    .setPlatform(appwriteConfig.platform);

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);

export const createUser = async ({ name, email, password }: CreateUserParams) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, name);

        if (!newAccount) throw Error("Account creation failed");

        // Call your signIn function, not the SignIn component
        await signIn({ email, password });

        const avatarUrl = avatars.getInitialsURL(name);

        console.log(appwriteConfig);
        return await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            { email, name, accountId: newAccount.$id, avatar: avatarUrl }
        );

    } catch (e: any) {
        throw new Error(`Failed to create user: ${e.message || e}`);
    }
};

export const signIn = async ({ email, password }: SignInParams) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (e: any) {
        throw new Error(`Failed to sign in: ${e.message || e}`);
    }
};
