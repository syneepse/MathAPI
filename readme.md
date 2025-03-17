# MathAPI Documentation

## API Endpoints

### 1. Addition Endpoint
- **Path:** `/sum/:a/:b`
- **Method:** `GET`
- **Parameters:**
    - `a` (number): The first number to add.
    - `b` (number): The second number to add.
- **Response Format:**
    ```json
    {
        "result": number
    }
    ```

### 2. Subtraction Endpoint
- **Path:** `/subtract`
- **Method:** `GET`
- **Parameters:**
    - `a` (number): The number to subtract from.
    - `b` (number): The number to subtract.
- **Response Format:**
    ```json
    {
        "result": number
    }
    ```

### 3. Multiplication Endpoint
- **Path:** `/product/:a/:b`
- **Method:** `GET`
- **Parameters:**
    - `a` (number): The first number to multiply.
    - `b` (number): The second number to multiply.
- **Response Format:**
    ```json
    {
        "result": number
    }
    ```

### 4. Division Endpoint
- **Path:** `/divide`
- **Method:** `GET`
- **Parameters:**
    - `a` (number): The dividend.
    - `b` (number): The divisor.
- **Response Format:**
    ```json
    {
        "result": number
    }
    ```

### 5. Fibonacci Endpoint
- **Path:** `/fibonaci/:n`
- **Method:** `GET`
- **Parameters:**
    - `n` (number): The index in the Fibonacci sequence.
- **Response Format:**
    ```json
    {
        "result": number
    }
    ```

### 6. Factorial Endpoint
- **Path:** `/factorial/:n`
- **Method:** `GET`
- **Parameters:**
    - `n` (number): The number to compute the factorial of (must be ≤ 20).
- **Response Format:**
    ```json
    {
        "result": number
    }
    ```

### 7. Logs Retrieval
- **Path:** `/logs`
- **Method:** `GET`
- **Response Format:**
    ```json
    [
        {
            "id": number,
            "path": string,
            "query": string,
            "timestamp": string
        }
    ]
    ```

### 8. Retrieve Log by ID
- **Path:** `/logs/:id`
- **Method:** `GET`
- **Parameters:**
    - `id` (number): The log ID to retrieve.
- **Response Format:**
    ```json
    {
        "id": number,
        "path": string,
        "query": string,
        "timestamp": string
    }
    ```

### 9. Delete Log by ID
- **Path:** `/logs/:id`
- **Method:** `DELETE`
- **Parameters:**
    - `id` (number): The log ID to delete.
- **Response Format:**
    ```json
    {
        "message": "Log deleted"
    }
    ```

### 10. Update Log by ID
- **Path:** `/logs/:id/:path/:query`
- **Method:** `PUT`
- **Parameters:**
    - `id` (number): The log ID to update.
    - `path` (string): The new path value.
    - `query` (string): The new query value.
- **Response Format:**
    ```json
    {
        "message": "Log updated"
    }
    ```

## Project Setup

1. **Clone the repository:**
     ```sh
     git clone https://github.com/yourusername/MathAPI.git
     cd MathAPI
     ```

2. **Install dependencies:**
     ```sh
     npm install
     ```

3. **Start the server:**
     ```sh
     npm start
     ```

4. **Access the API:**
     Open your browser or API client and navigate to `http://localhost:3000`.

5. **Run the tests:**
    ```sh
     npm test
     ```

