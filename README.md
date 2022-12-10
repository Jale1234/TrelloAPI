# Trello API smoke test automation - Postman

This repository contains automated Trello API smoke test written in Postman.

## Run test instructions

### 1. Install newman
  ```sh
   npm install -g newman
   ```

### 2. Run newman
```sh
   newman run <location of postman collection file> -e <location of environment file>
   ```
