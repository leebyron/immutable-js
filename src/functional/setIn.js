/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { updateIn } from './updateIn';

export function setIn(collection, keyPath, value) {
  return updateIn(collection, keyPath, () => value);
}
