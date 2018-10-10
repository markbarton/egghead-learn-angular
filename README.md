# Enhanced Transcript Helper

1. Clone the repository to your working directory
2. Run `yarn` to install dependencies
3. Set up Auth
4. Create a file `src/.env` with these contents:
```
AWS_BUCKET_NAME=name_here_without_quotes
AWS_KEY_ID=key_here_without_quotes
AWS_SECRET_KEY=key_here_without_quotes
```
5. Run `yarn start`
6. Paste the course slug you are going to enhance, and hit enter
7. Check the `output` directory
8. ???
9. Profit!

AWS credentials can be created in [the management console](https://console.aws.amazon.com/console/home) for development.

## Set up Auth
1. Request a user token from an egghead team lead
    * They will generate an access token from a user on the *production* database
    * `User.find_by_email('example@user.com').access_tokens.create!`
2. Copy the .env-template file
3. Create a .env file
4. Paste what you copied to the contents of the file
5. Replace `YOUR-TOKEN-HERE` with requested token
