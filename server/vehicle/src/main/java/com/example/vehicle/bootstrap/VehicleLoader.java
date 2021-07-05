package com.example.vehicle.bootstrap;

import com.example.vehicle.model.Vehicle;
import com.example.vehicle.repositories.VehicleRepository;
import org.springframework.boot.CommandLineRunner;

public class VehicleLoader implements CommandLineRunner {
    public final VehicleRepository vehicleRepository;

    public VehicleLoader(VehicleRepository vehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        loadVehicles();
    }

    private void loadVehicles() {
        if (vehicleRepository.count() == 0) {
            vehicleRepository.save(
                    Vehicle.builder()
                            .plateNumber("50-9999")
                            .name("nilki")
                            .brand("volvo")
                            .type("old")
                            .build()
            );
            vehicleRepository.save(
                    Vehicle.builder()
                            .plateNumber("250-9999")
                            .name("ggg")
                            .brand("gg")
                            .type("gg")
                            .build()
            );
            System.out.println("Sample Vehicle Loaded");
        }
    }
}
