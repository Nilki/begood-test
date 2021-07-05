package com.example.vehicle.services;

import com.example.vehicle.model.Vehicle;

import java.util.List;

public interface VehicleService {
    List<Vehicle> getVehicles();

    Vehicle getVehicleById(String plateNumber);

    Vehicle insert(Vehicle vehicle);

    void updateVehicle(String plateNumber, Vehicle vehicle);

    void deleteVehicle(String vehiclePlateNumber);
}
