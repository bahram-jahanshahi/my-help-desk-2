package ir.afarinesh.myhelpdesk2.controller;

import ir.afarinesh.myhelpdesk2.entities.Incident;
import ir.afarinesh.myhelpdesk2.services.IncidentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/incident")
public class IncidentController {

    final IncidentService incidentService;

    public IncidentController(IncidentService incidentService) {
        this.incidentService = incidentService;
    }

    @GetMapping("/all")
    List<Incident> findAll() {
        return incidentService.findAll();
    }

    @PostMapping("/save")
    void save(@RequestBody Incident incident) {
        incidentService.save(incident);
    }
}
