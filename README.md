# Ontarget

Timeboxing app that allows you to create and update Github issues for your projects. It also adds the ability to create timers that start when a card is being worked on.

* Ruby version - 2.3.1

* Configuration
bundle install
[Register a new Github Oauth app](https://github.com/settings/applications/new)
bundle exec figaro install
Add your github_id and github_secret to application.yml

* Database creation
bundle exec rake db:create

* Database initialization
bundle exec rake db:migrate

* How to run the test suite
rake

* Deployment instructions for Heroku
heroku create
figaro heroku:set -e production
git push heroku master
