import express, { Request, Response } from "express";
import { PrismaCrud } from "./PrismaCrud";
import { error } from "console";

const app = express();
const port = 3000;

const prismaCrud = new PrismaCrud();

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
        res.status(400).send("Invalid Parameters, ensure that id, path and query are provided");
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
