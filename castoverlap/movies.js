
var movies = {};

function contains(thing){
    var i = 0;
    for (var match in nodes) {
        if (nodes[match]["name"] == thing["name"]){
            return  i;
            
        }
    i++;
    }
    return -1
}

var nodes = [];
var links = [];

                var width = 1200,
                height = 500;

                var color = d3.scale.category20();

                var svg = d3.select("body").append("svg")
                    .attr("width", width)
                    .attr("height", height);

                var force = d3.layout.force()
                    .size([width, height])
                    .charge(-200)
                    .linkDistance(40)
                    .on("tick", tick);

                function tick() {
                    d3.selectAll(".node").attr("cx", function(d) { return d.x = Math.max(8, Math.min(width - 8, d.x)); })
                        .attr("cy", function(d) { return d.y = Math.max(8, Math.min(height - 8, d.y)); });

                    d3.selectAll(".link").attr("x1", function(d) { return d.source.x; })
                        .attr("y1", function(d) { return d.source.y; })
                        .attr("x2", function(d) { return d.target.x; })
                        .attr("y2", function(d) { return d.target.y; });


                }

                var drag = force.drag() 



$(document).ready(function() {
    var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input,
        movieName,
        key = '&api_key=66451c520dd591701726d2ab5cc2e9ba';


    var movieField = document.getElementById("movie");

    movieField.onfocus = function() {
        if (movieField.value == "Please input a movie title") {
            movieField.value = ""
            movieField.style.color = "black"
        }
    }
    movieField.onblur = function() {
        if (movieField.value == "") {
            movieField.value = "Please input a movie title"
            movieField.style.color = "grey"
        }
    }

    $("#movieform").submit(function(e) {
        var input = $('#movie').val()

        $.ajax({
            type: 'GET',
            url: url + mode + input + key,
            async: false,
            jsonpCallback: 'testing',
            contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
                console.dir(json);
            },
            error: function(e) {
                console.log(e.message);
            }
        }).done(function(data){
            if (data.results.length==0){
                $("#warning").text("No results were found")
            }
            else {
                $("#warning").html("&nbsp;")
            }
            var url = 'http://api.themoviedb.org/3/movie/',
            id = data["results"][0].id,
            mode = '/credits',
            key = '?api_key=66451c520dd591701726d2ab5cc2e9ba';
            $.ajax({
                type: 'GET',
                url: url + id + mode + key,
                async: false,
                jsonpCallback: 'testing',
                contentType: 'application/json',
                dataType: 'jsonp',
                success: function(json) {
                    console.dir(json);
                },
                error: function(e) {
                    console.log(e.message);
                }
            }).done(function(credits){
                movieTitle = data.results[0]["original_title"]
                movies[movieTitle] = [];

                movies[movieTitle].push({
                    "name":movieTitle
                })
                for (member in credits["cast"]) {
                    movies[movieTitle].push({
                    "name": credits["cast"][member]["name"],
                    "movie": movieTitle
                    })    
                }
                console.log(movies)

                var i = 0;
                for (movie in movies) {
                    for (key in movies[movie]){
                        var inNodes = contains(movies[movie][key])
                        if (inNodes != -1){
                            links.push({
                                "source":movies[movie][0], "target":nodes[inNodes]
                        })
                        }
                        else {
                        nodes.push(movies[movie][key]);
                        links.push({
                            "source":movies[movie][0], "target":movies[movie][key]
                        })}
                        }
                }


               


                var link = svg.selectAll(".link"),
                    node = svg.selectAll(".node");
                


                var ttip = d3.select("#warning")

                link = link.data(links);
                    link.enter().insert("line", ".node")
                    .attr("class", "link")


                node = node.data(nodes)
                    .enter().append("circle")
                    .attr("class", "node")
                    .attr("r", 8)
                    .style("fill", function(d) { return color(d["movie"]); })
                    .call(drag)
                    .on("mouseover", function(d) {
                        ttip.transition()        
                            .duration(200)      
                            .style("opacity", 1);      
                        ttip.html(d["name"])     
                    }) 

                    .on("mouseout", function(d) {      
                        ttip.transition()        
                            .duration(500)      
                            .style("opacity", 0);   
                    });




                force
                    .links(links)
                    .nodes(nodes)
                    .start();



            })
        })
        e.preventDefault();
    });
    

});







