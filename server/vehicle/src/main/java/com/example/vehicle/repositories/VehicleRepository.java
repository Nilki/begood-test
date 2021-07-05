package com.example.vehicle.repositories;

import com.example.vehicle.model.Vehicle;
import org.springframework.data.repository.CrudRepository;

public interface VehicleRepository  extends CrudRepository<Vehicle, String> {
}
