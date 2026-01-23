// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { BottomSheetModal as OriginalBottomSheetModal } from '@gorhom/bottom-sheet';
import { withUniwind } from 'uniwind';

export const BottomSheetModal = withUniwind(OriginalBottomSheetModal, {
  className: {
    target: 'style',
  },
});

export type BottomSheetModal = OriginalBottomSheetModal;
