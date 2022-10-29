import { Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) => ({
  input: {
    color: '#fff',
    background: '#d6c9f5',
    borderRadius: '8px',
    width: '100%',
    display: 'flex',
    border: 'solid 2px #d6c9f5',
    '& .MuiInputBase-input': {
      ...theme.typography['h2'],
      padding: `${8 - 2}px 16px`,
      color: '#fff',
      height: 'auto',
      '&:focus': {
        color: '#F5F5FF',
      },
      '&::placeholder': {
        color: '#ffffff',
        opacity: 1,
      },
    },
  },
  error: {
    borderColor: '#D15347',
  },
  icon: {
    background: 'transparent',
    padding: 0,
    border: 0,
    margin: '0 16px 0 0',
    boxShadow: 'none',
    lineHeight: 'inherit',
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
    flexShrink: 0,
    width: '24px',
    height: '24px',
    'button&': {
      cursor: 'pointer',
    },
  },
});
