import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Pricing {
    id: bigint;
    title: string;
    description: string;
    price: string;
}
export interface PageContent {
    title: string;
    content: string;
}
export interface CsrInfo {
    status: string;
    explanation: string;
}
export interface UserProfile {
    name: string;
    email: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllPageContents(): Promise<Array<[string, PageContent]>>;
    getAllPricingEntries(): Promise<Array<Pricing>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getCsrInfo(): Promise<CsrInfo>;
    getPageContent(page: string): Promise<PageContent | null>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    initializeAccessControl(): Promise<void>;
    isCallerAdmin(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
}
