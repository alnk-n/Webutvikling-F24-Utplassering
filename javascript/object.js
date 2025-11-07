const mockCases = {
  "cases": [
    {
      "global": {
        "case_id": 401,
        "display_id": "12",
        "instance_id": 6,
        "case_created": "06.11.2025 12:52",
        "case_created_by": "Surname, Name",
        "status": "Ny",
        "criticality": "Lav"
      },
      "registration": {
        "subject": "Varsler vises ikke etter innlogging",
        "text_beskrivelse": "Etter innlogging vises ikke nye varsler i varslingspanelet før siden oppdateres manuelt",
        "text_prrt_operativsystem_og_versjon": "Ubuntu 24.04 LTS",
        "text_prrt_nettleser_og_versjon": "Firefox 132.0",
        "textarea_hvordan_gjenskape_problemet": "<ul>\n<li>\n<p>Logg inn med en bruker som har uleste varsler</p>\n</li>\n<li>\n<p>Sjekk varslingsikonet øverst til høyre</p>\n</li>\n<li>\n<p>Merk at det viser 0 varsler</p>\n</li>\n<li>\n<p>Oppdater siden, og varsler vises</p>\n</li>\n</ul>",
        "text_forventet_funksjonalitet": "Varsler skal lastes automatisk uten at siden må oppdateres",
        "email": "notifikasjon@gmail.com"
      },
      "processing": {
        "subject": "Varsler vises ikke etter innlogging"
      },
      "link": "/cases/401"
    },
    {
      "global": {
        "case_id": 400,
        "display_id": "11",
        "instance_id": 6,
        "case_created": "06.11.2025 12:51",
        "case_created_by": "Surname, Name",
        "status": "Ny",
        "criticality": "Medium",
        "deadline_date": "08.11.2025 23:59"
      },
      "registration": {
        "subject": "Opplasting av filer stopper på 99 %",
        "text_beskrivelse": "Når en bruker prøver å laste opp en fil større enn 20 MB, stopper opplastningen på 99%.",
        "text_prrt_operativsystem_og_versjon": "macOS Sonoma 14.3",
        "text_prrt_nettleser_og_versjon": "Safari 18.0",
        "textarea_hvordan_gjenskape_problemet": "<ul>\n<li>\n<p>Gå til “Dokumentopplasting”</p>\n</li>\n<li>\n<p>Velg en PDF-fil på ca. 25 MB</p>\n</li>\n<li>\n<p>Klikk “Last opp”</p>\n</li>\n<li>\n<p>Prosessen stopper på 99 %</p>\n</li>\n</ul>",
        "text_forventet_funksjonalitet": "Filen skal lastes opp fullstendig og gi bekreftelse når den er ferdig",
        "email": "test-bruker@gmail.com"
      },
      "processing": {
        "subject": "Opplasting av filer stopper på 99 %"
      },
      "link": "/cases/400"
    },
    {
      "global": {
        "case_id": 399,
        "display_id": "10",
        "instance_id": 6,
        "case_created": "06.11.2025 12:49",
        "case_created_by": "Surname, Name",
        "status": "Ny",
        "criticality": "Høy",
        "deadline_date": "07.11.2025 14:00"
      },
      "registration": {
        "subject": "Feil ved lasting av brukerprofil",
        "text_beskrivelse": "Når jeg prøver å åpne brukerprofilen min vises en tom side uten noe innhold. Det vises ingen feilmelding, men konsollen viser en 500-feil",
        "text_prrt_operativsystem_og_versjon": "Windows 11 Pro, versjon 23H2",
        "text_prrt_nettleser_og_versjon": "Google Chrome 130.0.6723.70",
        "textarea_hvordan_gjenskape_problemet": "<ul>\n<li>\n<p>Logg inn på systemet</p>\n</li>\n<li>\n<p>Klikk på “Min profil” i toppmenyen</p>\n</li>\n<li>\n<p>Siden laster ikke inn innhold</p>\n</li>\n</ul>",
        "text_forventet_funksjonalitet": "Profilinformasjonen skal lastes inn korrekt og vise brukerdata uten feil",
        "email": "test@gmail.com"
      },
      "processing": {
        "subject": "Feil ved lasting av brukerprofil"
      },
      "link": "/cases/399"
    },
    {
      "global": {
        "case_id": 397,
        "display_id": "09",
        "instance_id": 6,
        "case_created": "06.11.2025 12:14",
        "case_created_by": "Surname, Name",
        "status": "Ny",
        "criticality": "Høy"
      },
      "registration": {
        "subject": "\"&gt;&lt;title&gt;&lt;img title=\"&lt;/title&gt;&lt;img src onerror=alert(document.cookie)&gt;\"&gt;&lt;/title&gt;",
        "text_prrt_operativsystem_og_versjon": "Win",
        "text_prrt_nettleser_og_versjon": "Firefox",
        "textarea_hvordan_gjenskape_problemet": "<ul>\n<li>1</li>\n<li>2</li>\n<li>3</li>\n<li>4</li>\n</ul>",
        "text_forventet_funksjonalitet": "Lorem ipsum",
        "email": "test-bruker@gmail.com"
      },
      "processing": {
        "subject": "&quot;&gt;&lt;title&gt;&lt;img title=&quot;&lt;/title&gt;&lt;img src onerror=alert(document.cookie)&gt;&quot;&gt;&lt;/title&gt;"
      },
      "link": "/cases/397"
    },
    {
      "global": {
        "case_id": 392,
        "display_id": "08",
        "instance_id": 6,
        "case_created": "05.11.2025 16:21",
        "case_created_by": "Surname, Name",
        "status": "Ny",
        "criticality": "Medium",
        "deadline_date": "21.11.2026 00:00"
      },
      "registration": {
        "subject": "Logo-ikon mangler på Om oss-siden",
        "text_prrt_operativsystem_og_versjon": "Windows 25H2",
        "text_prrt_nettleser_og_versjon": "Firefox 144.0.2",
        "textarea_hvordan_gjenskape_problemet": "<ul>\n<li>Gå til nettside.no</li>\n<li>Nagiver til Mer info &gt; Om oss</li>\n<li>Scroll ned</li>\n</ul>",
        "text_forventet_funksjonalitet": "Bildet skal være synlig",
        "email": "test-bruker@gmail.com"
      },
      "processing": {
        "subject": "Logo-ikon mangler på Om oss-siden"
      },
      "link": "/cases/392"
    },
    {
      "global": {
        "case_id": 389,
        "display_id": "07",
        "instance_id": 6,
        "case_created": "05.11.2025 14:35",
        "case_created_by": "Surname, Name",
        "status": "Ny",
        "criticality": ""
      },
      "registration": {
        "subject": "Tittel",
        "text_prrt_operativsystem_og_versjon": "fwef",
        "text_prrt_nettleser_og_versjon": "fewf",
        "textarea_hvordan_gjenskape_problemet": "<p>ewffewfwe</p>",
        "email": "test@gmail.com"
      },
      "processing": {
        "subject": "Tittel"
      },
      "link": "/cases/389"
    }
  ],
  "count": 6,
  "limit": 100,
  "offset": 0,
  "has_more": false
}

export default mockCases;