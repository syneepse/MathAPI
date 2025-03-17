import express, { Request, Response } from "express";
import { PrismaCrud } from "./PrismaCrud";
import { error } from "console";

const app = express();
const port = 3000;

const prismaCrud = new PrismaCrud();

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    let curr = 1;
    let prev = 0;
    for (let i = 2; i <= n; i++) {
        let temp = curr;
        curr = curr + prev;
        prev = temp;
    }
    return curr;
}

function fact(n: number): number {
    if (n <= 1) {
        return 1;
    }
    else if(n > 20){
        throw new Error("Number too large");
    }
    let ans:number = 1;
    for (let i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}

app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
});

app.get("/logs", (req: Request, res: Response) => {
    prismaCrud.getLogs().then((logs) => {
        res.json(logs);
    }, (error) => {
        console.log(error);
        res.status(400).send("Error");
    });
});

app.get("/logs/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (id) {
        prismaCrud.getLogById(id).then((log) => {
            res.json(log);
        }, (error) => {
            console.log(error);
            res.status(400).send("Log not found");
        });
    } else {
        res.status(400).send("Invalid id");
    }
});

app.delete("/logs/:id", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (id) {
        prismaCrud.deleteLogById(id).then(() => {
            res.send("Log deleted");
        }, (error) => {
            console.log(error);
            res.status(400).send("Log not found");
        });
    } else {
        res.status(400).send("Invalid id");
    }
});

app.put("/logs/:id/:path/:query", (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const path = req.params.path;
    const query = req.params.query;
    if (id && path && query) {
        prismaCrud.updateLogById(id, path, query).then(() => {
            res.send("Log updated");
        }, (error) => {
            console.log(error);
            res.status(400).send("Log not found");
        });
    } else {
        res.status(400).send(
            "Invalid Parameters, ensure that id, path and query are provided",
        );
    }
});

app.get("/fibonaci/:n", (req: Request, res: Response) => {
    const n = parseInt(req.params.n);
    let ans: number = fibonacci(n);
    prismaCrud.createLogs("/fibonaci", `fibonacci(${n.toString()})`).then(
        () => {
            console.log("Log created");
        },
        (error) => {
            console.log(error);
        },
    );
    res.send(ans.toString());
});

app.get("/sum/:a/:b", (req: Request, res: Response) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    let ans: number = a + b;
    prismaCrud.createLogs("/sum", `sum(${a.toString()}, ${b.toString()})`).then(
        () => {
            console.log("Log created");
        },
        (error) => {
            console.log(error);
        },
    );
    res.send(ans.toString());
});

app.get("/product/:a/:b", (req: Request, res: Response) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    let ans: number = a * b;
    prismaCrud.createLogs(
        "/product",
        `product(${a.toString()}, ${b.toString()})`,
    ).then(() => {
        console.log("Log created");
    }, (error) => {
        console.log(error);
    });
    res.send(ans.toString());
});

app.get("/factorial/:n", (req: Request, res: Response) => {
    const n = parseInt(req.params.n);
    let ans: number = fact(n);
    prismaCrud.createLogs("/factorial", `factorial(${n.toString()})`).then(
        () => {
            console.log("Log created");
        },
        (error) => {
            console.log(error);
        },
    );
    res.send(ans.toString());
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
