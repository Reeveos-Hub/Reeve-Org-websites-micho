const fs = require('fs')
const c = fs.readFileSync('C:/Users/HP Elitebook/orchids-projects/black-porcupine/micho-app/src/pages/Home.jsx', 'utf8')
const lines = c.split('\n')
lines.forEach((l, i) => {
  if (/12pm|4pm|11pm|9pm|Monday|opening.hour/i.test(l)) console.log(i + 1, l.trim())
})
