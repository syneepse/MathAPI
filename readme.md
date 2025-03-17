# MathAPI Documentation

### Design pattern used : Repository Pattern
**Avantages**

1. **Encapsulation of Data Access Logic**  
   - The `PrismaCrud` class encapsulates all database interactions, keeping the data access logic separate from business logic.
  
2. **Abstraction over Prisma ORM**  
   - Instead of directly using `PrismaClient` everywhere in the application, this class provides an abstraction, making it easier to maintain and swap out the ORM if needed.
  
3. **Single Responsibility Principle (SRP)**  
   - This class is solely responsible for interacting with the `logs` table. If you have multiple entities, you could create separate repository classes for them.

4. **Decoupling Business Logic from Data Access**  
   - The service or controller that uses this class doesn’t need to worry about how data is fetched, updated, or deleted.

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
        "value": string
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
        "value": string
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
        "value": string
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
        "value": string
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
        "value": string
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
        "value": string
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


