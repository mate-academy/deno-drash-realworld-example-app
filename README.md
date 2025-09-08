# ![Drash Example App](logo.png)

## How to Run

1. x86 chips

    ```bash
      docker compose build && docker compose up
    ```

1. Apple silicon M-chips

    ```bash
      docker compose -f docker-compose.m1.yml build && docker compose -f docker-compose.m1.yml up
    ```

Navigate to [http://localhost:1667](http://localhost:1667)

## Run with `make` commands

Also, you can run the project with `Makefile` ([Unbuntu](https://www.unixmen.com/install-ubuntu-make-on-ubuntu-15-04/)), ([Windows](https://stackoverflow.com/questions/32127524/how-to-install-and-use-make-in-windows), for Mac available by default) commands:

ARM processors: `make build-m1`, `make m1`
All other: `make build`, `make up`

## Frontend login

There are a total of 100 users, with each user having the same password. Say we
want to login as user 32:

```text
Username: user32
Password: Userpass1
Email: user32@hotmail.com
```
