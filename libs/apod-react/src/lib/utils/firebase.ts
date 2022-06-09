import { getFunctions } from 'firebase/functions';

/**
 * Returns the Firebase functions object.
 *
 * **Note** it should be checked that multiple libraries get the same
 * "functions" instance, if not then we'll need to move this to a common library
 * instance so all libraries can get the same instance.
 * @unstable
 *
 */
export const functions = getFunctions();
