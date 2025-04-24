// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { BottomSheetModal as OriginalBottomSheetModal } from '@gorhom/bottom-sheet';
import { cssInterop } from 'nativewind';

export const BottomSheetModal = cssInterop(OriginalBottomSheetModal, {
  className: {
    target: 'style',
  },
});

export type BottomSheetModal = OriginalBottomSheetModal;
