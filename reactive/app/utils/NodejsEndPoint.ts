const express = require('express');
import fs from 'fs';

const app = express();

app.post('../json/collections.json', (req: any, res: any) => {
    req.on('data', (data: { toString: () => string; }) => {
        try {
            const jsonData = JSON.parse(data.toString());
            fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), (err: any) => {
                if (err) {
                    console.error(err);
                    res.status(500).send('Error writing JSON file!');
                    return;
                }
                res.status(200).send('JSON data written successfully!');
            });
        } catch (error) {
            console.error(error);
            res.status(400).send('Invalid JSON data!');
        }
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
