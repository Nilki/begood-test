package com.example.vehicle.services;

import com.example.vehicle.model.Vehicle;
import com.example.vehicle.repositories.VehicleRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class VehicleServiceImpl implements VehicleService {
    VehicleRepository vehicleRepository;

    public VehicleServiceImpl(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }


    @Override
    public List<Vehicle> getVehicles() {
        List<Vehicle> vehicles = new ArrayList<>();
        vehicleRepository.findAll().forEach(vehicles::add);
        return vehicles;
    }

    @Override
    public Vehicle getVehicleById(String plateNumber) {
        return vehicleRepository.findById(plateNumber).get();
    }

    @Override
    public Vehicle insert(Vehicle vehicle) {
        return vehicleRepository.save(vehicle);
    }

    @Override
    public void updateVehicle(String plateNumber, Vehicle vehicle) {
        Vehicle vehicleFromDb = vehicleRepository.findById(plateNumber).get();
        System.out.println(vehicleFromDb.toString());
        vehicleFromDb.setName(vehicle.getName());
        vehicleFromDb.setBrand(vehicle.getBrand());
        vehicleFromDb.setType(vehicle.getType());
        vehicleRepository.save(vehicleFromDb);
    }

    @Override
    public void deleteVehicle(String vehiclePlateNumber) {
        vehicleRepository.deleteById(vehiclePlateNumber);
    }
}
