// Siwalik Measured Sections main code - Safari does not navigate to correct location
// when the tooltip'ed flags are clicked.

var Webflow = Webflow || [];

(function () {
  loadSvgWithTooltips({
    svgUrl:
      "https://raw.githubusercontent.com/aprilbender/siwalik/master/svg/Key%20Map_measured%20sections.svg",
    tooltips: {
      chambal: "Jamarghal Kas",
      pabbi: "Pabbi Hills",
      rohtas: "Central Rohtas",
      nrohtas: "North Rohtas",
      shampur: "Shahpur",
      dhok: "Dhok Saiyidan",
      soan: "Soan",
      ganda: "Ganda Paik",
      bhangala: "Bhangala",
      rata: "Rata dadial",
      mawa: "Mawa kaneli",
      kas: "Kas Guma",
      jhel: "Jhel kas",
      dina: "Dina",
      pind: "Pind Savikka",
      baramula: "Baramula",
      shaliganga: "Shaliganga",
      romushi: "Romushi",
      hirpur: "Hirpur",
      garhi: "Garhi",
      dag: "Dag",
      jari: "Jari",
      tatrot: "Tatrot Andar",
      kotal: "Kotal Kund",
    },
    filePrefix: "Key_Map_measured_sections_svg__",
    tooltipPrefix: "hoverthing",
    // NOTE: contentDivId must match the div atop this embed, and it must be unique on
    //       the page. You can make #ajaxContent2, #ajaxContent3, etc.
    contentDivId: "#ajaxContent",
    updateLink: true,
  });
})();
