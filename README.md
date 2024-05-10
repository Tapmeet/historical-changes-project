# historical-changes-project

Here's the installation and migration instructions:

markdown
# NestJS Historical Changes System

## Overview

This project is a historical changes system implemented using NestJS for the backend. It tracks changes to fields in a collection and stores them in a database. Additionally, it showcases the use of Sequelize as the ORM for PostgreSQL.

## Installation

To install the project dependencies, use the following command:

bash
pnpm install


## Database Migration

Before running the application, make sure to run the database migration to create the necessary tables. Use the following command:

bash
npx sequelize-cli db:migrate


This command will execute any pending migrations and create the required tables in the PostgreSQL database.

## Running the Application

Once the dependencies are installed and migrations are applied, you can run the application using the following command:

bash
pnpm start:dev


This command will start the NestJS application in development mode.