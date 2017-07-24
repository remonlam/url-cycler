var sites = [
  "http://ups1.c-s.io/cgi-bin/apcupsd/upsstats.cgi",
  "http://ups2.c-s.io/cgi-bin/apcupsd/upsstats.cgi",
  "http://ups3.c-s.io/cgi-bin/apcupsd/upsstats.cgi",
  "http://ups4.c-s.io/cgi-bin/apcupsd/upsstats.cgi",
  "http://ups5.c-s.io/cgi-bin/apcupsd/upsstats.cgi",
  "http://ups6.c-s.io/cgi-bin/apcupsd/upsstats.cgi",
  "http://ups7.c-s.io/cgi-bin/apcupsd/upsstats.cgi",
  "https://api.buienradar.nl/image/1.0/RadarMapNL?w=500&h=512",
];
var currentSite = sites.length;

$(document).ready(function () {
  var $iframe = $("iframe").attr("src","http://www.google.com");
  setInterval(function() {
    (currentSite == 0) ? currentSite = sites.length - 1 : currentSite = currentSite -1;
    $iframe.attr("src",sites[currentSite]);
  }, 5000);
});
