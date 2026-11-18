INFR 3120-Fall26-Project

Mikayla Rojas
Dean Pilieci

Citation #1: 
Stack Overflow code for using .env to secure MONGODB connection string and keep password private by storing .env in .gitignore
https://stackoverflow.com/questions/62759524/using-dot-env-for-my-mongodb-username-password

EXAMPLE CODE FROM STACK OVERFLOW: 
In .env:
MONGODB_URI=mongodb+srv://<username>:<password>@jons-thoughts.xpo8p.mongodb.net/jons-thoughts?retryWrites=true&w=majority
In app.js: 
mongoose.connect(process.env.MONGODB_URI)

Citation #2:
Stack Overflow code for converting date input to a formatted string (implemented on edit.ejs and list.ejs): 
https://stackoverflow.com/questions/28729634/set-values-in-input-type-date-and-time-in-javascript/58252034?utm_source=chatgpt.com

EXAMPLE CODE FROM STACK OVERFLOW: 
let dateInputFormatted = tmp.toISOString().split('T')[0];

Citation #3: 
Bootstrap code used for styling tables, footer, and form inputs (note that much of this code is adapted from the lectures)
https://getbootstrap.com/

Citation #4: 
Fontawesome free icons used from https://www.npmjs.com/package/@fortawesome/fontawesome-free

