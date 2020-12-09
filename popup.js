document.getElementById("searchForm").addEventListener("submit", searchIncident);

function searchIncident() {
  var searchURL = "https://launchpad.support.sap.com/#/incident/search/" + encodeURIComponent(encodeURIComponent(incident.value.trim()))
  chrome.tabs.create({ url: searchURL });
  window.close();
}

window.onload = function() {
    var input = document.getElementById("incident").focus();
}
