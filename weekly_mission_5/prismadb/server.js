const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});
app.get('/modelo', async (req, res) => {
    const allModelo =  await prisma.modelo.findMany({});
    res.json(allModelo);
});
app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});
app.get('/modelo/:id', async (req, res) => {
    const id = req.params.id;
    const modelo = await prisma.modelo.findUnique({where: {id: parseInt(id)}});
    res.json(modelo);
});
app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.post('/modelo', async (req, res) => {
    const modelo = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander
     };
    const message = 'Modelo creado.';
    await prisma.modelo.create({data: modelo});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.put('/modelo/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.modelo.update({
		where: {
			id: id
		},
		data: {
			missionCommander: req.body.missionCommander
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.delete('/modelo/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.modelo.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});