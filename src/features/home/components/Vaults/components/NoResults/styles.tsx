import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  message: {
    padding: '24px',
    background: '#2D3153',
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
  },
  title: {
    ...theme.typography['h3'],
    color: '#fff',
    margin: '0 0 4px 0',
  },
  text: {
    ...theme.typography['body-lg'],
    color: '#fff',
  },
  extra: {
    marginTop: '24px',
  },
});
