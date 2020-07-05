import { useState } from 'react';
import { createContainer } from 'react-tracked';

const useValue = () => useState({ viewing: 'ALL', siderLevel: 1 });

export const {
  Provider,
  useTrackedState,
  useUpdate: useSetState,
} = createContainer(useValue);
