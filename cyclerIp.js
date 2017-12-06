var sites = [
  "http://10.10.40.1/cgi-bin/apcupsd/upsstats.cgi",
  "http://10.10.40.2/cgi-bin/apcupsd/upsstats.cgi",
  "http://10.10.40.3/cgi-bin/apcupsd/upsstats.cgi",
  "http://10.10.40.4/cgi-bin/apcupsd/upsstats.cgi",
  "http://10.10.40.5/cgi-bin/apcupsd/upsstats.cgi",
  "http://10.10.40.6/cgi-bin/apcupsd/upsstats.cgi",
  "http://10.10.40.7/cgi-bin/apcupsd/upsstats.cgi",
  "http://10.10.40.8/cgi-bin/apcupsd/upsstats.cgi",
  "https://api.buienradar.nl/image/1.0/lightningnl",
  "http://10.10.160.140:8000",
];
var currentSite = sites.length;

$(document).ready(function () {
  var $iframe = $("iframe").attr("src","http://www.google.com");
  setInterval(function() {
    (currentSite == 0) ? currentSite = sites.length - 1 : currentSite = currentSite -1;
    $iframe.attr("src",sites[currentSite]);
  }, 5000);
});
