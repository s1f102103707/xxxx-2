/* eslint-disable */
import type * as Types from '../../../@types';

export type Methods = {
  post: {
    status: 201;
    /** User created successfully */
    resBody: Types.User;
    /** User to be created */
    reqBody: Types.UserCreate;
  };
};
