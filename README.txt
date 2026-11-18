INFR 3120-Fall26-Project

Mikayla Rojas
Dean Pilieci

Citations: 
Stack Overflow code for using .env to secure MONGODB connection string and keep private
https://stackoverflow.com/questions/62759524/using-dot-env-for-my-mongodb-username-password

In .env:
MONGODB_URI=mongodb+srv://<username>:<password>@jons-thoughts.xpo8p.mongodb.net/jons-thoughts?retryWrites=true&w=majority
In app.js: 
mongoose.connect(process.env.MONGODB_URI)

Stack Overflow code for converting date input to a formatted string: 
https://stackoverflow.com/questions/28729634/set-values-in-input-type-date-and-time-in-javascript/58252034?utm_source=chatgpt.com

let dateInputFormatted = tmp.toISOString().split('T')[0];