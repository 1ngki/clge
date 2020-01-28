import { useCallback } from 'react';
import toast from 'toasted-notes';

export const useMessage = () => {
  return useCallback(text => {
    if (toast && text) {
      toast.notify(text, { position: 'top-right' });
    }
  }, []);
};
