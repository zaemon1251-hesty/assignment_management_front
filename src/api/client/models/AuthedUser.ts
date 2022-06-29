/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * User represents your collection of user as an entity.
 */
export type AuthedUser = {
    id?: number;
    name: string;
    email: string;
    disabled?: boolean;
    created_at?: string;
    updated_at?: string;
    hash_password: string;
};
