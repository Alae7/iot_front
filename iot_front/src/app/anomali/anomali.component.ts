import {Component, OnInit} from '@angular/core';
import {faCircleDot, faWeightScale} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-anomali',
  templateUrl: './anomali.component.html',
  styleUrl: './anomali.component.css'
})
export class AnomaliComponent implements OnInit {

  dot = faCircleDot

  transactions = [
    {
      id: 1,
      ENSOR_ID: "ENSOR12345",
      timestamp: "2025-01-19",
      heure: "14:30",  // Ajout de l'heure
      heart_rate: 150,
      anomaly_type: "Tachycardie",
      commentaire: "Rythme cardiaque élevé détecté."
    },
    {
      id: 2,
      ENSOR_ID: "ENSOR67890",
      timestamp: "2025-02-14",
      heure: "09:15",  // Ajout de l'heure
      heart_rate: 40,
      anomaly_type: "Bradycardie",
      commentaire: "Rythme cardiaque bas détecté."
    },
    {
      id: 3,
      ENSOR_ID: "ENSOR11223",
      timestamp: "2025-03-22",
      heure: "10:00",  // Ajout de l'heure
      heart_rate: 95,
      anomaly_type: "Arythmie",
      commentaire: "Rythme cardiaque irrégulier observé."
    },
    {
      id: 4,
      ENSOR_ID: "ENSOR33445",
      timestamp: "2025-04-10",
      heure: "16:45",  // Ajout de l'heure
      heart_rate: 72,
      anomaly_type: "Normal suspect",
      commentaire: "Rythme cardiaque normal mais fluctuations suspectes."
    },
    {
      id: 5,
      ENSOR_ID: "ENSOR55667",
      timestamp: "2025-05-05",
      heure: "08:30",  // Ajout de l'heure
      heart_rate: 88,
      anomaly_type: "Inconnue",
      commentaire: "Anomalie détectée, cause indéterminée."
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

  protected readonly wieght = faWeightScale;
}
