import { formatDistanceToNow } from 'date-fns';

export const formatToNow = (date: Date | number) => {
  return formatDistanceToNow(date, { addSuffix: true });
};
