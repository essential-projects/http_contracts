import {Request} from 'express';

import {IIdentity} from '@essential-projects/iam_contracts';

/**
 * Extends the base HttpRequest object to include a users identity.
 */
export interface HttpRequestWithIdentity extends Request {
  /**
   * Contains the requesting users identity.
   */
  identity: IIdentity;
}
