# Laravel E-Commerce Admin Panel Dashboard

This project is a full-featured admin panel for managing an eCommerce store. The admin can sort products, add new products, customize cart settings, manage checkout, and handle all other aspects of the store. The panel also includes functionalities for managing emails, calendars, order tracking, and viewing detailed order lists.

## Features

- **Product Management**: Add, edit, sort, and delete products.
- **Cart & Checkout Settings**: Customize cart behavior and checkout processes.
- **Order Tracking**: Track the status of orders and view order lists.
- **Email Management**: Handle email-related tasks for store communications.
- **Calendar**: Manage store-related events using an integrated calendar system.
- **User & Role Management**: Handle admin and other user roles for secure access control.
- **Responsive Dashboard**: Intuitive admin dashboard with a user-friendly interface.

## Installation

To set up and run the project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd your-project-directory
    ```

3. Install the required dependencies:

    ```bash
    npm install
    composer install
    ```

4. Compile the assets:

    ```bash
    npm run prod
    npm run watch
    ```

5. Configure the database settings in the `.env` file. Update the following fields:

    ```
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_password
    ```

6. Run the migrations to set up the database:

    ```bash
    php artisan migrate
    ```

7. Start the local development server:

    ```bash
    php artisan serve
    ```

8. Access the project at [http://localhost:8000](http://localhost:8000).

## Usage

After completing the installation, you can log in as an admin to manage your store. The admin panel provides all necessary tools for handling products, orders, cart settings, and more.

## License

This project is open-source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues, feel free to open an issue or reach out to the project maintainers.
