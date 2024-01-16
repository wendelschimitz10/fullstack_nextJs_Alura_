import Box from "@src/components/Box"
import { theme } from "@src/theme/theme"

function Home() {
  return (
    <Box 
      tag="main" 
      styleSheet={{
        fontFamily: theme.typography.fontFamily,
        backgroundColor: {
          lg: 'red',
          xs: 'blue',
          sm: 'green'
      }
    }}>
      oi
    </Box>
  )
}

export default Home