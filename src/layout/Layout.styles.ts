export const Wrapper = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'stretch',
  width: '100%',
  height: '100%',
  padding: 0,
  background: '#fff',

  '*': {
    fontFamily: 'Inter, sans-serif'
  },

  '@media(min-width: 600px)': {
    width: 'auto',
    minWidth: '448px',
    alignItems: 'center',
    borderRadius: '8px',
    boxShadow: '0px 40px 72px rgba(7, 12, 24, 0.08)'
  }
}
