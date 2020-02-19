package ir.afarinesh.myhelpdesk2.repositories;

import ir.afarinesh.myhelpdesk2.entities.Incident;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface IncidentRepository extends CrudRepository<Incident, Long> {
    List<Incident> findAll();
}
