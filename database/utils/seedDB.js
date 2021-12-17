const { Campus, Student } = require('../models');
const Sequelize = require('sequelize');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "This is a school in NYC.",
		address: "695 Park Ave, New York, NY 10065, USA"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address:"Cambridge, MA, USA"
	});

	await Student.create({
		firstname: "Jan",
		lastname: "Chill",
		email: "jan@chill.com"
});

	await Student.create({
		firstname: "Kid",
		lastname: "Miller",
		email: "kid@miller.com"
	});

	await Student.create({
		firstname: "Kary",
		lastname: "Anders",
		email: "kary@mail.com"
});

	const dummy_student = await Student.create({
		firstname: "Joe",
		lastname: "Shmo",
		email: "joe@mail.com"
});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;



