import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface NavigationEntry {
    id: bigint;
    title: string;
    path: string;
}
export interface Entry {
    id: bigint;
    title: string;
    imagePath: string;
    collection: string;
    description: string;
    imageAlt: string;
    price: bigint;
}
export interface Pricing {
    id: bigint;
    title: string;
    description: string;
    price: string;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllPricingEntries(): Promise<Array<Pricing>>;
    getBeeResults(): Promise<{
        lastTrayResult?: string;
        lastHiveResult?: string;
        resultsStack: Array<string>;
        lastBeeResult?: string;
    }>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCollections(): Promise<Array<[bigint, {
            id: bigint;
            title: string;
            path: string;
        }]>>;
    getCsrInfo(): Promise<{
        status: string;
        explanation: string;
    }>;
    getEntriesByCollection(collectionId: bigint): Promise<Array<Entry>>;
    getNavigation(page: string): Promise<Array<NavigationEntry>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    initializeAccessControl(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}
