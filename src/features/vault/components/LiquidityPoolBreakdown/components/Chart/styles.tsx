import { Theme } from '@material-ui/core';

export const styles = (theme: Theme) => ({
  holder: {
    ...theme.typography['subline-sm'],
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
