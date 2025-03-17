"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const PrismaCrud_1 = require("./PrismaCrud");
const app = (0, express_1.default)();
const port = 3000;
const prismaCrud = new PrismaCrud_1.PrismaCrud();
function fibonacci(n) {
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
function fact(n) {
    if (n <= 1) {
        return 1;
    }
    else if (n > 20) {
        throw new Error("Number too large");
    }
    let ans = 1;
    for (let i = 2; i <= n; i++) {
        ans *= i;
    }
    return ans;
}
app.get("/", (req, res) => {
    res.send("Hello, world!");
});
app.get("/logs", (req, res) => {
    prismaCrud.getLogs().then((logs) => {
        res.json(logs);
    }, (error) => {
        console.log(error);
        res.status(400).send("Error");
    });
});
app.get("/logs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        prismaCrud.getLogById(id).then((log) => {
            res.json(log);
        }, (error) => {
            console.log(error);
            res.status(400).send("Log not found");
        });
    }
    else {
        res.status(400).send("Invalid id");
    }
});
app.delete("/logs/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (id) {
        prismaCrud.deleteLogById(id).then(() => {
            res.send("Log deleted");
        }, (error) => {
            console.log(error);
            res.status(400).send("Log not found");
        });
    }
    else {
        res.status(400).send("Invalid id");
    }
});
app.put("/logs/:id/:path/:query", (req, res) => {
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
    }
    else {
        res.status(400).send("Invalid Parameters, ensure that id, path and query are provided");
    }
});
app.get("/fibonaci/:n", (req, res) => {
    const n = parseInt(req.params.n);
    let ans = fibonacci(n);
    prismaCrud.createLogs("/fibonaci", `fibonacci(${n.toString()})`).then(() => {
        console.log("Log created");
    }, (error) => {
        console.log(error);
    });
    res.send(ans.toString());
});
app.get("/sum/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    let ans = a + b;
    prismaCrud.createLogs("/sum", `sum(${a.toString()}, ${b.toString()})`).then(() => {
        console.log("Log created");
    }, (error) => {
        console.log(error);
    });
    res.send(ans.toString());
});
app.get("/product/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    let ans = a * b;
    prismaCrud.createLogs("/product", `product(${a.toString()}, ${b.toString()})`).then(() => {
        console.log("Log created");
    }, (error) => {
        console.log(error);
    });
    res.send(ans.toString());
});
app.get("/factorial/:n", (req, res) => {
    const n = parseInt(req.params.n);
    let ans = fact(n);
    prismaCrud.createLogs("/factorial", `factorial(${n.toString()})`).then(() => {
        console.log("Log created");
    }, (error) => {
        console.log(error);
    });
    res.send(ans.toString());
});
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
exports.server = app;
