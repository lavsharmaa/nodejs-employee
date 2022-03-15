var employeeRouter = require('express').Router();
var employeeData = require('../data/employee-data');
var _ = require('lodash');

var employee = employeeData;
var id = 2;
var name = 'Lav Sharma';
var role = 'Associate Software Engineer';
var age = '22';
var gender = 'Male';

var updateId = function (req, res, next) {
    console.log(req.body);
    if (!req.body.id) {
        id++;
        req.body.id = id + '';
        req.body.name = name + '';
        req.body.role = role + '';
        req.body.age = age + '';
        req.body.gender = gender + '';
    }
    next();
};

employeeRouter.param('id', function (req, res, next, id) {
    var employees = _.find(employee, {id: id});
    if (employees) {
        req.employees = employees;
        next();
    } else {
        res.json({"error": "Id not found"});
    }
});

employeeRouter.get('/', function (req, res) {
    res.json(employee);
});

employeeRouter.get('/:id', function (req, res) {
    var employees = req.employees;
    res.json(employees || {});
});

employeeRouter.post('/', updateId, function (req, res) {
    var employees = req.body;

    employee.push(employees);
    res.status(201).json(employees || {});
});

employeeRouter.put('/:id', function (req, res) {
    var update = req.body;

    if (update.id) {
        delete update.id;
    }

    var employees = _.findIndex(employee, {id: req.params.id});

    if (!employee[employees]) {
        res.send();
    } else {
        var updatedemployees = _.assign(employee[employees], update);
        res.json(updatedemployees);
    }
});

employeeRouter.delete('/:id', function (req, res) {
    var employees = _.findIndex(employee, {id: req.params.id});
    employee.splice(employees, 1);

    res.json(req.employees);
});

// Error handler
employeeRouter.use(function (err, req, res, next) {

    if (err) {
        res.status(500).send(err);
    }

});

module.exports = employeeRouter;