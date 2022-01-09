import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

const SearchSection = styled(Box)(() => ({
  width: "1440px",
  height: "250px",
  display: "flex", 
  alignItems: "center",
  flexDirection: "column",
  backgroundImage: `url(https://i.ibb.co/4YyyJwj/pattern-Bg.png)`,
  padding: '24px 0',
}))

export { SearchSection }