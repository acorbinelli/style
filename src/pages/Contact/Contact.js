import { Box } from "@mui/material"
import ContactInfo from "./components/ContactInfo"
import Form from "./components/Form"

const Contact = () => {
  return (
    <Box display='flex' alignItems='center' justifyContent='space-around'>
      <Form />
      <ContactInfo />
    </Box>
  )
}

export default Contact
