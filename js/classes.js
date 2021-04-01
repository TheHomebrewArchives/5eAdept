function classDisplay(x) {
  document.getElementById("classTitleName").innerHTML = c1[x].name;
  document.getElementById("classTable").innerHTML = c1[x].table;
  document.getElementById("hitDie").innerHTML = c1[x].hitDie;
  document.getElementById("hpPerLvl").innerHTML = c1[x].hpPerLvl;
  document.getElementById("scoreMinimum").innerHTML = c1[x].scoreMinimum;
  document.getElementById("otherRequirement").innerHTML = c1[x].otherRequirement;
  document.getElementById("subclassList").innerHTML = c1[x].subclassList;

  document.getElementById("lvl1").innerHTML = c1[x].lvl1;
  document.getElementById("lvl2").innerHTML = c1[x].lvl2;
  document.getElementById("lvl3").innerHTML = c1[x].lvl3;
  document.getElementById("lvl4").innerHTML = c1[x].lvl4;
  document.getElementById("lvl5").innerHTML = c1[x].lvl5;
  document.getElementById("lvl6").innerHTML = c1[x].lvl6;
  document.getElementById("lvl7").innerHTML = c1[x].lvl7;
  document.getElementById("lvl8").innerHTML = c1[x].lvl8;
  document.getElementById("lvl9").innerHTML = c1[x].lvl9;
  document.getElementById("lvl10").innerHTML = c1[x].lvl10;
  document.getElementById("lvl11").innerHTML = c1[x].lvl11;
  document.getElementById("lvl12").innerHTML = c1[x].lvl12;
  document.getElementById("lvl13").innerHTML = c1[x].lvl13;
  document.getElementById("lvl14").innerHTML = c1[x].lvl14;
  document.getElementById("lvl15").innerHTML = c1[x].lvl15;
  document.getElementById("lvl16").innerHTML = c1[x].lvl16;
  document.getElementById("lvl17").innerHTML = c1[x].lvl17;
  document.getElementById("lvl18").innerHTML = c1[x].lvl18;
  document.getElementById("lvl19").innerHTML = c1[x].lvl19;
  document.getElementById("lvl20").innerHTML = c1[x].lvl20;
};

$(document).ready(function() {

  function getData() {
    var tr;
    $.each(classBoon, function(k, v) {
      tr = $("<tr></tr>");
      tr.append("<td><a class='boonDisplayLink' onclick='boonDisplay(" + classBoon.indexOf(v) + ")' href='#" + classBoon.indexOf(v) + "'>" + v.name + "</a></td>");
      tr.append("<td>" + v.cost + "</td>");
      tr.append("<td class='" + v.type.split(" ").join("") + "'>" + v.type + "</td>");
      tr.append("<td>" + v.prereq + "</td>");
      $("#myTable").append(tr);
      tr.append("<td style='display:none;'>" + v.name + "</td>");
        });
    sortTable(4);
  }
  getData();
});

boonDisplay = function(x) {
    document.getElementById("boonDisplayName").innerHTML = classBoon[x].name;
    document.getElementById("boonDisplayType").innerHTML = "<i>" + classBoon[x].type + "</i>";
    document.getElementById("boonCost").innerHTML = "<i> Boon Point Cost: </i>" + classBoon[x].cost;
    document.getElementById("boonDisplayPrerequisite").innerHTML = "<i> Prerequisites: </i>" + classBoon[x].prereq;
    document.getElementById("boonDisplayDescription").innerHTML = classBoon[x].desc;
};

function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  // Set the sorting direction to ascending:
  dir = "asc";
  /* Make a loop that will continue until
  no switching has been done: */
  while (switching) {
    // Start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /* Loop through all table rows (except the
    first, which contains table headers): */
    for (i = 1; i < (rows.length - 1); i++) {
      // Start by saying there should be no switching:
      shouldSwitch = false;
      /* Get the two elements you want to compare,
      one from current row and one from the next: */
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /* Check if the two rows should switch place,
      based on the direction, asc or desc: */
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
      and mark that a switch has been done: */
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // Each time a switch is done, increase this count by 1:
      switchcount ++;
    } else {
      /* If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again. */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }

  boonDisplay(0);

  function fromUrlDisplay() {
    var hash = location.hash.replace("#", "");
    boonDisplay(hash);
  }

  fromUrlDisplay();

}
