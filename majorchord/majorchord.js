var width = $(window).width(),
    height = $(window).height(),
    outerRadius = Math.max(Math.min(width, height)/2-150, 250),
    innerRadius = outerRadius-20;






var translationheight = (((outerRadius+200)*2)-733)/2;
var translationwidth = (width-1050)/2
console.log(translationwidth)

if (width<1184){
  $("#majorlist").attr("class","centered")
  $("#majorlist").width(850)
  translationheight = 20
  $("#divs").unwrap();
  $(".inner").wrap("<ul></ul>")
  $("ul").css({"display":"inline-block", "vertical-align":"top", "padding":"10px"})
  $("li").css("margin","0px")
}

$("#majorlist").css({transform: "translateY("+translationheight+"px)"})




$(document).ready(function() {
    var imajors = [];
    $(".on").each(function(index, value){
      imajors.push(+$(this).attr("id"))
    });
    $.ajax({
        type: "GET",
        url: "sample.csv",
        dataType: "text",
        success: function(data) {
          majorcareers = processData(data, imajors);


var chord = d3.layout.chord()
    .padding(.015)
    .matrix(lines);

var colors = {}
colors["Arts/Entertainment"] = "#7A7A7A";
colors["Writing/Communications"] = "#7A7A7A";
colors["Social/Religious Services"] = "#7A7A7A";
colors["Government"] = "#7A7A7A";
colors["Law"] = "#7A7A7A";
colors["Sales"] = "#7A7A7A";
colors["Consulting"] = "#7A7A7A";
colors["Banking/Financial"] = "#7A7A7A";
colors["Insurance/Management"] = "#7A7A7A";
colors["K-12 Education"] = "#7A7A7A";
colors["College Education"] = "#7A7A7A";
colors["Health/Medicine"] = "#7A7A7A";
colors["Engineering/Construction"] = "#7A7A7A";
colors["Technology"] = "#7A7A7A";
colors["Other"] = "#7A7A7A";

colors["Dance"] = "#bcbddc";
colors["Film and Media Studies"] = "#9e9ac8";
colors["Music"] = "#807dba";
colors["Studio Art"] = "#6a51a3";
colors["Theatre"] = "#4a1486";

colors["American Studies"] = "#fee6ce";
colors["Classics"] = "#fdd0a2";
colors["History"] = "#fdae6b";
colors["History of Art/Architecture"] = "#fd8d3c";
colors["Philosophy"] = "#f16913";
colors["Religion"] = "#d94801";
colors["English/Literature"] = "#a63603";
colors["Languages"] = "#7f2704";

colors["Economics"] = "#deebf7";
colors["Education Studies"] = "#c6dbef";
colors["Geography"] = "#9ecae1";
colors["Political Science"] = "#6baed6";
colors["Psychology"] = "#4292c6";
colors["Sociology/Anthropology"] = "#2171B5";
colors["Environmental Studies"] = "#1265B5";
colors["Gender Sexuality and Feminist Studies"] = "#08519C";
colors["International Politics and Economics"] = "#063D80";
colors["International/Global Studies"] = "#08306B";

colors["Biology"] = "#e5f5e0";
colors["Chemistry & Biochemistry"] = "#c7e9c0";
colors["Computer Science"] = "#a1d99b";
colors["Geology"] = "#74c476";
colors["Math"] = "#41ab5d";
colors["Physics"] = "#238b45";
colors["Molecular Bio & Biochem"] = "#006d2c";
colors["Neuroscience"] = "#00441b";
colors["Indpendent"] = "#00000";

colors["Arts"] = "#4a1486"
colors["Humanities"] = "#fd8d3c"
colors["Interdisciplinary"] = "#7f2704"
colors["Natural Sciences"] = "#74c476"
colors["Social Sciences"] = "#4292c6"




var svg = d3.select("#chords").append("svg")
    .attr("class", "centered")
    .attr("width", (outerRadius+200)*2)
    .attr("height", (outerRadius+200)*2)
  .append("g")
    .attr("transform", "translate(" + (outerRadius+200) + "," + (outerRadius+200) + ")");

svg.append("g")
  .attr("id", "chordg")
  .selectAll("path")
    .data(chord.groups)
  .enter().append("path")
    .attr("class", "arc")
    .style("fill", function(d) { return colors[majorcareers[d.index]]; })
    .style("stroke", function(d) { return colors[majorcareers[d.index]]; })
    .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))
    .on("mouseover", fade(.1))
    .on("mouseout", fade(1));

svg.append("g")
    .attr("class", "chord")
    .attr("id", "pathg")
  .selectAll("path")
    .data(chord.chords)
  .enter().append("path")
    .attr("class", "path")
    .attr("d", d3.svg.chord().radius(innerRadius))
    .style("fill", function(d) { 
      return d.source.index < 15 ? colors[majorcareers[d.target.index]] : colors[majorcareers[d.source.index]]; 
    })
    .style("opacity", 1);





var ticks = svg.append("g")
  .attr("id", "tick1")
  .selectAll("g")
    .attr("class", "ticks")
    .data(chord.groups)
  .enter().append("g")
    .selectAll("g")
    .attr("class", "group")
    .data(groupTicks)
  .enter().append("g")
    .attr("transform", function(d) {
      return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
          + "translate(" + outerRadius + ",0)";
    });

ticks.append("line")
    .attr("x1", 1)
    .attr("y1", 0)
    .attr("x2", 5)
    .attr("y2", 0)
    .style("stroke", "#000");

ticks.append("text")
    .attr("class", "label")
    .attr("x", 8)
    .attr("dy", ".35em")
    .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
    .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
    .text(function(d) { return d.label; });

function groupTicks(d) {
  var k = (d.endAngle - d.startAngle) / d.value;
  return d3.range(0, d.value, 1000).map(function(v, i) {
    return {
      angle: d.startAngle+((d.endAngle-d.startAngle)/2),
      label: majorcareers[d.index]
    };
  });
}

// Returns an event handler for fading a given chord group.
function fade(opacity) {
  return function(g, i) {
    svg.selectAll(".chord path")
        .filter(function(d) { return d.source.index != i && d.target.index != i; })
      .transition()
        .style("opacity", opacity);
  };
}



























//This is what happens when you click on the list
  $("li").click( function() {
  $(this).toggleClass("off");
  $(this).toggleClass("on");
  if ($(this).attr("id") == "1"){
    $("#2").attr("class", "off")
    $("#3").attr("class", "off")
    $("#4").attr("class", "off")
    $("#5").attr("class", "off")
    $("#6").attr("class", "off")
    $("#37").attr("class", "off")
  }
  if ($(this).attr("id") == "7"){
    $("#8").attr("class", "off")
    $("#9").attr("class", "off")
    $("#10").attr("class", "off")
    $("#11").attr("class", "off")
    $("#12").attr("class", "off")
    $("#13").attr("class", "off")
    $("#14").attr("class", "off")
    $("#15").attr("class", "off")
    $("#37").attr("class", "off")
  }
  if ($(this).attr("id") == "16"){
    $("#17").attr("class", "off")
    $("#18").attr("class", "off")
    $("#19").attr("class", "off")
    $("#20").attr("class", "off")
    $("#21").attr("class", "off")
    $("#22").attr("class", "off")
    $("#23").attr("class", "off")
    $("#24").attr("class", "off")
    $("#25").attr("class", "off")
    $("#26").attr("class", "off")
    $("#37").attr("class", "off")
  }
  if ($(this).attr("id") == "27"){
    $("#28").attr("class", "off")
    $("#29").attr("class", "off")
    $("#29").attr("class", "off")
    $("#30").attr("class", "off")
    $("#31").attr("class", "off")
    $("#32").attr("class", "off")
    $("#33").attr("class", "off")
    $("#34").attr("class", "off")
    $("#35").attr("class", "off")
    $("#37").attr("class", "off")
  }
  if ($(this).attr("id") == "37"){
    $("#2").attr("class", "on")
    $("#3").attr("class", "on")
    $("#4").attr("class", "on")
    $("#5").attr("class", "on")
    $("#6").attr("class", "on")
    $("#8").attr("class", "on")
    $("#9").attr("class", "on")
    $("#10").attr("class", "on")
    $("#11").attr("class", "on")
    $("#12").attr("class", "on")
    $("#13").attr("class", "on")
    $("#14").attr("class", "on")
    $("#15").attr("class", "on")
    $("#17").attr("class", "on")
    $("#18").attr("class", "on")
    $("#19").attr("class", "on")
    $("#20").attr("class", "on")
    $("#21").attr("class", "on")
    $("#22").attr("class", "on")
    $("#23").attr("class", "on")
    $("#24").attr("class", "on")
    $("#25").attr("class", "on")
    $("#26").attr("class", "on")
    $("#28").attr("class", "on")
    $("#29").attr("class", "on")
    $("#29").attr("class", "on")
    $("#30").attr("class", "on")
    $("#31").attr("class", "on")
    $("#32").attr("class", "on")
    $("#33").attr("class", "on")
    $("#34").attr("class", "on")
    $("#35").attr("class", "on")
    $("#36").attr("class", "on")
    $("#1").attr("class", "off")
    $("#7").attr("class", "off")
    $("#16").attr("class", "off")
    $("#27").attr("class", "off")
  }
  if ($(this).attr("id") == 2 || 
      $(this).attr("id") == 3 || 
      $(this).attr("id") == 4 || 
      $(this).attr("id") == 5 || 
      $(this).attr("id") == 6 ){
    $("#1").attr("class", "off")
    $("#37").attr("class", "off")
  }
  if ($(this).attr("id") == 8 || 
      $(this).attr("id") == 9 || 
      $(this).attr("id") == 10 || 
      $(this).attr("id") == 11 ||
      $(this).attr("id") == 12 ||
      $(this).attr("id") == 13 ||
      $(this).attr("id") == 14 ||
      $(this).attr("id") == 15 ){
    $("#7").attr("class", "off")
    $("#37").attr("class", "off")
  }
  if ($(this).attr("id") == 17 || 
      $(this).attr("id") == 18 ||
      $(this).attr("id") == 19 ||
      $(this).attr("id") == 20 ||
      $(this).attr("id") == 21 ||
      $(this).attr("id") == 22 ||
      $(this).attr("id") == 23 ||
      $(this).attr("id") == 24 ||
      $(this).attr("id") == 25 ||
      $(this).attr("id") == 26 ){
    $("#16").attr("class", "off")
    $("#37").attr("class", "off")
  }
  if ($(this).attr("id") == 28 ||
      $(this).attr("id") == 29 ||
      $(this).attr("id") == 30 ||
      $(this).attr("id") == 31 ||
      $(this).attr("id") == 32 ||
      $(this).attr("id") == 33 ||
      $(this).attr("id") == 34 ||
      $(this).attr("id") == 35 ){
    $("#27").attr("class", "off")
    $("#37").attr("class", "off")
  }
  if ($(this).attr("id") == 36){
    $("#37").attr("class", "off")
  }
  var imajors = [];
  $(".on").each(function(index, value){
    if($(this).attr("id") != 37){
    imajors.push(+$(this).attr("id"))
  }
  });
  rerender(imajors)

  function rerender(majorarr) {
  $.ajax({
        type: "GET",
        url: "sample.csv",
        dataType: "text",
        success: function(data) {
          majorcareers = processData(data, majorarr);

          var chord = d3.layout.chord()
            .padding(.015)
            .matrix(lines);


          // deal with the arcs

          var arcs = d3.select("#chordg").selectAll(".arc")
            .data(chord.groups);


          arcs.exit().remove();

          arcs.enter().append("path")
            .attr("class", "arc")
          .transition(1500)
            .style("fill", function(d) { return colors[majorcareers[d.index]]; })
            .style("stroke", function(d) { return colors[majorcareers[d.index]]; })
            .attr("d", d3.svg.arc().startAngle(0).endAngle(0).innerRadius(innerRadius).outerRadius(outerRadius))


          d3.selectAll(".arc")
          .transition(1500)
            .style("fill", function(d) { return colors[majorcareers[d.index]]; })
            .style("stroke", function(d) { return colors[majorcareers[d.index]]; })
            .attr("d", d3.svg.arc().innerRadius(innerRadius).outerRadius(outerRadius))

          d3.selectAll(".arc")
            .on("mouseover", fade(.1))
            .on("mouseout", fade(1));








          var paths = d3.select("#pathg").selectAll(".path")
            .data(chord.chords)

          paths.exit().remove();

          paths.enter().append("path")
            .attr("class", "path")
            .attr("d", d3.svg.chord().radius(innerRadius))
            .style("fill", function(d) { 
              return d.source.index < 15 ? colors[majorcareers[d.target.index]] : colors[majorcareers[d.source.index]]; 
            })
            .style("opacity", 1);

          d3.selectAll(".path")
          .transition(1500)
            .attr("d", d3.svg.chord().radius(innerRadius))
            .style("fill", function(d) { 
              return d.source.index < 15 ? colors[majorcareers[d.target.index]] : colors[majorcareers[d.source.index]]; 
            })
            .style("opacity", 1);


          d3.select("#tick1").remove()
          var ticks = svg.append("g")
          .attr("id", "tick1")
          .selectAll("g")
            .attr("class", "ticks")
            .data(chord.groups)
          .enter().append("g")
            .attr("id", "tick2")
            .selectAll("g")
            .attr("class", "group")
            .data(groupTicks)
          .enter().append("g")
            .attr("class", "realticks")
            .attr("transform", function(d) {
              return "rotate(" + (d.angle * 180 / Math.PI - 90) + ")"
                  + "translate(" + outerRadius + ",0)";
            });

        ticks.append("line")
            .attr("x1", 1)
            .attr("y1", 0)
            .attr("x2", 5)
            .attr("y2", 0)
            .style("stroke", "#000");

        ticks.append("text")
            .attr("class", "label")
            .attr("x", 8)
            .attr("dy", ".35em")
            .attr("transform", function(d) { return d.angle > Math.PI ? "rotate(180)translate(-16)" : null; })
            .style("text-anchor", function(d) { return d.angle > Math.PI ? "end" : null; })
            .text(function(d) { return d.label; });

        function groupTicks(d) {
          var k = (d.endAngle - d.startAngle) / d.value;
          return d3.range(0, d.value, 1000).map(function(v, i) {
            return {
              angle: d.startAngle+((d.endAngle-d.startAngle)/2),
              label: majorcareers[d.index]
            };
          });
        }


        }
    });
  }
  });
}
});
});




























function processData(allText, majorarr) {
    var allTextLines = allText.split("\r"||"\n");
    var firstarr = [];
    for (item in allTextLines) {
      entry = allTextLines[item].split(",");
      firstarr.push(entry);
    }

    var majorcareers = [];

    for (var q = 1; q<firstarr[0].length; q++){
      majorcareers.push(firstarr[0][q])
    }
    for (var q = 1; q<firstarr.length; q++){
      if (majorarr.indexOf(q) !== -1) {
      majorcareers.push(firstarr[q][0])
    }
    }

    length = firstarr[0].length;
    height = firstarr.length;

      lines = [];
  for (var i=1; i<length; i++) {
    line = [];
    for (var z=1; z<length; z++) {
      line.push(0)
    }
    for (var x=1; x<=height; x++) {
      if (majorarr.indexOf(x) !== -1) {
      line.push(+firstarr[x][i]);
    }
    }


      lines.push(line);
  }

  for (var i=1; i<= height; i++) {
      var line = [];
      if (majorarr.indexOf(i) !== -1){
      for (var z=1; z<length; z++) {
        
        line.push(+firstarr[i][z]);
      }
      for (var x=0; x<majorarr.length; x++) {
        line.push(0);
      }

      lines.push(line);
  }}

return majorcareers;

}



