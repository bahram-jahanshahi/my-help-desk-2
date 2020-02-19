package ir.afarinesh.myhelpdesk2.services;

import ir.afarinesh.myhelpdesk2.entities.Incident;
import ir.afarinesh.myhelpdesk2.repositories.IncidentRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class IncidentService {

    final IncidentRepository incidentRepository;

    public IncidentService(IncidentRepository incidentRepository) {
        this.incidentRepository = incidentRepository;
    }

    public List<Incident> findAll() {
        return incidentRepository.findAll();
    }

    public void save(Incident incident) {
        incident.setCreateDate(new Date());
        incidentRepository.save(incident);
    }
}
