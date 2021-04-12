$(document).ready(function() {

  function getData() {
    var tr;
    $.each(a1, function(k, v) {
      tr = $("<tr></tr>");
      tr.append("<td><a class='boonDisplayLink' onclick='boonDisplay(" + a1.indexOf(v) + ")' href='#" + a1.indexOf(v) + "'>" + v.name + "</a></td>");
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
    var boon = a1;
    document.getElementById("boonDisplayName").innerHTML = boon[x].name;
    document.getElementById("boonDisplayType").innerHTML = "<i>" + boon[x].type + "</i>";
    document.getElementById("boonCost").innerHTML = "<i> Boon Point Cost: </i>" + boon[x].cost;
    document.getElementById("boonDisplayPrerequisite").innerHTML = "<i> Prerequisites: </i>" + boon[x].prereq;
    document.getElementById("boonDisplayDescription").innerHTML = boon[x].desc;
};

function search(cl) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput" + String(cl + 1));
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[cl];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

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
    for (i = 0; i < (rows.length - 1); i++) {
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

  function fromUrlDisplay() {
    var hash = 1 + parseInt("0" + location.hash.replace("#", ""));
    boonDisplay(hash);
    console.log(hash);
  }

  fromUrlDisplay();

}
