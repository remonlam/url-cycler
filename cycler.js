var sites = [
  "http://10.10.40.21/cgi-bin/apcupsd/upsstats.cgi",
  "http://10.10.100.20/cgi-bin/apcupsd/upsstats.cgi",
];
var currentSite = sites.length;

$(document).ready(function () {
  var $iframe = $("iframe").attr("src","http://www.google.com");
  setInterval(function() {
    (currentSite == 0) ? currentSite = sites.length - 1 : currentSite = currentSite -1;
    $iframe.attr("src",sites[currentSite]);
  }, 5000);
});
