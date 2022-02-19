import {
  Paper,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@mui/material"
import contactConfig from "../../../storeConfig/contactConfig"

const Form = () => {
  const formElement = document.getElementById("contact_form")

  const handleSubmit = (event) => {
    event.preventDefault()
    const targets = [...event.target]
    let values = []
    targets.forEach((target) => {
      const value = target.value

      if (value && value !== "x" && value !== "") {
        values.push(value)
      }
    })
    console.log(
      "Here you can integrate API Call to send form values to API.",
      " Form values:",
      values
    )
    formElement.reset()
  }

  return (
    <Paper sx={{ p: 2, width: "50%" }}>
      <form
        id='contact_form'
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant='h4' color='secondary.main'>
          {contactConfig.title}
        </Typography>
        <FormControl>
          {contactConfig.formFields.map((field) => (
            <TextField
              variant='outlined'
              fullWidth
              key={field.label}
              label={field.label}
              placeholder={field.label}
              sx={{ mt: 3 }}
              multiline={field?.multiline}
              minRows={field?.multiline && field.minRows}
              type={field.type}
              InputProps={{ endAdornment: null }}
            />
          ))}
        </FormControl>
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          sx={{ color: "white", mt: 3, fontFamily: "Segoe Print" }}
        >
          {contactConfig.sendButtonLabel}
        </Button>
      </form>
    </Paper>
  )
}

export default Form
