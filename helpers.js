export function formatDateTime(input) {
    const [datePart, time] = input.split(" ");
    const [day, month, year] = datePart.split(".").map(Number);
    const inputDate = new Date(year, month - 1, day);
    const now = new Date();

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    let dateLabel;
    if (inputDate.getTime() === today.getTime()) {
        dateLabel = "Today";
    } else if (inputDate.getTime() === yesterday.getTime()) {
        dateLabel = "Yesterday";
    } else {
        dateLabel = datePart;
    }

    return `${dateLabel} @ ${time}`;
}

export function appendCriticalityEmoji(criticalityString) {
    if (criticalityString === "Lav") return `🟢${criticalityString}`;
    if (criticalityString === "Medium") return `🟠${criticalityString}`;
    if (criticalityString === "Høy") return `🔴${criticalityString}`;
    return criticalityString;
}

export function appendTickets(data) {
    console.log(data);
    const template = document.getElementById("ticket-template");
    const ticketsContainer = document.getElementById("tickets-list");
    
    for (let i = 0; i < data.count; i++) {
        const clone = template.content.cloneNode(true);
        const c = data.cases[i];
        const g = c.global;
        const r = c.registration;

        clone.querySelector(".timestamp").textContent = `${formatDateTime(g.case_created)} | ${r.email}`;
        clone.querySelector(".title").textContent = r.subject || "Ingen tittel";
        clone.querySelector(".description").textContent = `"${r.text_beskrivelse}"` || "Ingen beskrivelse";
        clone.querySelector(".detail-environment-OS").textContent = r.text_prrt_operativsystem_og_versjon || "Ukjent OS";
        clone.querySelector(".detail-environment-browser").textContent = r.text_prrt_nettleser_og_versjon || "Ukjent nettleser";
        clone.querySelector(".steps").innerHTML = r.textarea_hvordan_gjenskape_problemet || "-";
        clone.querySelector(".expected-behavior").innerHTML = r.text_forventet_funksjonalitet || "-";
        clone.querySelector(".meta-criticality").textContent = appendCriticalityEmoji(g.criticality) || "-";
        clone.querySelector(".meta-status").textContent = g.status || "-";
        clone.querySelector(".meta-deadline").textContent = g.deadline_date || "-";
        clone.querySelector(".id-number").textContent = g.display_id || "-";
        ticketsContainer.appendChild(clone);
    }
}
