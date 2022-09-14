import { Avatar, Grid, Typography } from "@mui/material"
import React from "react"

const stringToColor = (string: string) => {
  let hash = 0
  let i

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash)
  }

  let color = "#"

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff
    color += `00${value.toString(16)}`.slice(-2)
  }
  /* eslint-enable no-bitwise */

  return color
}
const UserSession: React.FC = () => {
  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    }
  }
  return (
    <Grid display="flex" alignItems="center" p={2} sx={{ border: '1px solid #999', borderRadius: 2, cursor: 'pointer' }}>
      <Grid display="flex" alignItems="center">
        <Avatar {...stringAvatar("Felipe Brito")} />
      </Grid>
      <Grid pl={1} display="flex" justifyContent="center" flexDirection="column">
        <Typography>Felipe Brito</Typography>
        <Typography>Product Manager</Typography>
      </Grid>
    </Grid>
  )
}

export default UserSession
