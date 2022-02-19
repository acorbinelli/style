const contactConfig = {
  mapCode: (
    <iframe
      src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d552.2587048866657!2d21.228286589667192!3d45.766992921014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sro!2sro!4v1645264375292!5m2!1sro!2sro'
      width='100%'
      height='242'
      style={{ border: 0 }}
      allowFullScreen=''
      loading='lazy'
      title='thystyle'
    />
  ),
  telephoneField: "Telefon: 0730 234 567",
  emailField: "Adresa de email: contact@thystyle.ro",
  addressField: "Adresa: Piața Consiliul Europei 2, Timișoara 300627",
  workHoursField: "Program: 09:00 - 21:00 Luni - Vineri",
  title: "Contacteaza-ne!",
  formFields: [
    {
      label: "Nume",
      type: "text",
    },
    {
      label: "Prenume",
      type: "text",
    },
    {
      label: "Adresa de email",
      type: "email",
    },
    {
      label: "Telefon",
      type: "text",
    },
    {
      label: "Mesajul tau",
      type: "text",
      multiline: true,
      minRows: 5,
    },
  ],
  sendButtonLabel: "Trimite",
}

export default contactConfig
