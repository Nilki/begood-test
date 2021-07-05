package com.example.vehicle.controllers;


import com.example.vehicle.model.Vehicle;
import com.example.vehicle.services.VehicleService;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/v1/vehicle")
@CrossOrigin(origins = "http://localhost:3000")
public class VehicleController {
    VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }


    @GetMapping
    public ResponseEntity<List<Vehicle>> getAllVehicles() {
        List<Vehicle> vehicles = vehicleService.getVehicles();
        return new ResponseEntity<>(vehicles, HttpStatus.OK);
    }


    //The function receives a GET request, processes it, and gives back a list of Todo as a response.
    @GetMapping({"/{vehiclePlateNumber}"})
    public ResponseEntity<Vehicle> getVehicle(@PathVariable String vehiclePlateNumber) {
        return new ResponseEntity<>(vehicleService.getVehicleById(vehiclePlateNumber), HttpStatus.OK);
    }


    //The function receives a POST request, processes it, creates a new Todo and saves it to the database, and returns a resource link to the created todo.    @PostMapping
    @PostMapping
    public ResponseEntity<Vehicle> saveVehicle(@RequestBody Vehicle vehicle) {
        Vehicle vehicle1 = vehicleService.insert(vehicle);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("vehicle", "/api/v1/vehicle/" + vehicle1.getPlateNumber().toString());
        return new ResponseEntity<>(vehicle1, httpHeaders, HttpStatus.CREATED);
    }


    //The function receives a PUT request, updates the Todo with the specified Id and returns the updated Todo
    @PutMapping({"/{vehiclePlateNumber}"})
    public ResponseEntity<Vehicle> updateVehicle(@PathVariable("vehiclePlateNumber") String vehiclePlateNumber, @RequestBody Vehicle vehicle) {
        vehicleService.updateVehicle(vehiclePlateNumber, vehicle);
        return new ResponseEntity<>(vehicleService.getVehicleById(vehiclePlateNumber), HttpStatus.OK);
    }


    //The function receives a DELETE request, deletes the Todo with the specified Id.
    @DeleteMapping({"/{vehiclePlateNumber}"})
    public ResponseEntity<Vehicle> deleteVehicle(@PathVariable("vehiclePlateNumber") String vehiclePlateNumber) {
        vehicleService.deleteVehicle(vehiclePlateNumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
