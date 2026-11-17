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