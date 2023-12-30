# Self host the project

### You need to have php, composer and node installed to run the project

1. Clone the repo
2. Install dependancies <code>composer install <br/> npm install</code>
3. Modify the .env file according to .example.env to allow access to the database
4. Migrate and seed the database with <code>php artisan migrate</code> and <code>php artisan db:seed --class=GreenSpaceSeeder</code>
5. Start the development server with <code>php artisan serve</code> and <code>npm run dev</code>

### Live demo available at: [64.227.104.197](http://64.227.104.197/)

#### Made by Danail and Flowey
