import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    NgClass

  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  personalInformation = {
    title: 'Zu meiner Person',
    content: [
      'Mein Name ist Lucas Menke, mit dieser Webseite möchte ich Ihnen einen genaueren Einblick zu meiner Person ' +
      'und meinen Tätigkeitsfeldern ermöglichen.',
      'Zur Verfügung stehen Übersichten meiner Projekte, fachlichen Qualifikationen, veröffentlichte Fachartikel und ' +
      'vieles mehr.',
      'Aktuell lebe ich in Norddeutschland in Niedersachsen.',
      'In meine Freizeit treibe ich Sport wie z.B. Bouldern oder Stand up Paddling, ich lese diverse Fachbücher und ' +
      'genieße es, auch mal in ruhe in einem Cafe oder in einer Sauna auszuspannen.'
    ],
    imageUrl: '/assets/infor/overview_person.jpg',
    imageAlt: '',
    align_text: 'left',
    align_image: 'right'
  };

  projects = {
    title: 'Meine Projekte',
    content: ['Im Bereich der privaten Projekte bewege ich mich in verschiedenen Bereichen der Informatik. Die meisten' +
      ' der Projekte dienen lediglich dem privaten Gebrauch, jedoch stelle ich diverse Projekte in einem ' +
      'öffenlichen Repository auf GitHub zur Verfügung, insofern ich der Meinung bin, dass diese für andere Personen' +
      ' von Interesse sein könnten.',
      'Beispielhafte Bereiche dieser Projekte sind:',
      '- Skripte zur Automatisierung lokaler Prozesse (verschieben / einlesen in Datenbanken) von z.b. .xslt, .pdf, .csv',
      '- Entwicklung von Computer Spielen wie Text-Advanture-Games oder Handy-Apps',
      '- Entwicklung von Webseiten und Webanwendungen',
      '- Zusammenfassung diverser Software-Pattern mit Code-Beispielen',
      '- Entwicklungen in anlehnung an KI-Technologien / Machine Learning',
      '- Smart-Home-Entwicklungen',
    ],
    imageUrl: '/assets/infor/overview_taetigkeiten.jpg',
    imageAlt: '',
    align_text: 'right',
    align_image: 'left'
  };

  work = {
    title: 'Aktuelle Tätigkeiten',
    content: ['Der aktuelle Schwerpunkt meiner beruflichen Tätigkeit liegt in der technischen Beratung / Konfiguration / ' +
    'Weiterentwicklung diverser Softwareprodukte der Infor Global Solutions Inc.. Diese beratende Tätigkeit übe ich ' +
    'als angestellter der ACTOP GmbH (einem der Infor Alianzpartner) aus. Zu erwähnende Bereche sind hierbei:',
    '- Infor OS: Workflows (Standard / Custom), Monitore, Dokumentenflüsse, Homepages, APIs, DataFabric, Arbeitsbereiche, ' +
    'Dokumentenmanagement, Kontext-Apps, Infor Mobile Apps, Dokumentenmapping und Scripting',
    '- Infor LN: Entwicklung in LN Studio und den Infor LN Erweiterungen, DOM (Document output Management), Table-Sharing',
    ],
    imageUrl: '/assets/infor/overview_systems.jpg',
    imageAlt: '',
    align_text: 'left',
    align_image: 'right'
  }


  sections = [this.personalInformation, this.projects, this.work];

  getContentArray(content: string | string[]): string[] {
    if (Array.isArray(content)) {
      return content;
    }
    return [content];
  }
}
