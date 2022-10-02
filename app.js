"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    res.json({ name: 'John Doe' });
});
app.get('/api', (req, res) => {
    res.json({
        status: 'success',
    });
});
app.listen(port);
